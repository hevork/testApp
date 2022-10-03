import styles from "./ModalContent.module.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { LabelData } from "./LabelData";
import { useAppDispatch } from "../../../store";
import { addInsight } from "../../../store/reducers/customersDataReducer";
import FooterModal from "./FooterModal";

export function ModalContent({ itemCustomer, setOpen }) {
  const [toggledNoData, setToggledNoData] = useState({
    impressions: false,
    conversions: false
  });
  const [toggledUtil, setToggledUtil] = useState({
    impressions: false,
    conversions: false
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useAppDispatch();

  const handleSave = p => {
    dispatch(
      addInsight({ ...itemCustomer, insight: [...itemCustomer.insight, p] })
    );
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <h1>Create New Customer</h1>
      <h2>Alert</h2>
      <div>
        <form
          className={styles.formBlock}
          onSubmit={handleSubmit(data =>
            handleSave({ ...data, toggledNoData, toggledUtil })
          )}
        >
          {LabelData.map(itemInput => {
            return (
              <div key={itemInput.value}>
                <label className={styles.labelValue} htmlFor={itemInput.value}>
                  {itemInput.text}
                </label>
                <TextField
                  {...register(itemInput.value, {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /^\d+$/
                  })}
                  fullWidth
                  placeholder="Set value"
                  id={itemInput.value}
                  className={styles.textField}
                />
                {errors[itemInput.value] && (
                  <p className={styles.errors}>Invalid {itemInput.text}</p>
                )}
              </div>
            );
          })}
          <input
            className={styles.submitBtn}
            type="submit"
            value={"Create New Customer"}
          />
        </form>
      </div>
      <FooterModal
        toggledUtil={toggledUtil}
        setToggledUtil={setToggledUtil}
        toggledNoData={toggledNoData}
        setToggledNoData={setToggledNoData}
      />
    </div>
  );
}

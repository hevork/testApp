import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./DropDownInput.module.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import styled from "styled-components";

const InputWrapper = styled.div`
	position: relative;
	input {
		margin-left: 20px;
	}
	& > .MuiSvgIcon-root {
		color: rgba(0, 0, 0, 0.27);
		position: absolute;
		top: 50%;
		transform: translate(5px, -50%);
	}
`;

const options = ["Last year", "Last month"];
export function DropDownInput() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className={styles.autocompleteContainer}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 240 }}
        renderInput={params => (
          <>
            <InputWrapper>
              <DateRangeIcon />
              <TextField
                {...params}
                placeholder={`Select date`}
                className={styles.autocomplete}
              />
            </InputWrapper>
          </>
        )}
      />
    </div>
  );
}

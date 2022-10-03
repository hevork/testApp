import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import styles from "./NewCustomerModal.module.css";
import Modal from "@mui/material/Modal";
import { ModalContent } from "./modal-content";

export function NewCustomerModal({ open, setOpen, itemCustomer }) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={!!open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div>
          <div className={styles.boxModal}>
            <nav>
              <section onClick={handleClose}>
                {"<"} <span>Back</span>
              </section>
              <section onClick={handleClose}>X</section>
            </nav>
            <div>
              <ModalContent itemCustomer={itemCustomer} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

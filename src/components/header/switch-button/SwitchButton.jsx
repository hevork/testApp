import React, { useState } from "react";
import styles from "./SwitchButton.module.css";

export function SwitchButton() {
  const [currentJob, setCurrentJob] = useState(true);
  return (
    <div className={styles.switchButtonWrapp}>
      <div className={styles.switchButton}>
        <input
          className={`${styles.toggle} ${styles.toggleLeft}`}
          type="radio"
          checked={currentJob}
          onChange={() => console.log("")}
        />
        <label
          className={styles.btn}
          onClick={() => {
            setCurrentJob(!currentJob);
          }}
        >
          All
        </label>
        <input
          className={`${styles.toggle} ${styles.toggleRight}`}
          type="radio"
          checked={!currentJob}
          onChange={() => console.log("")}
        />
        <label
          className={styles.btn}
          onClick={() => {
            setCurrentJob(!currentJob);
          }}
        >
          Favorite
        </label>
      </div>
    </div>
  );
}

import React from "react";
import FooterModalBlock from "./FooterModalBlock";
import styles from "./FooterModal.module.css";

const FooterModal = ({
  toggledNoData,
  setToggledNoData,
  toggledUtil,
  setToggledUtil
}) => {
  return (
    <div className={styles.wrapper}>
      <FooterModalBlock
        title={"No Data"}
        toggled={toggledNoData}
        setToggled={setToggledNoData}
      />
      <FooterModalBlock
        title={"Low Utilization"}
        toggled={toggledUtil}
        setToggled={setToggledUtil}
      />
    </div>
  );
};

export default FooterModal;

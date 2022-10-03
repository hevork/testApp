import React from "react";
import { Switch, withStyles } from "@material-ui/core";
import styles from "./FooterModal.module.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useLovelySwitchStyles } from "@mui-treasury/styles/switch/lovely";

const CustomSwitch = withStyles({
  colorSecondary: {
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#cd387a"
    }
  },
  track: {
    backgroundColor: "rgba(0, 0, 0, 0.24) "
  },
  root: {},
  switchBase: {},
  checked: {},
  thumb: {}
})(Switch);

const FooterModalBlock = ({
  title,
  text1 = "impressions",
  text2 = "conversions",
  toggled,
  setToggled
}) => {
  const lovelyStyles = useLovelySwitchStyles();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <InfoOutlinedIcon style={{ color: "lightgray" }} />
      </div>
      <div className={styles.text}>
        <div>{text1}</div>
        <div className={styles.toggle}>
          <CustomSwitch
            checked={toggled.impressions}
            onChange={e =>
              setToggled(state => ({ ...state, impressions: e.target.checked }))
            }
            classes={lovelyStyles}
          />
        </div>
      </div>
      <div className={styles.text}>
        <div>{text2}</div>
        <div>
          <CustomSwitch
            checked={toggled.conversions}
            onChange={e =>
              setToggled(state => ({ ...state, conversions: e.target.checked }))
            }
            classes={lovelyStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterModalBlock;

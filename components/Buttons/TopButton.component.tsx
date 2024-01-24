import React from "react";

import styles from "./button.module.css";
import ArrowIcon from "../Icons/ArrowIcon";
import { TopButton } from "@/types/components";

const TopButton: React.FC<TopButton> = ({ show }) => {
  return (
    <div
    onClick={() => window.scroll(0, 0)}
      className={[
        styles.topButton,
        show ? styles.showTop : styles.hideTop,
      ].join(" ")}
    >
      <ArrowIcon className={styles.topIcon} />
    </div>
  );
};

export default TopButton;

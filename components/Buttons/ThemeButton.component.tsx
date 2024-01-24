import React, { useState } from "react";

import styles from "./button.module.css";
import DarkIcon from "../Icons/DarkIcon";
import LightIcon from "../Icons/LightIcon";

const ThemeButton: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleSwitch = () => {
    setActive(!active);
  };
  return (
    <div
      className={[
        styles.themeButton,
        active ? styles.active : styles.inactive,
      ].join(" ")}
      onClick={() => handleSwitch()}
    >
      <div
        className={[
          styles.themeSwitch,
          active ? styles.activeSwitch : styles.inactiveSwitch,
        ].join(" ")}
      />
      <DarkIcon className={[styles.themeIcon, '!fill-white'].join(" ")} />
      <LightIcon className={[styles.themeIcon].join(" ")} />
    </div>
  );
};

export default ThemeButton;

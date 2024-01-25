import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import styles from "./button.module.css";
import DarkIcon from "../Icons/DarkIcon";
import LightIcon from "../Icons/LightIcon";

const ThemeButton: React.FC = () => {
  const [light, setLight] = useState<boolean>(true);
  const { theme, setTheme } = useTheme();
  const handleSwitch = () => {
    if (light) {
      setLight(false);
      setTheme("dark");
    }
    if (!light) {
      setLight(true);
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      setLight(false);
      setTheme("dark");
    }
    if (theme === "light") {
      setLight(true);
      setTheme("light");
    }
  }, [theme, setTheme]);
  return (
    <div
      className={[
        styles.themeButton,
        light ? styles.active : styles.inactive,
      ].join(" ")}
      onClick={() => handleSwitch()}
    >
      <div
        className={[
          styles.themeSwitch,
          light ? styles.activeSwitch : styles.inactiveSwitch,
        ].join(" ")}
      />
      <LightIcon className={[styles.themeIcon, "!fill-white"].join(" ")} />
      <DarkIcon className={[styles.themeIcon].join(" ")} />
    </div>
  );
};

export default ThemeButton;

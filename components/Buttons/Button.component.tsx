import React from "react";

import styles from "./button.module.css";
import { Button, ButtonType } from "@/types/components";

const Button: React.FC<Button> = ({
  text,
  disabled,
  type = ButtonType.PRI,
  onClick = () => {},
}) => {
  let _typeVar: string[] = ["bg-primary", "text-primary-white"];
  switch (type) {
    case ButtonType.PRI:
      _typeVar = ["bg-primary", "text-primary-white"];
      break;
    case ButtonType.SEC:
      _typeVar = ["bg-secondary", "text-primary-white"];
    default:
      break;
  }
  return (
    <button
      className={[styles.button, disabled && styles.disabled, _typeVar[0]].join(
        " "
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={_typeVar[1]}>{text}</span>
    </button>
  );
};

export default Button;

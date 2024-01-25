import React from "react";

import styles from "./input.module.css";
import { Input } from "@/types/components";

const Input: React.FC<Input> = ({ label, type, placeholder }) => {
  return (
    <div 
    className={[styles.inputContainer, "dark:bg-primary-black"].join(" ")}>
      <label className="dark:bg-primary-black dark:text-white">{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;

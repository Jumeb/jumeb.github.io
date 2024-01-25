import React from "react";

import styles from "./input.module.css";
import { Input } from "@/types/components";

const Textarea: React.FC<Input> = ({ label, placeholder }) => {
  return (
    <div className={[styles.inputContainer, "dark:bg-primary-black"].join(" ")}>
      <label className="dark:bg-primary-black dark:text-white">{label}</label>
      <textarea rows={12} placeholder={placeholder} />
    </div>
  );
};

export default Textarea;

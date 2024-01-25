import React from "react";

import styles from "./button.module.css";
import Link from "next/link";
import { SocialLink } from "@/types/components";

const SocialLinks: React.FC<SocialLink> = ({ children, to }) => {
  return (
    <Link
      href={to}
      className={[styles.socialButton, "dark:bg-primary-black"].join(" ")}
    >
      {children}
    </Link>
  );
};

export default SocialLinks;

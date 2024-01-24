import React from "react";

import styles from "./button.module.css";
import Link from "next/link";
import { SocialLink } from "@/types/components";

const SocialLinks: React.FC<SocialLink> = ({ children, to }) => {
  return (
    <Link href={to} className={styles.socialButton}>
      {children}
    </Link>
  );
};

export default SocialLinks;

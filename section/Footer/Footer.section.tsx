import React from "react";

import styles from "./footer.module.css";
import { Navlinks } from "@/types/components";
import Link from "next/link";
import Twitter from "@/components/Icons/Twitter";
import LinkedIn from "@/components/Icons/LinkedIn";
import GitHub from "@/components/Icons/GitHub";

const Footer: React.FC = () => {
  const footerlinks: Navlinks[] = [
    { to: "/about-me", label: "About me" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact-me", label: "Contact me" },
  ];
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>Jume</h2>
        <div className={styles.footerlinks}>
          {footerlinks.map((footerlink, index: number) => (
            <Link
              key={index + footerlink.to}
              href={footerlink.to}
              className={[styles.footerlink].join(" ")}
            >
              {footerlink.label}
            </Link>
          ))}
        </div>
        <div className={styles.footerlinks}>
          <Link href="https://twitter.com/JumeNjah">
            <Twitter className={styles.footerIcon} />
          </Link>
          <Link href="https://www.linkedin.com/in/jume-njah/">
            <LinkedIn className={styles.footerIcon} />
          </Link>
          <Link href="https://github.com/Jumeb">
            <GitHub className={styles.footerIcon} />
          </Link>
        </div>
      </div>
      <p>&copy; All rights reserved By Bedimcode</p>
    </footer>
  );
};

export default Footer;

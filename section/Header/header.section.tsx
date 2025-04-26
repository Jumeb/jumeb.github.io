/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./header.module.css";
import { Assets } from "@/utils/static/assets";
import { UseRandomRange } from "@/utils/lib/UseRandomRange";
import SocialLinks from "@/components/Buttons/SocialLinks.component";
import LinkedIn from "@/components/Icons/LinkedIn";
import GitHub from "@/components/Icons/GitHub";
import Twitter from "@/components/Icons/Twitter";
import Button from "@/components/Buttons/Button.component";

const Header: React.FC = () => {
  const random = UseRandomRange(6);
  const images = [
    Assets.img1,
    Assets.img2,
    Assets.img3,
    Assets.img4,
    Assets.img5,
    Assets.img6,
    Assets.img7,
  ];
  return (
    <section id="header" className={styles.header}>
      <div className={styles.headerLeft}>
        <div
          className={[styles.imageContainer, "dark:bg-primary-black"].join(" ")}
        >
          <div className={styles.imageBorder}>
            <img src={images[random]} alt="Jume's image" loading="lazy" />
          </div>
        </div>
      </div>
      <div className={[styles.headerRight, "dark:bg-primary-black"].join(" ")}>
        <div className={styles.rightContent}>
          <h2 className="dark:!text-white">Jume Njah</h2>
          <p className="dark:!text-white">
            Frontend Developer | Mobile App Developer
          </p>
          <a
            href={Assets.cv}
            className={styles.rightButton}
            download="Jume's CV"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Download CV" />
          </a>
        </div>
        <div className={styles.socialLinks}>
          <SocialLinks to="https://www.linkedin.com/in/jume-njah/">
            <LinkedIn className={styles.socialIcon} />
          </SocialLinks>
          <SocialLinks to="https://github.com/Jumeb">
            <GitHub className={styles.socialIcon} />
          </SocialLinks>
          <SocialLinks to="https://twitter.com/JumeNjah">
            <Twitter className={styles.socialIcon} />
          </SocialLinks>
        </div>
      </div>
    </section>
  );
};

export default Header;

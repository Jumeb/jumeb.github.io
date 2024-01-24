/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./card.module.css";
import { Assets } from "@/utils/static/assets";
import Link from "next/link";
import ArrowCircleIcon from "../Icons/ArrowCircleIcon";

const WorkCard: React.FC = () => {
  return (
    <div className={styles.workCard}>
      <div className={styles.workImage}>
        <img src={Assets.img2} alt="Project name" loading="lazy" />
        <div className={styles.workImageBar}>
          <div className={styles.workBadge}>
            <p>Personal</p>
          </div>
          <Link href="/">
            <ArrowCircleIcon className={styles.workLink} />
          </Link>
        </div>
      </div>
      <h5>Project name</h5>
      <p>project type</p>
    </div>
  );
};

export default WorkCard;

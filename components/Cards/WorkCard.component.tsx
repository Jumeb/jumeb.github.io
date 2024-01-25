/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./card.module.css";
import Link from "next/link";
import ArrowCircleIcon from "../Icons/ArrowCircleIcon";
import { MyworkCard } from "@/types/components";

const WorkCard: React.FC<{ work: MyworkCard }> = ({ work }) => {
  return (
    <div className={[styles.workCard, "dark:bg-primary-black"].join(" ")}>
      <div className={styles.workImage}>
        <img src={work.img} alt={work.title} loading="lazy" />
        <div className={styles.workImageBar}>
          {work.badges.map((badge, index: number) => (
            <div key={index} className={styles.workBadge}>
              <p>{badge}</p>
            </div>
          ))}
          <Link
            href={work.link}
            className={[styles.workLink, "dark:bg-primary-black"].join(" ")}
          >
            <ArrowCircleIcon
              className={[styles.workIcon, "dark:fill-white"].join(" ")}
            />
          </Link>
        </div>
      </div>
      <h5 className="dark:text-white">{work.title}</h5>
      <p>{work.type}</p>
    </div>
  );
};

export default WorkCard;

/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./card.module.css";
import { Assets } from "@/utils/static/assets";

const TestimonialCard: React.FC = () => {
  return (
    <div className={styles.testyCard}>
      <div className={styles.testyCardImage}>
        <img src={Assets.img2} alt="Person image" loading="lazy" />
      </div>
      <h5>Person Name</h5>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
        fugiat suscipit. Cumque rerum corrupti vel eum officiis dignissimos hic,
        molestias id illo at iusto fuga molestiae veritatis, saepe rem quos!
      </p>
    </div>
  );
};

export default TestimonialCard;

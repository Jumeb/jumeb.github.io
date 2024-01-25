/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./card.module.css";
import { Assets } from "@/utils/static/assets";
import { TestimonialCard } from "@/types/components";

const TestimonialCard: React.FC<{testimonial: TestimonialCard}> = ({testimonial}) => {
  return (
    <div className={styles.testyCard}>
      <div className={styles.testyCardImage}>
        <img src={testimonial.img} alt={testimonial.name} loading="lazy" />
      </div>
      <h5>{testimonial.name}</h5>
      <p>
        {testimonial.testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;

import React, { useEffect, useState } from "react";

import styles from "./testimonial.module.css";
import TestimonialCard from "@/components/Cards/TestimonialCard.component";
import Button from "@/components/Buttons/Button.component";

const Testimonial: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  useEffect(() => {
    let timeInterval = setTimeout(() => {
      if (active < 4) return setActive(active + 1);
      return setActive(0);
    }, 5000);

    return () => {
      clearTimeout(timeInterval);
    };
  }, [active]);

  return (
    <section id="testimonial" className={styles.container}>
      <div className={styles.containerTop}>
        <h3>What they say about me?</h3>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.testyContainer}>
          {Array(5)
            .fill(0)
            .map((_, index: number) => (
              <div
                key={index}
                className={`${styles.carouselContent} ${
                  index < active ? styles.prevContent : ""
                } ${index === active ? styles.currentContent : ""} ${
                  index > active ? styles.nextContent : ""
                } ${index > active + 1 ? styles.disappear : ""}`}
              >
                <TestimonialCard />
              </div>
            ))}
        </div>
        <div className={styles.carouselControls}>
          {Array(5)
            .fill(0)
            .map((_, index: number) => (
              <div
                onClick={() => setActive(index)}
                key={index}
                className={[
                  styles.carouselIndicate,
                  active === index && styles.indicateActive,
                ].join(" ")}
              />
            ))}
        </div>
      </div>
      <div className={styles.lastContainer}>
        <h2>
          Let&apos;s talk <br /> About Your project
        </h2>
        <div>
          <Button text="Contact Me" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

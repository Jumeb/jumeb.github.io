import React, { useEffect, useState } from "react";

import styles from "./testimonial.module.css";
import TestimonialCard from "@/components/Cards/TestimonialCard.component";
import Button from "@/components/Buttons/Button.component";
import { useRouter } from "next/navigation";
import { Assets } from "@/utils/static/assets";
import { TestimonialCard as Testimonials } from "@/types/components";

const Testimonial: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const router = useRouter();

  const testimonials: Testimonials[] = [
    {
      img: Assets.test1,
      name: "Nkoa Christophe",
      testimonial:
        "Working with Jume on the Mengu Medicals website is effortless, albeit costly. His swift web development skills ensure minimal design queries, allowing for a relaxed experience and prompt results. Jume's speed sets him apart.",
    },
    // {
    //   img: Assets.test2,
    //   name: "Issabel Ntoweh",
    //   testimonial:
    //     "I am fortunate to work with Jume, as he demonstrates a deep understanding of the challenges inherent in UI/UX design and consistently exhibits meticulous attention to detail. However, I find his quietness during meetings to be somewhat off-putting.",
    // },
    {
      img: Assets.test3,
      name: "Mafany Myles",
      testimonial:
        "Brice is highly skilled, detail-oriented, and professional. His technical expertise, attention to detail, and excellent communication make him a valuable asset to any project. I cannot think of anyone better who will exceed expectations with a commendable work ethic.",
    },
  ];

  useEffect(() => {
    let timeInterval = setTimeout(() => {
      if (active < testimonials.length - 1) return setActive(active + 1);
      return setActive(0);
    }, 5000);

    return () => {
      clearTimeout(timeInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section
      id="testimonial"
      className={[styles.container, "dark:bg-primary-black"].join(" ")}
    >
      <div className={styles.containerTop}>
        <h3 className="dark:text-white">What they say about me?</h3>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.testyContainer}>
          {testimonials.map((testimonial, index: number) => (
            <div
              key={index}
              className={`${styles.carouselContent} ${
                index < active ? styles.prevContent : ""
              } ${index === active ? styles.currentContent : ""} ${
                index > active ? styles.nextContent : ""
              } ${index > active + 1 ? styles.disappear : ""}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        <div className={styles.carouselControls}>
          {Array(testimonials.length)
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
        <h2 className="dark:text-white">
          Let&apos;s talk <br /> About Your project
        </h2>
        <div>
          <Button
            text="Contact Me"
            onClick={() => router.push("/contact-me")}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

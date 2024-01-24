import React, { useState } from "react";

import styles from "./service.module.css";
import { ServiceCard as ServiceCardProps } from "@/types/components";
import FrontendIcon from "@/components/Icons/FrontendIcon";
import MobileIcon from "@/components/Icons/MobileIcon";
import BackendIcon from "@/components/Icons/BackendIcon";
import ServiceCard from "@/components/Cards/ServiceCard.component";

const Services: React.FC = () => {
  const [active, setActive] = useState<number>(1);
  const services: ServiceCardProps[] = [
    {
      title: "Web development",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus
      in odio adipisci nulla velit quisquam iusto eligendi delectus, ab
      accusantium quod blanditiis aliquid mollitia vel illo facere quae nobis.`,
      icon: <FrontendIcon className={styles.serviceIcon} />,
    },
    {
      title: "Mobile app development",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus
        in odio adipisci nulla velit quisquam iusto eligendi delectus, ab
        accusantium quod blanditiis aliquid mollitia vel illo facere quae nobis.`,
      icon: <MobileIcon className={styles.serviceIcon} />,
    },
    {
      title: "Backend development",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus
        in odio adipisci nulla velit quisquam iusto eligendi delectus, ab
        accusantium quod blanditiis aliquid mollitia vel illo facere quae nobis.`,
      icon: <BackendIcon className={styles.serviceIcon} />,
    },
  ];
  return (
    <section id="services" className={styles.container}>
      <div className={styles.containerTop}>
        <h3>Services I offer</h3>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.serviceContainer}>
          {services.map((service, index: number) => (
            <div
              key={index + service.title}
              className={`${styles.carouselContent} ${
                index < active ? styles.prevContent : ""
              } ${index === active ? styles.currentContent : ""} ${
                index > active ? styles.nextContent : ""
              } ${index > active + 1 ? styles.disappear : ""}`}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <div className={styles.carouselControls}>
          {Array(services.length)
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
    </section>
  );
};

export default Services;

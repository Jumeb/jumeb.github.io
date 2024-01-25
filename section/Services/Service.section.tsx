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
      description: `As a proficient web developer, I excel in utilizing available tools to achieve pixel-perfect implementation. With a meticulous approach and a deep understanding of design principles, I consistently deliver high-quality, visually appealing websites.`,
      icon: <FrontendIcon className={[styles.serviceIcon, "dark:fill-white"].join(" ")} />,
    },
    {
      title: "Mobile app development",
      description: `I excel as a mobile app developer by harnessing advanced tools and frameworks to craft exceptional user experiences. My meticulous approach to user interface design ensures high-quality, intuitive mobile applications that exceed expectations.`,
      icon: <MobileIcon className={[styles.serviceIcon, "dark:fill-white"].join(" ")} />,
    },
    {
      title: "Backend development",
      description: `As a learning backend developer, I leverage available tools and frameworks to create well-structured API endpoints. My commitment to continuous learning and exploration enables me to deliver robust and efficient backend solutions.`,
      icon: <BackendIcon className={[styles.serviceIcon, "dark:fill-white"].join(" ")} />,
    },
  ];
  return (
    <section
      id="services"
      className={[styles.container, "dark:bg-primary-black"].join(" ")}
    >
      <div className={styles.containerTop}>
        <h3 className="dark:text-white">Services I offer</h3>
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

import React from "react";

import styles from "./card.module.css";
import Button from "../Buttons/Button.component";
import { ServiceCard } from "@/types/components";

const ServiceCard: React.FC<{service: ServiceCard}> = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
      {service.icon}
      <h6>{service.title}</h6>
      <p>{service.description}</p>
      <div>
        <Button text="Know more" />
      </div>
    </div>
  );
};

export default ServiceCard;

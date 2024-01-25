import React from "react";

import styles from "./card.module.css";
import Button from "../Buttons/Button.component";
import { ServiceCard } from "@/types/components";
import { useRouter } from "next/navigation";

const ServiceCard: React.FC<{service: ServiceCard}> = ({ service }) => {
  const router = useRouter();
  return (
    <div className={[styles.serviceCard, "dark:bg-primary-dark dark:shadow-primary-black"].join(" ")}>
      {service.icon}
      <h6 className="dark:text-white">{service.title}</h6>
      <p>{service.description}</p>
      <div>
        <Button text="Know more" onClick={() => router.push('/contact-me')} />
      </div>
    </div>
  );
};

export default ServiceCard;

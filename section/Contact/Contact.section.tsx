import React from "react";

import styles from "./contact.module.css";
import Input from "@/components/Input/input.component";
import Textarea from "@/components/Input/Textarea.component";
import Button from "@/components/Buttons/Button.component";
import { Assets } from "@/utils/static/assets";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className={[styles.container, "dark:bg-primary-black"].join(" ")}
    >
      <div className={styles.containerTop}>
        <h3 className="dark:text-white">
          Let&apos;s Talk <br /> About Work
        </h3>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.formGrid}>
          <Input label="First Name" placeholder={"Jane Doe"} type="text" />
          <Input
            label="Email Address"
            placeholder={"janedoe@gmail.com"}
            type="email"
          />
        </div>
        <div className={styles.formGrid}>
          <Textarea
            label="Message"
            placeholder={"Hello Jume, I would love you come work at..."}
          />
        </div>
        <div className={styles.btn}>
          <Button text="Send message" disabled />
        </div>
      </div>
      {/* <div className="w-auto h-96">
        <img src={Assets.icon} alt="" className="w-full h-full primaryFilter" />
      </div> */}
    </section>
  );
};

export default Contact;

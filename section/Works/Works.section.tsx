import React from "react";

import styles from "./work.module.css";
import WorkCard from "@/components/Cards/WorkCard.component";

const MyWorks: React.FC = () => {
  return (
    <section id="my_works" className={styles.container}>
      <div className={styles.containerTop}>
        <h3>My most recent Works</h3>
      </div>
      <div className={styles.containerBottom}>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </section>
  );
};

export default MyWorks;

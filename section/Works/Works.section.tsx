import React from "react";

import styles from "./work.module.css";
import WorkCard from "@/components/Cards/WorkCard.component";
import { Assets } from "@/utils/static/assets";
import { MyworkCard } from "@/types/components";

const MyWorks: React.FC = () => {
  const myworks: MyworkCard[] = [
    {
      img: Assets.portfolio,
      title: "My portfolio",
      type: "Web development",
      link: "/",
      badges: ["Personal"],
    },
    {
      img: Assets.flavours,
      title: "Flavours",
      type: "Web development",
      link: "https://www.flavoursapp.com/",
      badges: ["Personal", "On going"],
    },
    {
      img: Assets.ai_gelb,
      title: "ai-gelb",
      type: "Web development",
      link: "https://staging.chat.ai-gelb.de/chat-bot/chat",
      badges: ["Remote", "On-going"],
    },
    {
      img: Assets.karla,
      title: "Karla",
      type: "Web development",
      link: "https://hallokarla.de/",
      badges: ["Remote"],
    },
    {
      img: Assets.mengu,
      title: "Mengu",
      type: "Web development",
      link: "https://mengu-medicals.ch/",
      badges: ["Contract Work"],
    },
    {
      img: Assets.gasvisor,
      title: "GasVisor",
      type: "Web & Mobile app development",
      link: "https://app.gasvisor.eu/",
      badges: ["Remote"],
    },
    {
      img: Assets.ntopor,
      title: "Ntopor",
      type: "Web development",
      link: "https://ntopor-social.github.io/ntopor.github.io/",
      badges: ["Startup"],
    },
  ];
  return (
    <section
      id="my_works"
      className={[styles.container, "dark:bg-primary-black"].join(" ")}
    >
      <div className={styles.containerTop}>
        <h3 className="dark:text-white">My most recent Works</h3>
      </div>
      <div className={styles.containerBottom}>
        {myworks.map((mywork, index: number) => (
          <WorkCard key={index} work={mywork} />
        ))}
      </div>
    </section>
  );
};

export default MyWorks;

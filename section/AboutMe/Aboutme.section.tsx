/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./aboutme.module.css";
import { UseRandomRange } from "@/utils/lib/UseRandomRange";
import { Assets } from "@/utils/static/assets";
import Button from "@/components/Buttons/Button.component";
import NextIcon from "@/components/Icons/NextIcon";
import HTML5 from "@/components/Icons/HTMLIcon";
import CSSIcon from "@/components/Icons/CSSIcon";
import JSIcon from "@/components/Icons/JSIcon";
import TSIcon from "@/components/Icons/TSIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import GitHub from "@/components/Icons/GitHub";
import TailwindIcon from "@/components/Icons/TailwindIcon";
import SassIcon from "@/components/Icons/SassIcon";
import ReduxIcon from "@/components/Icons/ReduxIcon";
import MongoDB from "@/components/Icons/MongoDB";
import NodeJs from "@/components/Icons/NodeJs";

const Aboutme: React.FC = () => {
  const random = UseRandomRange(6);
  const images = [
    Assets.img1,
    Assets.img2,
    Assets.img3,
    Assets.img4,
    Assets.img5,
    Assets.img6,
    Assets.img7,
  ];
  return (
    <section
      id="about-me"
      className={[styles.container, "dark:bg-primary-black"].join(" ")}
    >
      <div className={styles.containerTop}>
        <h3 className="dark:text-white">
          Me Personal <br /> Information
        </h3>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomLeft}>
          <div
            className={[styles.imageContainer, "dark:bg-primary-black"].join(
              " "
            )}
          >
            <div className={styles.imageBorder}>
              <img src={images[random]} alt="Jume's image" loading="lazy" />
            </div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.aboutContent}>
            <h4 className="dark:text-white">Jume Brice</h4>
            <h6 className="dark:text-white">
              Web Developer | Mobile App Developer
            </h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              cumque et incidunt accusantium corporis in, animi nam consequuntur
              ex perspiciatis? Voluptatem, unde. Voluptatum ea id ex. Labore
              facere ullam sunt.
            </p>
          </div>
          <div>
            <Button text="Contact Me" />
          </div>
          <div className={styles.aboutSkills}>
            <h6 className="dark:text-white">My Skills Includes</h6>
            <div className={styles.skillIcons}>
              <HTML5 className={[styles.skillIcon, styles.html].join(" ")} />
              <CSSIcon className={[styles.skillIcon, styles.css].join(" ")} />
              <SassIcon className={[styles.skillIcon, styles.sass].join(" ")} />
              <JSIcon className={[styles.skillIcon, styles.js].join(" ")} />
              <TSIcon className={[styles.skillIcon, styles.ts].join(" ")} />
              <ReactIcon
                className={[
                  styles.skillIcon,
                  styles.react,
                  "dark:fill-white",
                ].join(" ")}
              />
              <ReduxIcon
                className={[styles.skillIcon, styles.redux].join(" ")}
              />
              <GitHub
                className={[
                  styles.skillIcon,
                  styles.github,
                  "dark:fill-white",
                ].join(" ")}
              />
              <TailwindIcon
                className={[styles.skillIcon, styles.tailwind].join(" ")}
              />
              <NextIcon
                className={[styles.skillIcon, styles.nextjs, "dark:fill-white"].join(" ")}
              />
              <MongoDB
                className={[styles.skillIcon, styles.mongod].join(" ")}
              />
              <NodeJs
                className={[
                  styles.skillIcon,
                  styles.nodejs,
                  "dark:fill-white",
                ].join(" ")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

import { Navlinks, Navprops } from "@/types/components";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./navbar.module.css";
import Button from "../Buttons/Button.component";
import ThemeButton from "../Buttons/ThemeButton.component";

const Navbar: React.FC<Navprops> = ({ position }) => {
  const [active, setActive] = useState<boolean>(false);
  const navlinks: Navlinks[] = [
    { to: "/", label: "Home" },
    { to: "/about-me", label: "About me" },
    { to: "/portfolio", label: "Portfolio" },
  ];
  return (
    <nav
      className={[
        styles.navbar,
        position > 200 && "!bg-white shadow-md shadow-primary-light/20",
      ].join(" ")}
    >
      <h4 className={position > 200 ? "text-primary-dark" : "text-white"}>Jume</h4>
      <div className={styles.navToggler} onClick={() => setActive(!active)}>
        <div
          className={[styles.navToggle, active && styles.activeToggle].join(
            " "
          )}
        />
      </div>
      <div
        className={[
          styles.navlinksMdContainer,
          active ? styles.activeMd : styles.inactiveMd,
        ].join(" ")}
        onClick={() => setActive(!active)}
      >
        <div className={styles.navlinksMd}>
          <div
            className={styles.containerLinks}
            onClick={(e) => e.stopPropagation()}
          >
            {navlinks.map((navlink, index: number) => (
              <Link
                key={index + navlink.to}
                href={navlink.to}
                className={[styles.navlink].join(" ")}
              >
                {navlink.label}
              </Link>
            ))}
          </div>
          <div
            className={[styles.containerLinks, "items-center"].join(" ")}
            onClick={(e) => e.stopPropagation()}
          >
            <Button text="Contact Me" />
            <ThemeButton />
          </div>
        </div>
      </div>
      <div className={styles.navlinks}>
        {navlinks.map((navlink, index: number) => (
          <Link
            key={index + navlink.to}
            href={navlink.to}
            className={[styles.navlink].join(" ")}
          >
            {navlink.label}
          </Link>
        ))}
        <div>
          <Button text="Contact Me" />
        </div>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;

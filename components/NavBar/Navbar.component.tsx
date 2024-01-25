import { Navlinks, Navprops } from "@/types/components";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./navbar.module.css";
import Button from "../Buttons/Button.component";
import ThemeButton from "../Buttons/ThemeButton.component";

const Navbar: React.FC<Navprops> = ({ position }) => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const navlinks: Navlinks[] = [
    { to: "/", label: "Home" },
    { to: "/about-me", label: "About me" },
    { to: "/portfolio", label: "Portfolio" },
  ];
  return (
    <nav
      className={[
        styles.navbar,
        position > 200 && "dark:!bg-primary-black dark:shadow-transparent !bg-white shadow-md shadow-primary-light/20",
      ].join(" ")}
    >
      <h4 className={position > 200 ? "dark:!text-white text-primary-dark" : " text-white"}>
        Jume
      </h4>
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
        <div className={[styles.navlinksMd, "dark:bg-primary-black"].join(" ")}>
          <div
            className={styles.containerLinks}
            onClick={(e) => e.stopPropagation()}
          >
            {navlinks.map((navlink, index: number) => (
              <Link
                key={index + navlink.to}
                href={navlink.to}
                className={[styles.navlink, "dark:text-white"].join(" ")}
              >
                {navlink.label}
              </Link>
            ))}
          </div>
          <div
            className={[styles.containerLinks, "items-center"].join(" ")}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              text="Contact Me"
              onClick={() => router.push("/contact-me")}
            />
            <ThemeButton />
          </div>
        </div>
      </div>
      <div className={styles.navlinks}>
        {navlinks.map((navlink, index: number) => (
          <Link
            key={index + navlink.to}
            href={navlink.to}
            className={[styles.navlink, "dark:text-white sm:dark:text-primary-black lg:dark:text-white"].join(" ")}
          >
            {navlink.label}
          </Link>
        ))}
        <div>
          <Button
            text="Contact Me"
            onClick={() => router.push("/contact-me")}
          />
        </div>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;

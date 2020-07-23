import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import navLinks from "../navlinks.json";

import styles from "./sideNav.module.scss";

const navContainer = {
  contracted: {
    display: "none",
    opacity: 0,
  },
  expanded: {
    display: "flex",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      stiffness: 1000,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    transition: {
      stiffness: 1000,
    },
  },
};

const navList = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child = {
  start: {
    left: -70,
  },
  end: {
    left: 0,
    transition: {
      x: {
        stiffness: 1000,
        velocity: 100,
      },
    },
  },
};

const NavLink = ({ href, children }) => (
  <li className={styles.link}>
    <Link href={href}>
      <a>
        <motion.div className={styles.linkContents} variants={child}>
          {children}
        </motion.div>
      </a>
    </Link>
  </li>
);

const Hamburger = ({ onClick }) => (
  <div className={styles.hamburger} onClick={onClick}>
    <div className={styles.hamburgerLine} />
    <div className={styles.hamburgerLine} />
    <div className={styles.hamburgerLine} />
  </div>
);

const Nav = ({ isMobile }) => {
  const [isExpanded, setExpanded] = useState(false);

  const expand = () => setExpanded(true);

  useEffect(() => {
    containerControls.start(isExpanded ? "expanded" : "contracted");
  }, [isExpanded]);

  const controls = useAnimation();
  const containerControls = useAnimation();

  // <div className={styles.hamburger} onClick={() => setExpanded(true)} />
  return (
    <>
      {!isExpanded && <Hamburger onClick={expand} />}
      <motion.div
        variants={navContainer}
        initial="contracted"
        animate={isExpanded ? "expanded" : "contracted"}
        className={styles.container}
      >
        {isExpanded && (
          <div className={styles.close} onClick={() => setExpanded(false)} />
        )}

        <ul className={styles.navList}>
          <NavLink href="/">
            <div className={styles.homeLink}>Matthew Ewan-Laws</div>
          </NavLink>
          {navLinks.map(({ href, text }, i) => (
            <NavLink key={`${href}_${i}`} href={href}>
              <nobr>{text}</nobr>
            </NavLink>
          ))}
        </ul>
      </motion.div>
    </>
  );
};
export default Nav;

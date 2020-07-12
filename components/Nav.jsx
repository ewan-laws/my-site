import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const navContainer = {
  start: {
    x: -500,
  },
  end: {
    x: 0,
    transition: {
      when: "beforeChildren",
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
  <li className="link">
    <Link href={href}>
      <a>
        <motion.div style={{ position: "relative" }} variants={child}>
          {children}
        </motion.div>
      </a>
    </Link>
  </li>
);

const Nav = ({ isMobile }) => {
  const controls = useAnimation();
  const [isExpanded, setExpanded] = useState(false);
  console.log(isMobile, isExpanded);
  const navExpander = {
    contracted: () => ({
      // height: isMobile ? 0 : "auto",
    }),
    expanded: {
      // height: "auto",
    },
  };

  const navListExpander = {
    contracted: () => ({
      opacity: isMobile ? 0 : 1,
      height: isMobile ? 0 : "initial",
    }),
    expanded: {
      opacity: 1,
      height: "initial",
    },
  };

  const toggleExpander = () => {
    controls.start(isExpanded ? "contracted" : "expanded");
    setExpanded(!isExpanded);
  };

  return (
    <motion.div
      variants={navContainer}
      initial="start"
      animate="end"
      className="nav-outside"
    >
      <div className="nav-container">
        <motion.div
          variants={navExpander}
          initial="contracted"
          animate={controls}
          className="nav"
        >
          <motion.div variants={navList} className="nav-list-container">
            <motion.ul
              variants={navListExpander}
              initial="contracted"
              animate={controls}
              className="nav-list"
            >
              <NavLink href="/languages">Languages</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/cv">CV</NavLink>
            </motion.ul>
          </motion.div>
        </motion.div>
        <div className="hamburger" onClick={toggleExpander} />
      </div>
      <div className="divider"></div>
    </motion.div>
  );
};

export default Nav;

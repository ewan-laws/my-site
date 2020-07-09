import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

const Nav = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <motion.div
      variants={navContainer}
      initial="start"
      animate="end"
      className="nav-outside"
    >
      <div className="nav-container">
        <div className={`nav ${isExpanded ? "expanded" : "hidden"}`}>
          <motion.div variants={navList} className="nav-list-container">
            <ul className="nav-list">
              <NavLink href="/tech">Technologies</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/cv">CV</NavLink>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="hamburger" onClick={() => setExpanded(!isExpanded)} />
      <div className="divider"></div>
    </motion.div>
  );
};

export default Nav;

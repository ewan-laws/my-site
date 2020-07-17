import { useState, useEffect } from "react";
import Router from "next/router";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import navLinks from "../navlinks.json";

const navContainer = {
  start: {
    x: -500,
    opacity: 1,
  },
  end: {
    x: 0,
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

const NavLink = ({ href, children, animate }) => {
  const clicked = (e) => {
    e.preventDefault();
    animate(() => {
      Router.push(href);
    });
  };
  return (
    <li className="link">
      <a href="#" onClick={clicked}>
        <motion.div style={{ position: "relative" }} variants={child}>
          {children}
        </motion.div>
      </a>
    </li>
  );
};

const navExpander = {
  contracted: () => ({
    // height: isMobile ? 0 : "auto",
  }),
  expanded: {
    // height: "auto",
  },
};

const Nav = ({ isMobile, onExitAnimate }) => {
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    containerControls.start("end");
  }, []);

  const controls = useAnimation();
  const containerControls = useAnimation();

  const onExit = (done) => {
    onExitAnimate();
    containerControls.start("exit").then(done);
  };

  const toggleExpander = () => {
    controls.start(isExpanded ? "contracted" : "expanded");
    setExpanded(!isExpanded);
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

  return (
    <motion.div
      variants={navContainer}
      initial="start"
      animate={containerControls}
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
              {navLinks.map(({ href, text }, i) => (
                <NavLink key={`${href}_${i}`} href={href} animate={onExit}>
                  <nobr>{text}</nobr>
                </NavLink>
              ))}
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

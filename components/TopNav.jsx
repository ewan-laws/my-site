import Link from "next/link";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useWindowSize } from "../hooks";

import navLinks from "../navlinks.json";

const TopNav = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 700;
  const [isNavExpanded, setNavExpanded] = useState(false);
  const navControl = useAnimation();
  const onHamburgerClick = () => setNavExpanded(!isNavExpanded);

  useEffect(() => {
    const variantName = isNavExpanded ? "open" : "closed";
    navControl.start(variantName);
  });

  const linksVariants = {
    closed: () => ({
      opacity: isMobile ? 0 : 1,
      transition: {
        stiffness: 1000,
      },
    }),
    open: () => ({
      opacity: 1,
      transition: {
        stiffness: 1000,
      },
    }),
  };

  const headerVariants = {
    closed: () => ({
      height: "3em",
    }),
    open: () => ({
      height: isMobile ? "auto" : "3em",
    }),
  };
  return (
    <div className="page-header">
      <motion.div
        variants={headerVariants}
        initial="closed"
        animate={navControl}
        className="page-header-content"
      >
        <h2>
          <Link href="/">
            <a>Matthew Ewan-Laws</a>
          </Link>
        </h2>
        <motion.ul
          variants={linksVariants}
          className="page-header-content-links"
        >
          {navLinks.map(({ href, text }, i) => (
            <li key={`${href}_${i}`}>
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </li>
          ))}
        </motion.ul>
        <div
          onClick={onHamburgerClick}
          className="page-header-content-hamburger"
        />
      </motion.div>
      <div className="page-header-divider"></div>
    </div>
  );
};

export default TopNav;

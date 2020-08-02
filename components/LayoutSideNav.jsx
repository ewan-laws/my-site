import Head from "next/head";
import { motion, useAnimation } from "framer-motion";

import SideNav from "./SideNav";
import Footer from "./Footer";

import { useEnterAnimationControl, useNavigateAway } from "../hooks";

const navVariants = {
  hidden: {
    x: -40,
  },
  show: {
    x: 0,
    transition: {
      stiffness: 1000,
    },
  },
  exit: {
    x: -40,
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Layout = ({ children }) => {
  const controls = useAnimation();

  // useEnterAnimationControl(controls, "show");

  useNavigateAway(() => controls.start("exit"));
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />
      </Head>
      <motion.div variants={navVariants} initial="hidden" animate="show">
        <SideNav />
      </motion.div>
      <motion.div variants={contentVariants} initial="hidden" animate="show">
        <div className="page">{children}</div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;

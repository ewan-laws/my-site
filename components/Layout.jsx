import Head from "next/head";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";

import { useEnterAnimationControl, useNavigateAway } from "../hooks";

const headerVariants = {
  hidden: {
    y: -40,
  },
  show: {
    y: 0,
    transition: {
      stiffness: 1000,
    },
  },
  exit: {
    y: -40,
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

  useEnterAnimationControl(controls, "show");

  useNavigateAway(() => controls.start("exit"));
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />
      </Head>
      <motion.div variants={headerVariants} initial="hidden" animate="show">
        <TopNav />
      </motion.div>
      <motion.div variants={contentVariants} initial="hidden" animate="show">
        <div className="page">{children}</div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;

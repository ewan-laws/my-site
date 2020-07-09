import Head from "next/head";
import Nav from "../components/Nav";

import { motion } from "framer-motion";

const variants = {
  titleContainer: {
    start: {},
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  titleItem: {
    start: {
      opacity: 0,
      y: 50,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 1000,
      },
    },
  },
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matthew Ewan-Laws</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="main-container">
          <Nav />
          <div className="right">
            <motion.div
              variants={variants.titleContainer}
              initial="start"
              animate="end"
              className="main-title"
            >
              <motion.div variants={variants.titleItem}>
                <h1>
                  Matthew <nobr>Ewan-Laws</nobr>
                </h1>
              </motion.div>
              <motion.div variants={variants.titleItem}>
                <h2>Web Developer</h2>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

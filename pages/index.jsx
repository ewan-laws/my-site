import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { useEnterAnimationControl } from "../hooks";

const variants = {
  titleContainer: {
    start: {},
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
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
    exit: {
      opacity: 0,
    },
  },
};

const Home = ({ isMobile }) => {
  const contentControls = useAnimation();
  const onNavigate = () => contentControls.start("exit");
  useEnterAnimationControl(contentControls, "end");
  return (
    <div className="container">
      <Head>
        <title>Matthew Ewan-Laws</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="iXYfs7f_08uA5Be55wjFWJc3xCuKrQAxylwQlTDizsU"
        />
      </Head>
      <main>
        <div className="main-container">
          <Nav isMobile={isMobile} onExitAnimate={onNavigate} />
          <div className="right">
            <motion.div
              variants={variants.titleContainer}
              initial="start"
              animate={contentControls}
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
      <Footer />
    </div>
  );
};

Home.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { isMobile };
};
export default Home;

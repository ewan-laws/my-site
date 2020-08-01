import Router from "next/router";
import { useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";

import "../styles/styles.scss";
import "../styles/page.scss";
import "../styles/page-header.scss";
import "../styles/content-grid.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);
  return <Component {...pageProps} />;
}

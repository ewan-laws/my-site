import { useEffect } from "react";
import Router from "next/router";

export const useEnterAnimationControl = (controls, name, done = () => {}) =>
  useEffect(() => {
    const animate = async () => controls.start(name).then(done);
    animate();
  }, []);

export const useNavigateAway = (fn) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log("route change", url);
      return false;
    };
    Router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
};

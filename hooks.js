import { useEffect, useState } from "react";
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

export function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return windowSize;
}

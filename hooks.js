import { useEffect } from "react";

export const useEnterAnimationControl = (controls, name, done = () => {}) =>
  useEffect(() => {
    const animate = async () => controls.start(name).then(done);
    animate();
  }, []);

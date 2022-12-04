import { motion, useAnimation, Variants } from "framer-motion";
import { useCallback, useEffect, useMemo } from "react";
import { useInView, IntersectionOptions } from "react-intersection-observer";

type UseI9AnimationProps = {
  customOptions?: IntersectionOptions;
  initialState: string;
  finalState: string;
};

const useI9Animation = ({
  customOptions,
  initialState,
  finalState,
}: UseI9AnimationProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView(
    customOptions || {
      rootMargin: "50px 0px",
    }
  );

  const animate = useCallback(() => {
    if (inView) control.start(finalState);
    else control.start(initialState);
  }, [control, inView, initialState, finalState]);

  useEffect(() => {
    animate();
  }, [animate]);

  return useMemo(() => ({ ref, control }), [ref, control]);
};

export default useI9Animation;

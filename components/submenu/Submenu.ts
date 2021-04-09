import { useState } from "react";
import { usePrefersReducedMotion, keyframes } from "@chakra-ui/react";

export default function Submenu() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState<{
    showItem: boolean;
    expandedMenu: boolean;
    animation: string | undefined;
  }>({
    showItem: false,
    expandedMenu: false,
    animation: null,
  });

  const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `;

  const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
  `;

  const showItem = () => {
    setState({ ...state, showItem: true, animation: fadeInAnimation });
  };

  const hideItem = () => {
    setState({ ...state, animation: fadeOutAnimation });
    setTimeout(() => {
      setState({ ...state, showItem: false });
    }, 500);
  };

  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} .5s linear normal forwards`;
  const fadeOutAnimation = prefersReducedMotion
    ? undefined
    : `${fadeOut} .2s linear normal forwards`;
}

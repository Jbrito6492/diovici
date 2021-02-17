import { useState } from "react";
import Link from "next/Link";
import {
  Menu,
  MenuButton,
  MenuList,
  HStack,
  Img,
  Portal,
  forwardRef,
  Button,
  keyframes,
  usePrefersReducedMotion,
  Text,
  VStack,
} from "@chakra-ui/react";
import submenuStyles from "../styles/Submenu.module.css";
import { GrNext } from "react-icons/gr";

const Submenu = forwardRef((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState({
    showItem: false,
    expandedMenu: false,
    animation: null,
  });

  const options = {
    variant: "ghost",
    transition: "all 0.2s",
    _hover: {
      bg: "#D7D7D7",
      color: "black",
    },
  };

  const showItem = () => {
    setState({ ...state, showItem: true, animation: fadeInAnimation });
  };

  const hideItem = () => {
    setState({ ...state, animation: fadeOutAnimation });
    setTimeout(() => {
      setState({ ...state, showItem: false });
    }, 500);
  };

  const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `;

  const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
  `;

  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} .5s linear normal forwards`;
  const fadeOutAnimation = prefersReducedMotion
    ? undefined
    : `${fadeOut} .2s linear normal forwards`;

  return (
    <div onMouseLeave={hideItem}>
      <Menu isOpen={true} placement="right-end">
        <MenuButton
          as={Button}
          ref={ref}
          {...props}
          {...options}
          rightIcon={<GrNext color="black" />}
          transition="all 0.2s"
          onClick={showItem}
          onMouseEnter={showItem}
        >
          {props.title}
        </MenuButton>
        <Portal>
          {state.showItem && (
            <MenuList animation={state.animation}>
              <HStack>
                <Img
                  objectFit="contain"
                  boxSize="25rem"
                  src={`${props.title.toLowerCase()}menu.png`}
                  alt={`${props.title} model`}
                />
                <VStack className={submenuStyles.description}>
                  <Text fontSize="sm">
                    Pants that make you feel fresh, no matter the occasion.
                  </Text>
                  <Link href="/shop"><Button>shop now</Button></Link>
                </VStack>
              </HStack>
            </MenuList>
          )}
        </Portal>
      </Menu>
    </div>
  );
});

export default Submenu;

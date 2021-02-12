import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img,
  Portal,
  forwardRef,
  Button,
  keyframes,
  usePrefersReducedMotion,
  Text,
} from "@chakra-ui/react";
import { GrNext } from "react-icons/gr";

const Submenu = forwardRef((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState({
    showItem: false,
    expandedMenu: false,
    animation: null,
  });

  const showItem = () => {
    setState({ ...state, showItem: true, animation: fadeInAnimation });
  };

  const hideItem = () => {
    setState({ ...state, animation: fadeOutAnimation });
    setTimeout(() => {
      setState({ ...state, showItem: false });
    }, 500);
  };

  const slide = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0%); }
  `;

  const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `;

  const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
  `;

  const slideAnimation = prefersReducedMotion
    ? undefined
    : `${slide} .2s linear normal forwards`;
  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 1s linear normal forwards`;
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
          rightIcon={<GrNext color="black" />}
          transition="all 0.2s"
          onMouseEnter={showItem}
        >
          {props.title}
        </MenuButton>
        <Portal>
          {state.showItem && (
            <MenuList animation={state.animation}>
              <MenuItem bg="white" animation={slideAnimation}>
                <Img
                  objectFit="contain"
                  boxSize="350px"
                  src={`${props.title.toLowerCase()}menu.png`}
                  alt={`${props.title} model`}
                />
              </MenuItem>
            </MenuList>
          )}
        </Portal>
      </Menu>
    </div>
  );
});

export default Submenu;

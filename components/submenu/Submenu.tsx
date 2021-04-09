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
  Text,
  VStack,
} from "@chakra-ui/react";

import submenuStyles from "../../styles/Submenu.module.css";
import { GrNext } from "react-icons/gr";

const Submenu = forwardRef((props, ref) => {
  const options = {
    variant: "ghost",
    transition: "all 0.2s",
    _hover: {
      bg: "#D7D7D7",
      color: "black",
    },
  };

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
                  src={`static/images/${props.title.toLowerCase()}menu.png`}
                  alt={`${props.title} model`}
                />
                <VStack className={submenuStyles.description}>
                  <Text fontSize="sm">
                    Pants that make you feel fresh, no matter the occasion.
                  </Text>
                  <Link href="/shop">
                    <Button onClick={hideItem}>shop now</Button>
                  </Link>
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

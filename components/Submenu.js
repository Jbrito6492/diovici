import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img,
  Portal,
  forwardRef,
} from "@chakra-ui/react";

const Submenu = forwardRef((props, ref) => {
  return (
    <Menu>
      <MenuButton isSubmenu ref={ref} {...props}>
        {props.title}
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>
            <Img
              objectFit="contain"
              boxSize="200px"
              src={`${props.title.toLowerCase()}menu.png`}
              alt={`${props.title} model`}
            />
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
});

export default Submenu;

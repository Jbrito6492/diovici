import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Portal,
} from "@chakra-ui/react";
import Submenu from "./Submenu.js";
import { BiChevronDown } from "react-icons/bi";
import PropTypes from "prop-types";

const DesktopMenu = ({ title, items }) => {
  const options = {
    transition: "all 0.2s",
    _hover: {
      bg: "#D7D7D7",
      color: "black",
    },
    variant: "ghost",
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} {...options} rightIcon={<BiChevronDown />}>
          {title}
        </MenuButton>
        <Portal>
          <MenuList bg="black" color="white">
            {items.map((item, index) => (
              <MenuItem key={index} title={item} as={Submenu} />
            ))}
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
};

DesktopMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default DesktopMenu;

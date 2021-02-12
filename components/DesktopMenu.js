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
// import menuStyles from "../styles/Menu.module.css";

const DesktopMenu = ({ title, items }) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BiChevronDown />}
          transition="all 0.2s"
          _hover={{
            bg: "#D7D7D7",
            color: "black",
          }}
          variant="ghost"
        >
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

export default DesktopMenu;

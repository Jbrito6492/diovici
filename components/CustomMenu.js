import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import menuStyles from "../styles/Menu.module.css";

const CustomMenu = ({ title, items }) => {
  return (
    <>
      <Menu className={menuStyles.menu}>
        <MenuButton as={Button} rightIcon={<BiChevronDown />} variant="ghost">
          {title}
        </MenuButton>
        <MenuList>
          {items.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}

export default CustomMenu;
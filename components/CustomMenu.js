import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Img,
  Stack,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import menuStyles from "../styles/Menu.module.css";

const CustomMenu = ({ title, items }) => {
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
        <MenuList bg="white">
          {items.map((item, index) => (
            <div key={index} className={menuStyles.row}>
              <MenuItem color="black" _focus={{ bg: "white" }}>
                {item}
                <Img
                  objectFit="contain"
                  src={`${item.toLowerCase()}menu.png`}
                  alt={`${item} model`}
                  className={menuStyles.img}
                />
              </MenuItem>
            </div>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default CustomMenu;

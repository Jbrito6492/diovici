import Link from "next/Link";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import DesktopMenu from "./DesktopMenu";
import { FiShoppingCart } from "react-icons/fi";
import navStyles from "../styles/Nav.module.css";
import { HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const DesktopNav = () => {
  const { articles } = useSelector((state) => state.articles);
  return (
    <Flex className={navStyles.nav}>
      <HStack>
        <Link className={navStyles.navItem} href="/">
          <Button
            variant="ghost"
            transition="all 0.2s"
            _hover={{
              bg: "#D7D7D7",
              color: "black",
            }}
          >
            Home
          </Button>
        </Link>
        <DesktopMenu title="Men" items={articles} />
        <Link className={navStyles.navItem} href="/about">
          <Button
            variant="ghost"
            transition="all 0.2s"
            _hover={{
              bg: "#D7D7D7",
              color: "black",
            }}
          >
            About
          </Button>
        </Link>
      </HStack>
      <Spacer />
      <Link className={navStyles.navItem} href="/shop">
        <Button
          variant="ghost"
          rightIcon={<FiShoppingCart />}
          transition="all 0.2s"
          _hover={{
            bg: "#D7D7D7",
            color: "black",
          }}
        >
          Cart
        </Button>
      </Link>
    </Flex>
  );
};

export default DesktopNav;

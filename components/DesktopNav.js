import Link from "next/Link";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import DesktopMenu from "./DesktopMenu";
import { FiShoppingCart } from "react-icons/fi";
import navStyles from "../styles/Nav.module.css";
import { HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const DesktopNav = () => {
  const { articles } = useSelector((state) => state.articles);
  const options = {
    variant: "ghost",
    transition: "all 0.2s",
    _hover: {
      bg: "#D7D7D7",
      color: "black",
    },
  };

  return (
    <Flex className={navStyles.nav}>
      <HStack>
        <Link className={navStyles.navItem} href="/">
          <Button {...options}>Home</Button>
        </Link>
        <DesktopMenu title="Men" items={articles} />
        <Link className={navStyles.navItem} href="/about">
          <Button {...options}>About</Button>
        </Link>
      </HStack>
      <Spacer />
      <Link className={navStyles.navItem} href="/shop">
        <Button {...options} rightIcon={<FiShoppingCart />}>
          Cart
        </Button>
      </Link>
    </Flex>
  );
};

export default DesktopNav;

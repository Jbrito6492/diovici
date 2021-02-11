import Link from "next/Link";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import CustomMenu from "./CustomMenu";
import { FiShoppingCart } from "react-icons/fi";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <Flex className={navStyles.nav}>
      <Link className={navStyles.navItem} href="/">
        <Button variant="ghost">Home</Button>
      </Link>
      <CustomMenu title="Men" items={["Pants"]} />
      <Link className={navStyles.navItem} href="/about">
        <Button variant="ghost">About</Button>
      </Link>
      <Spacer />
      <Link className={navStyles.navItem} href="/shop">
        <Button variant="ghost" rightIcon={<FiShoppingCart />}>
          Cart
        </Button>
      </Link>
    </Flex>
  );
};

export default Nav;

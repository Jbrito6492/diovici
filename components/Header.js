import { Img, Fade, useDisclosure } from "@chakra-ui/react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const { onOpen } = useDisclosure();
  return (
    <div>
      <Fade in={onOpen}>
        <h1 className={headerStyles.title}>
          <Img src="logo.png" alt="Diovici Logo" />
        </h1>
        <p className={headerStyles.description}>Pants to fit your lifestyle</p>
      </Fade>
    </div>
  );
};

export default Header;

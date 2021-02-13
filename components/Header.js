import {
  Img,
  Fade,
  useDisclosure,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const { onOpen } = useDisclosure();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shrink = keyframes`
  from { transform: scale(1); }
  to { transform: scale(.5); }
  `;

  const animation = prefersReducedMotion
    ? undefined
    : `${shrink} 1.5s linear normal forwards`;

  return (
    <div>
      <Fade in={onOpen}>
        <div className={headerStyles.title}>
          <Img src="logo.png" alt="Diovici Logo" animation={animation} />
        </div>
        <p className={headerStyles.description}>Pants to fit your lifestyle</p>
      </Fade>
    </div>
  );
};

export default Header;

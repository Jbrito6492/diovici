import { Img, Fade, useDisclosure } from "@chakra-ui/react";
import Carousel from "./Carousel";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const { onOpen } = useDisclosure();

  return (
    <div>
      <Fade in={onOpen}>
        <div className={headerStyles.titleContainer}>
          <Carousel
            slides={["galleryimg1.jpg", "galleryimg5.jpg"]}
            boxSize="20rem"
            interval={5000}
          />
          <div className={headerStyles.title}>
            <Img
              borderRadius="xl"
              src="logo.png"
              objectFit="scale-down"
              boxSize="35rem"
              alt="Diovici Logo"
              className={headerStyles.grow}
            />
          </div>
          <Carousel
            slides={["galleryimg4.jpg", "galleryimg6.jpg"]}
            boxSize="20rem"
            interval={5000}
          />
        </div>
        <div className={headerStyles.subtitleContainer}>
          <Carousel
            slides={["galleryimg2.jpg", "galleryimg7.jpg"]}
            boxSize="15rem"
            interval={4000}
          />
          <p className={`${headerStyles.description} ${headerStyles.grow}`}>
            Pants to Fit Your Lifestyle
          </p>
          <Carousel
            slides={["galleryimg3.jpg", "galleryimg8.jpg"]}
            boxSize="15rem"
            interval={4000}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Header;

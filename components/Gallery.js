import { Img, Fade, useDisclosure } from "@chakra-ui/react";
import Carousel from "./Carousel";
import headerStyles from "../styles/Header.module.css";

const Gallery = () => {
  const { onOpen } = useDisclosure();
  const baseRoute = "/static/images";
  return (
    <div>
      <Fade in={onOpen}>
        <div className={headerStyles.titleContainer}>
          <Carousel
            slides={[`${baseRoute}/galleryimg1.jpg`, `${baseRoute}/galleryimg5.jpg`]}
            boxSize="20rem"
            interval={5000}
          />
          <div className={headerStyles.title}>
            <Img
              borderRadius="xl"
              src={`${baseRoute}/logo.png`}
              objectFit="scale-down"
              boxSize="35rem"
              alt="Diovici Logo"
              className={headerStyles.grow}
            />
          </div>
          <Carousel
            slides={[`${baseRoute}/galleryimg4.jpg`, `${baseRoute}/galleryimg6.jpg`]}
            boxSize="20rem"
            interval={5000}
          />
        </div>
        <div className={headerStyles.subtitleContainer}>
          <Carousel
            slides={[`${baseRoute}/galleryimg2.jpg`, `${baseRoute}/galleryimg7.jpg`]}
            boxSize="15rem"
            interval={4000}
          />
          <p className={`${headerStyles.description} ${headerStyles.grow}`}>
            Pants to Fit Your Lifestyle
          </p>
          <Carousel
            slides={[`${baseRoute}/galleryimg3.jpg`, `${baseRoute}/galleryimg8.jpg`]}
            boxSize="15rem"
            interval={4000}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Gallery;

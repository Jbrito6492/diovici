import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryStyles from "../styles/Gallery.module.css";
import { Img, Box } from "@chakra-ui/react";

const Carousel = ({ src, animation, idx }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
  };

  return (
    <Box animation={animation}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Img
            key={index}
            animation={animation}
            src={src}
            className={`${galleryStyles.item} ${galleryStyles.img}${index + 1}`}
          />
        ))}
      </Slider>
      {idx === 1 ? (
        <Img
          animation={animation}
          src="galleryimg5.jpg"
          className={`${galleryStyles.item} ${galleryStyles.img5}`}
        />
      ) : (
          <Img
            animation={animation}
            src="galleryimg6.jpg"
            className={`${galleryStyles.item} ${galleryStyles.img6}`}
          />
        )}
    </Box>
  );
};

export default Carousel;

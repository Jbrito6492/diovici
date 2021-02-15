import { Img, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import Carousel from "./Carousel.js";
import galleryStyles from "../styles/Gallery.module.css";

const ImageGallery = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; transform: scale(0.65); }
  `;

  const move = keyframes`
  0% { opacity: 0; bottom: 0; }
  100% { opacity: 1; bottom: 30rem; }
  `;

  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 1.5s linear normal forwards`;

  const moveAnimation = prefersReducedMotion
    ? undefined
    : `${move} 1.5s linear normal forwards`;

  return (
    <div className={`${galleryStyles.grid}`}>
      {[...Array(8)].map((image, index) => {
        const moveupIdx = [0, 3, 4, 7];
        const empty = [5, 6];
        const animation = moveupIdx.includes(index)
          ? moveAnimation
          : fadeInAnimation;
        return empty.includes(index) ? (
          <div key={index}></div>
        ) : (
            <Img
              key={index}
              animation={animation}
              objectFit="scale-down"
              src={`galleryimg${index + 1}.jpg`}
              className={`${galleryStyles.item} ${galleryStyles.img}${index + 1}`}
            />
          );
      })}
    </div>
  );
};

export default ImageGallery;

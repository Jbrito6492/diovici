import { Img, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import galleryStyles from "../styles/Gallery.module.css";

const ImageGallery = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeIn = keyframes`
  0% { opacity: 0; }

  100% { opacity: 1; }
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
    <div className={`${galleryStyles.gallery}`}>
      {[...Array(8)].map((image, index) => {
        const idx = [0, 3, 4, 7];
        const animation = idx.includes(index) ? moveAnimation : fadeInAnimation;
        return (
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

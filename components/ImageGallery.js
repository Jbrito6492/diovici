import { Img, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import galleryStyles from "../styles/Gallery.module.css";

const ImageGallery = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `;

  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 1s linear normal forwards`;

  return (
    <div className={galleryStyles.gallery}>
      {[...Array(8)].map((image, index) => (
        <Img
          key={index}
          animation={fadeInAnimation}
          objectFit="scale-down"
          src={`galleryimg${index + 1}.jpg`}
          className={`${galleryStyles.img} ${galleryStyles.num}${index + 1}}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;

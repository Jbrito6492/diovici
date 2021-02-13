import { Img, Fade, useDisclosure } from "@chakra-ui/react";
import galleryStyles from "../styles/Gallery.module.css";

const ImageGallery = () => {
  return (
    <div className={galleryStyles.gallery}>
      {[...Array(8)].map((image, index) => (
        <Img
          key={index}
          objectFit="scale-down"
          src={`galleryimg${index + 1}.jpg`}
          className={`${galleryStyles.img} ${galleryStyles.num}${index + 1}}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;

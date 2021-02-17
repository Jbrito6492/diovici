import { Img, Stack } from "@chakra-ui/react";
import bannerStyles from "../styles/Banner.module.css";
const Banner = () => {
  const src = `static/images/logo.png`;
  return (
    <Stack direction="row" className={bannerStyles.banner} bg="black">
      {[...Array(6)].map((image, index) => (
        <Img
          className={bannerStyles.logo}
          boxSize="3rem"
          objectFit="contain"
          alt="Diovici Logo"
          src={src}
        />
      ))}
    </Stack>
  );
};

export default Banner;

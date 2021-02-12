import { Img, Stack } from "@chakra-ui/react";
import bannerStyles from "../styles/Banner.module.css";
const Banner = () => {
  return (
    <Stack direction="row" className={bannerStyles.banner} bg="black">
      <Img
        className={bannerStyles.logo}
        boxSize="3rem"
        objectFit="contain"
        src="logo.png"
      />
      <Img
        className={bannerStyles.logo}
        boxSize="3rem"
        objectFit="contain"
        src="logo.png"
      />
      <Img
        className={bannerStyles.logo}
        boxSize="3rem"
        objectFit="contain"
        src="logo.png"
      />
      <Img
        className={bannerStyles.logo}
        boxSize="3rem"
        objectFit="contain"
        src="logo.png"
      />
      <Img
        className={bannerStyles.logo}
        boxSize="3rem"
        objectFit="contain"
        src="logo.png"
      />
      <Img
        className={bannerStyles.logo}
        boxSize="3rem"
        objectFit="contain"
        src="logo.png"
      />
    </Stack>
  );
};

export default Banner;

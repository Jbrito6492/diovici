import { useState } from "react";
import { ShopData } from "./ShopData";
import { Img } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "../styles/Shop.module.css";

const ShopGallery = () => {
  const [current, setCurrent] = useState(0);
  const length = ShopData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <>
      <FaArrowLeft className={styles.leftArrow} size={35} onClick={prevSlide} />
      <FaArrowRight className={styles.rightArrow} size={35} onClick={nextSlide} />
      <div className={styles.container}>
        {ShopData.map((slide, index) => {
          return (
            <Img key={index} className={index === current ? styles.img0 : styles["img" + index]} boxSize={current === index ? "500px" : "250px"} objectFit="cover" src={slide.image} alt="diovici shop pic" borderRadius="md" />
          )
        })}
      </div>
    </>
  )
};

export default ShopGallery;
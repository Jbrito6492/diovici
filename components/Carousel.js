import { useState, useEffect } from "react";
import { Img } from "@chakra-ui/react";
import styles from "../styles/Carousel.module.css";
import PropTypes from "prop-types";

const Carousel = ({ slides, boxSize, interval }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const items = slides.map((src, index) => (
    <div
      key={index}
      className={
        index === current
          ? `${styles.slide} ${styles.active}`
          : `${styles.slide}`
      }
    >
      {index === current && (
        <Img
          src={src}
          borderRadius="10px"
          boxSize={boxSize}
          objectFit="scale-down"
          className={styles.image}
        />
      )}
    </div>
  ));

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return <section className={styles.slider}>{items}</section>;
};

Carousel.propTypes = {
  slides: PropTypes.array,
  boxSize: PropTypes.string,
  interval: PropTypes.number,
};

export default Carousel;

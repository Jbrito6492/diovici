import $ from "jquery";

export const getWindowDimensions = async (callback) => {
  try {
    const width = await $(window).width();
    const isMobile = width <= 850;
    callback(isMobile);
  } catch (err) {
    console.log(err.message);
  }
};

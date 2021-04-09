import $ from "jquery";

// gets dimensions of user device
export const getWindowDimensions = async (callback: Function) => {
  try {
    const width = await $(window).width();
    const isMobile = width <= 850;
    callback(isMobile);
  } catch (err) {
    console.log(err.message);
  }
};

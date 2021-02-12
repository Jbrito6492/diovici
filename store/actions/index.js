/* eslint-disable no-unused-vars */
export const ON_MOBILE = "on_mobile";
export const onMobile = (boolean) => async (dispatch, getState, api) => {
  dispatch({ type: ON_MOBILE, payload: boolean });
};

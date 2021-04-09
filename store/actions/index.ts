export const ON_MOBILE = "on_mobile";

export const onMobile = (boolean: boolean) => async (
  dispatch: Function,
  getState: Function,
  api: string
) => {
  dispatch({ type: ON_MOBILE, payload: boolean });
};

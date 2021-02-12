export const ON_DESKTOP = 'on_desktop';
export const isMoble = (boolean) => async (dispatch, getState, api) => {
  dispatch({ type: ON_DESKTOP, payload: boolean });
};

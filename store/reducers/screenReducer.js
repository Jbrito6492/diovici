import { ON_DESKTOP } from "../actions";

const initialState = {
  onDesktop: null,
  loading: null,
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_DESKTOP:
      return {
        ...state,
        onDesktop: action.payload,
      };
    default:
      return state;
  }
};

export default screenReducer;

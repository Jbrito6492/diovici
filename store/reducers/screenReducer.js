import { ON_MOBILE } from "../actions";

const initialState = {
  onMobile: null,
  loading: true,
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_MOBILE:
      return {
        ...state,
        onMobile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default screenReducer;

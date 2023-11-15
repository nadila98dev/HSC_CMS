import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./constants";


const initialState = {
  data: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
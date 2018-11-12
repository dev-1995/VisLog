import { FETCH_OUT_LIST, UPDATE_LIST } from "../actions/Types";
const initialState = {
  list: [],
  error: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OUT_LIST:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_LIST:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

import { UPDATE_FORM_DATA } from "../actions/Types";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

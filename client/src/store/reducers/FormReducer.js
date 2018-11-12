import {
  UPDATE_FORM_DATA,
  SAVE_FORM_DATA,
  ERROR_FORM_DATA
} from "../actions/Types";
const initialState = {
  name: "",
  contact: "",
  gender: "female",
  vehicleNo: "",
  vehicleType: "two",
  location: "",
  image: {},
  src: "",
  error: "",
  isSaving: false,
  saved: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    case SAVE_FORM_DATA:
      console.log({
        ...initialState,
        ...action.payload
      });
      return {
        ...initialState,
        ...action.payload
      };
    case ERROR_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

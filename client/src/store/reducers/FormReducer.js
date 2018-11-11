import { UPDATE_FORM_DATA } from "../actions/Types";
const initialState = {
  name: "",
  contact: "",
  gender: "female",
  vehicleNo: "",
  vehicleType: "two",
  location: "",
  image: {},
  src: "",
  error: ""
};

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

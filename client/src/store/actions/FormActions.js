import { UPDATE_FORM_DATA, SAVE_FORM_DATA } from "./Types";
import Axios from "axios";
export const updateForm = data => dispatch => {
  dispatch({
    type: UPDATE_FORM_DATA,
    payload: {
      ...data
    }
  });
};

export const saveFormData = data => dispatch => {
  Axios.post("createlog", data)
    .then(({ data }) => {
      dispatch({
        type: SAVE_FORM_DATA,
        payload: {
          error: "",
          isSaving: false,
          saved: true
        }
      });
    })
    .catch(({ response }) => {
      const error =
        response.status > 499
          ? "Server Error! Please Contact Administator"
          : "Please Fill All the Details";

      dispatch({
        type: UPDATE_FORM_DATA,
        payload: {
          error: error,
          isSaving: false,
          saved: false
        }
      });
    });
};

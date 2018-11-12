import { UPDATE_FORM_DATA, SAVE_FORM_DATA, ERROR_FORM_DATA } from "./Types";
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
          isSaving: false,
          saved: true,
          error: ""
        }
      });
    })
    .catch(({ response }) => {
      const error =
        response.status > 499 ? "Server Error!" : "Please Enter All Details";
      dispatch({
        type: ERROR_FORM_DATA,
        payload: {
          isSaving: false,
          saved: false,
          error: error
        }
      });
    });
};

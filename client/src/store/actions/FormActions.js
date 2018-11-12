import { UPDATE_FORM_DATA, SAVE_FORM_DATA } from "./Types";

export const updateForm = data => dispatch => {
  dispatch({
    type: UPDATE_FORM_DATA,
    payload: {
      ...data
    }
  });
};

export const saveFormData = data => dispatch => {
  dispatch({
    type: SAVE_FORM_DATA,
    payload: {
      ...data
    }
  });
};

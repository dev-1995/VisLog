import { FETCH_OUT_LIST, UPDATE_LIST } from "./Types";
export const fetchList = data => dispatch => {
  dispatch({
    type: FETCH_OUT_LIST,
    payload: {
      ...data
    }
  });
};

export const updateRecord = data => dispatch => {
  dispatch({
    type: UPDATE_LIST,
    payload: {
      ...data
    }
  });
};

import { FETCH_OUT_LIST, UPDATE_LIST } from "./Types";
import Axios from "axios";
export const fetchList = data => dispatch => {
  Axios.get("getpending")
    .then(({ data }) => {
      console.log(data.visitors);
      dispatch({
        type: FETCH_OUT_LIST,
        payload: {
          isLoading: false,
          list: [...data.visitors]
        }
      });
    })
    .catch(({ response }) => {
      console.log(response);
      dispatch({
        type: FETCH_OUT_LIST,
        payload: {
          isLoading: false,
          error: "Error Loading Details! Contact Administrator"
        }
      });
    });
};

export const updateRecord = data => dispatch => {
  console.log(data);
  Axios.post("outlog", data)
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: UPDATE_LIST,
        payload: {
          markedOut: true,
          list: [...data.list]
        }
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: UPDATE_LIST,
        payload: {
          isLoading: false
        }
      });
    });
};
export const setInfo = data => dispatch => {
  dispatch({
    type: UPDATE_LIST,
    payload: {
      ...data
    }
  });
};

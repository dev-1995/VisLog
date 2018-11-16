import FormReducer from "./FormReducer";
import OutListReducer from "./OutListReducer";
import { combineReducers } from "redux";
export default combineReducers({
  Form: FormReducer,
  OutList: OutListReducer
});

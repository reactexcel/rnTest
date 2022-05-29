import { combineReducers } from "redux";
import { persistConfig } from "../store";
import usersReducer from "./usersReducer";
import { persistReducer } from "redux-persist";

// const rootReducer = combineReducers({
//   users: persistReducer(persistConfig, usersReducer)
// });
const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;

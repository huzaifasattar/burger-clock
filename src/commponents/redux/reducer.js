import { combineReducers } from "redux";
import cartReducer from "./state";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
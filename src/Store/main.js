import { createStore } from "redux";
import combineReducers from "../Reducers/main";

const store = createStore(combineReducers);

export default store;
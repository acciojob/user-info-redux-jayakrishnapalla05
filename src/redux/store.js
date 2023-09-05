import {createStore} from "redux";
import userInfo from "./reducer/formReducer";

const store=createStore(userInfo);
export default store;
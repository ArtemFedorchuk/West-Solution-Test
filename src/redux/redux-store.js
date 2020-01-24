import {combineReducers, createStore} from "redux";
import loginReducer from "./login-reducer";

const reducers = combineReducers({
    auth: loginReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
import {combineReducers, createStore} from "redux";
import loginReducer from "./login-reducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    loginPage: loginReducer,
    form: formReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
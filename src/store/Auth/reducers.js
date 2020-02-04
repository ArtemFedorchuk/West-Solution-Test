import {
  SET_USER_NAME,
  SET_USER_PASSWORD
} from "./actions";

const initialState = {
  userName: '',
  password: '',
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      return { ...state, userName: action.payload };
    }
    case SET_USER_PASSWORD: {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;
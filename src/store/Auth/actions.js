export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_PASSWORD = "SET_USER_PASSWORD";

export const setAuthUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName
});
export const setAuthUserPassword = password => ({
  type: SET_USER_PASSWORD,
  payload: password
});

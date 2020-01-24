const SET_USER_DATA = "SET_USER_DATA";

const InitialState =
    {
        userName: 'admin',
        password: '12345',
        isAuth: false
    };

const loginReducer = (state = InitialState, action) => {
        switch (action.type) {
            case SET_USER_DATA:
                debugger
                return {
                    ...state,
                    ...action.data
                };
            default:
                return state;
        }
};

export const setAuthUserData = (userName, password) => ({type: SET_USER_DATA, data: {userName, password}});

export default loginReducer;
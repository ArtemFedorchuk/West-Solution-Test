const SET_USER_DATA = "SET_USER_DATA";
const PASSWORD = "PASSWORD";

const InitialState = [
    {
        userName: 'admin',
        password: '12345',
    }
];

const loginReducer = (state = InitialState ,action) => {
        switch (action.type) {
            case SET_USER_DATA:
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
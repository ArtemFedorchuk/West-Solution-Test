const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD";

const InitialState = [
    {
        user: {
            userName: 'admin',
            password: '12345',
        }
    }
];

const loginReducer = (state = InitialState ,action) => {
        switch (action.type) {
            case LOGIN:
                state.userName = '';
                return state;
            case PASSWORD:
                state.password = '';
                return state;
            default:
                return state;
        }
};

export const sendUserCreator = () => ({type: LOGIN});
export default loginReducer;
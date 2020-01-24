import React from "react";
import {connect} from 'react-redux';
import Login from "./Login";
import {setAuthUserData} from "../../redux/login-reducer";

let onChangeText = (e) => {
    // let name = e.currentTarget.value;
    console.log(e.currentTarget.value)
};

let sendAuth = () => {
    setAuthUserData()
};

const LoginContainer = (props) => {
    return  (
        <Login
            onChangeText={onChangeText}
            sendAuth={sendAuth}
        />
    )
};

const mapStateToProps = (state) => {
    // debugger
    return {
        userName: state.userName,
        password: state.password,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendAuth: () => {
            dispatch(setAuthUserData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
// export default LoginContainer;
import React from "react";
// import {connect} from 'react-redux';
import Login from "./Login";
// import {sendUserCreator} from "../../redux/login-reducer";
import { reduxForm } from 'redux-form'


// const mapStateToProps = (state) => {
//     return {
//         name: '',
//         password: '',
//         focusHandler: () => alert('Container')
//     }
// };

// const LoginReduxForm = reduxForm({
//     // a unique name for the form
//     form: 'login'
// })(Login);
function focusHandler() {
    console.log('focusHandler')
}

const LoginContainer = (props) => {
    return  (
        <Login focusHandler={focusHandler}/>
    )
};

export default LoginContainer;
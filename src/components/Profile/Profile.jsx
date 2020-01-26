import React from "react";
import {Redirect} from "react-router-dom";
import Routes from "../../constants/routes";
import {connect} from "react-redux";

const Profile = ({
       userName,
       password
       }) => {

  if(!userName && !password) return <Redirect to={Routes.PROFILE} />;

  return(
        <div>
            <h1>Profile</h1>
        </div>
    )
};


const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
    password: state.auth.password,
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps, {})(Profile);

import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Routes from "../../constants/routes";
import PropTypes from "prop-types";

const Home = ({
  userName,
  password,
 }) => {

  if(userName !== 'admin' && password !== '12345') return <Redirect to={Routes.LOGIN} />;

    return (
        <div>
            <h1 style={{color: 'white',}}>Home page</h1>
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

export default connect(mapStateToProps, {})(Home)

Home.propTypes = {
  isAuth: PropTypes.bool,
  userName: PropTypes.string,
  password: PropTypes.string,
};

Home.defaultProps = {
  isAuth: false,
  userName: '',
  password: '',
};
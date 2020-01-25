import React from "react";
import ErrorStyles from "./ErrorPageStyles"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(ErrorStyles);

const ErrorPage = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.error}>

            </div>
        </div>
    )
};

export default ErrorPage;
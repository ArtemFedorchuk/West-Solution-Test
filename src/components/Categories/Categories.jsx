import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import {
    Header,
    Container,
    Row,
    Column,
    Profile,
    Home,
    News
} from '../../components';

import CategoriesStyles from './CategoriesStyles';
import Routes from "../../constants/routes";
import {Route, Switch} from "react-router-dom";

const useStyles = makeStyles(CategoriesStyles);


const Categories = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Container maxWidth={false}>
                <Row>
                    <Column className={classes.content}>
                        <Switch>
                            <Route exact path={Routes.NEWS} component={News} />
                            <Route exact path={Routes.PROFILE} component={Profile} />
                            <Route exact path={Routes.HOME} component={Home} />
                        </Switch>
                        </Column>
                </Row>
            </Container>
        </>
    );
};

export default Categories;

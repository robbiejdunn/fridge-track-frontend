import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Camera from './Camera';
import FoodItemForm from './FoodItemForm';
import HomePage from './HomePage';


const useStyles = makeStyles((theme) => ({
    contentPaper: {
        margin: '10px',
        overflow: 'hidden',
    }
}));


export default function AppContent(props) {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.contentPaper}>
            <Switch>
                <Route exact path="/" component={HomePage}>
                </Route>
                <Route exact path="/scan">
                    <Camera />
                </Route>
                <Route exact path="/manual">
                    <FoodItemForm />
                </Route>
            </Switch>
        </Paper>
    )

}

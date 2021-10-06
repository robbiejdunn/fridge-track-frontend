import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './HomePage';
import ReactDOM from "react-dom";
import NewProductPage from './NewProductPage'
import Camera from './Camera';


const useStyles = makeStyles((theme) => ({
    contentPaper: {
        margin: '5px',
        overflow: 'hidden',
    }
}));


export default function AppContent(props) {
    const classes = useStyles();

    // const RouteSwitch = ReactDOM.render(
    //     <div>

    //     </div>
    // )

    return (
        <Paper elevation={0} className={classes.contentPaper}>
            <Switch>
                <Route exact path="/" component={HomePage}>
                </Route>
                <Route exact path="/new" component={Camera}>
                </Route>
            </Switch>
        </Paper>
    )

}

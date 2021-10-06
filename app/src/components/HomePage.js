import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
}));


export default function HomePage(props) {
    const classes = useStyles();

    return (
        <div>
            Homepage
        </div>
    )

}

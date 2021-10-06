import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddItemInputMethods from './AddItemInputMethods';


const useStyles = makeStyles((theme) => ({
}));


export default function NewProductPage(props) {
    const classes = useStyles();

    return (
        <div>
            <AddItemInputMethods />
        </div>
    )

}

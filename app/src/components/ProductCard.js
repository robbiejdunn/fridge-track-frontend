import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    cardContainer: {
        height: '50px',
        display: 'flex',
        marginBottom: '10px'
    },
    name: {
        flex: 1
    },
    expiry: {
        flex: 1
    }
}));


export default function ProductCard(props) {
    const classes = useStyles();

    const expiryDate = new Date(props.product.expiry.S);
    const now = new Date();
    const diffTime = expiryDate - now;
    const expiryDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <div className={classes.cardContainer}>
            <div className={classes.name}>
                {props.product.name.S}
            </div>
            <div className={classes.expiry}>
                {expiryDays} days
            </div>
        </div>
    )
}

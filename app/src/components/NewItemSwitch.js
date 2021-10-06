import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({}));


export default function NewItemSwitch(props) {
    const classes = useStyles();

    useEffect(() => {
        console.log(props);
    }, []);
    
    return (
        <div>
            Test{props.inputType}
        </div>
    )

}

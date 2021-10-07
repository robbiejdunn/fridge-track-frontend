import { FilledInput, FormControl, InputLabel, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    itemImageContainer: {
        textAlign: "center",
    },
}));


export default function FoodItemForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");

    useEffect(() => {
        console.log("test")
        if (history?.location?.state && history.location.state.status === 1) {
            setName(history.location.state.data.product.product_name);
        }
    }, [history]);

    return (
        <div>
            {history?.location.state && history.location.state.status === 0 &&
                <div id="product-not-found-message">Product not found, please enter manually</div>
            }

            {history?.location.state && history.location.state.status === 1 &&
                <div className={classes.itemImageContainer}>
                    <img id="scanned-image" src={history.location.state?.data.product.selected_images.front.display.en} alt="Scanned item" />
                </div>
            }
            <FormControl variant="filled" fullWidth>
                <InputLabel id="product-name-label" shrink>Name</InputLabel>
                <FilledInput
                    labelId="product-name-label"
                    id="product-name"
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </FormControl>
            <FormControl variant="filled" fullWidth>
                <InputLabel id="product-expiry-label" shrink>Expiry date</InputLabel>
                <FilledInput
                    labelId="product-expiry-label"
                    id="product-expiry"
                    type="datetime-local"
                    value={expiryDate}
                    onChange={(e) => {setExpiryDate(e.target.value)}}
                />
            </FormControl>

        </div>
    );
}

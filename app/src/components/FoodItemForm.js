import { Button, FilledInput, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    itemImageContainer: {
        textAlign: "center",
        maxHeight: "150px",
    },
    formControl: {
        marginBottom: "10px",
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

    const submitForm = () => {
        let endpoint;
        if(process.env['NODE_ENV'] && process.env['NODE_ENV'] === 'development') {
            const apiId = process.env.REACT_APP_FRIDGE_TRACK_API_ENDPOINT.split('.')[0].replace('https://', '');
            endpoint = `http://localhost:4566/restapis/${apiId}/prod/_user_request_/items`
        } else {
            endpoint = `${process.env.REACT_APP_FRIDGE_TRACK_API_ENDPOINT}items`
        }
        const data = {
            name: name,
            expiry: expiryDate,
        };
        axios.post(
            endpoint,
            data,
        ).then(res => {
            history.push("/");
        })
    };

    return (
        <div>
            {history?.location.state && history.location.state.status === 0 &&
                <div id="product-not-found-message">Product not found, please enter manually</div>
            }

            {history?.location.state && history.location.state.status === 1 &&
                <div className={classes.itemImageContainer}>
                    <img id="scanned-image" 
                        src={history.location.state?.data.product.selected_images.front.display.en} 
                        alt="Scanned item" 
                    />
                </div>
            }
            <FormControl className={classes.formControl} variant="filled" fullWidth>
                <InputLabel id="product-name-label" shrink>Name</InputLabel>
                <FilledInput
                    labelId="product-name-label"
                    id="product-name"
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </FormControl>
            <FormControl className={classes.formControl} variant="filled" fullWidth>
                <InputLabel id="product-expiry-label" shrink>Expiry date</InputLabel>
                <FilledInput
                    labelId="product-expiry-label"
                    id="product-name"
                    type="date"
                    value={expiryDate}
                    onChange={(e) => {setExpiryDate(e.target.value)}}
                />
            </FormControl>
            <Button 
                variant="contained" 
                fullWidth 
                color="primary"
                onClick={submitForm}
            >Add</Button>
        </div>
    );
}

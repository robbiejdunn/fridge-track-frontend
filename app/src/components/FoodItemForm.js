import { makeStyles, TextField } from '@material-ui/core';
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

    useEffect(() => {
        if (history?.location?.state && history.location.state.status === 1) {
            setName(history.location.state.data.product.product_name);
        }
    }, []);

    return (
        <div>
            {history.location.state?.data.product.selected_images.front.display.en ? 
                <div className={classes.itemImageContainer}>
                    <img id="scanned-image" src={history.location.state?.data.product.selected_images.front.display.en} alt="Scanned item" />
                </div>
                :
                <div>
                    No code given {history.location.state?.data}
                </div>

            }
            <TextField
                label="Name"
                id="product-name"
                variant="filled"
                type="text"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                fullWidth
            />
        </div>
    );
}

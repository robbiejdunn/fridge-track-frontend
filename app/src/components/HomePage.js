import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const useStyles = makeStyles((theme) => ({}));


export default function HomePage(props) {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let endpoint;
        if(process.env['NODE_ENV'] && process.env['NODE_ENV'] === 'development') {
            const apiId = process.env.REACT_APP_FRIDGE_TRACK_API_ENDPOINT.split('.')[0].replace('https://', '');
            endpoint = `http://localhost:4566/restapis/${apiId}/prod/_user_request_/products/list`
        } else {
            endpoint = `${process.env.REACT_APP_FRIDGE_TRACK_API_ENDPOINT}products/list`
        }
        axios.get(endpoint)
        .then(res => {
            setProducts(res.data.Items);
        })
    }, []);

    return (
        <div>
            {products.map((product) => (
                <ProductCard product={product}></ProductCard>
            ))}
        </div>
    )

}

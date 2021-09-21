// influenced by https://github.com/moigonzalez/pwa-barcode-scanner
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Quagga from 'quagga';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '100px'
    },
    videoContainer: {
        width: '100px',
    }
}));


export default function Camera(props) {
    const classes = useStyles();
    const [videoError, setVideoError] = useState(false);
    const [codeResultObject, setCodeResultObject] = useState(null);
    let history = useHistory();


    const onInitSuccess = () => {
        Quagga.start();
    }

    const onDetected = (result) => {
        Quagga.offDetected(onDetected);
        const endpoint = `https://world.openfoodfacts.org/api/v0/product/${result.codeResult.code}.json`
        axios.get(endpoint)
        .then(res => {
            setCodeResultObject(res.data)
        });
    }

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector("#video"),
                },
                numOfWorkers: 1,
                locate: true,
                decoder: {
                    readers: ["ean_reader", "ean_8_reader", "upc_reader", "code_128_reader"],
                },
            }, (err) => {
                if (err) {
                    console.log(err);
                    setVideoError(true);
                    return;
                }
                onInitSuccess();
            });
            Quagga.onDetected(onDetected);
            return () => Quagga.stop();

        }
        return undefined;
    }, []);

    return (
        <div>
            <div className="video__explanation">
            <p>Scan a product&apos;s barcode and get its nutritional values <span role="img" aria-label="apple">🍎</span></p>
            </div>
            <div className={classes.videoContainer}>
            {videoError ?
                <div className="skeleton__unsopported">
                <div>
                    <p>Your device does not support camera access or something went wrong <span role="img" aria-label="thinking-face">🤔</span></p>
                    <p>You can enter the barcode below</p>
                </div>
                </div>
                :
                <div>
                <div className={classes.video} id="video" />
                </div>
            }
            </div>
      </div>
    );
}
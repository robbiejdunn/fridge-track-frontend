// influenced by https://github.com/moigonzalez/pwa-barcode-scanner
import React, { useEffect, useState } from 'react';
import Quagga from 'quagga';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    videoContainer: {
        margin:'15px',
        minWidth: '300px',
        minHeight: '225px',
    },
    videoPlayer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    videoPrompt: {
        
    },
}));


export default function Camera(props) {
    const classes = useStyles();
    const history = useHistory();
    const [videoError, setVideoError] = useState(false);

    const onInitSuccess = () => {
        Quagga.start();
    }

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector("#video"),
                    constraints: {
                        width: 600,
                        height: 450,
                        facingMode: "environment",
                    }
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
            Quagga.onDetected((result) => {
                Quagga.offDetected();
                const endpoint = `https://world.openfoodfacts.org/api/v0/product/${result.codeResult.code}.json`
                axios.get(endpoint)
                .then(res => {
                    if (res.status === 1) {
                        history.push("/manual", { status: 1, data: res.data })
                    } else {
                        history.push("/manual", { status: 0 })
                    }
                    
                });
            });
            return () => Quagga.stop();

        }
        return undefined;
    }, []);

    return (
        <div>
            <div className={classes.videoContainer}>
            <div className={classes.videoPrompt}>Place the item's barcode in center of camera to scan</div>
            {videoError ?
                <div>
                    <div>
                        <p>Your device does not support camera access or something went wrong.</p>
                    </div>
                </div>
                :
                <div>
                    <div className={classes.videoPlayer} id="video"
                        sx={{
                            width: 200,
                        }}
                    />
                </div>
            }
            </div>
      </div>
    );
}
import React from 'react';
import AddItemInputMethods from './AddItemInputMethods';
import Camera from './Camera';


export default function AddItemSteps(props) {
    const [step, setStep] = React.useState(1);
    const [itemInfo, setItemInfo] = React.useState();

    const nextStep = () => {
        setStep(step + 1);
    };

    const handleDetection = (detection) => {
        alert("bar code detected");
        setItemInfo(detection);
    };

    switch(step) {
        case 1:
            return (
                <AddItemInputMethods
                    nextStep={nextStep}
                />
            )
        case 2:
            return (
                <Camera
                    onDetection={handleDetection}
                    nextStep={nextStep} 
                />
            )
        case 3:
            return (
                <div>SUCCESS {itemInfo.code}</div>
            )
    }
}

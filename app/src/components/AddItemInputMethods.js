import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CreateIcon from '@mui/icons-material/Create';
import { DialogContentText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    inputMethodButton: {
        width: '100%',
        height: '100px',
        marginBottom: '20px',
    }
}));


export default function AddItemInputMethods(props) {
    const classes = useStyles();

    const handleInputMethodClick = (event) => {
        alert("hey");
    }

    return (
        <div>
            <Button 
                variant="outlined" 
                onClick={handleInputMethodClick} 
                className={classes.inputMethodButton} 
                startIcon={<CameraAltIcon />}
            >
                Scan
            </Button>
            <Button 
                variant="outlined" 
                onClick={handleInputMethodClick} 
                className={classes.inputMethodButton} 
                startIcon={<CreateIcon />}
            >
                Manual
            </Button>
        </div>
    )

}
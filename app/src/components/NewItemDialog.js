import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { FilledInput, IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CreateIcon from '@mui/icons-material/Create';
import Camera from './Camera';
import AddItemInputMethods from './AddItemInputMethods';
import AddItemSteps from './AddItemSteps';

const useStyles = makeStyles((theme) => ({
    inputMethodButton: {
        width: '100%',
        height: '100px',
        marginBottom: '20px',
    }
}));

export default function NewItemDialog(props) {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);
    const [inputMethod, setInputMethod] = React.useState(null);
    const [detectedItem, setDetectedItem] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setInputMethod(null);
    };


    const handleDetection = (detection) => {
        alert("Detection");
        setDetectedItem(detection);
        setInputMethod("tmp");
    };

  return (
    <div>
        <Tooltip title="Add" onClick={handleClickOpen}>
            <IconButton aria-label="add">
                <AddIcon />
            </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New product</DialogTitle>
            <DialogContent>
                <AddItemSteps />
            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
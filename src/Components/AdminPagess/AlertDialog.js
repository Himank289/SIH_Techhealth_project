import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}
      style={{backgroundColor:"#e3f2fd",
             marginTop:"100px",
            }}

      >
        OPEN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"User query details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            I am shubham and my query is regarding hospital beds availability  is partially correct...!
           ( user query will appear here.)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> <Link to="/Response" variant="body2">  Response </Link></Button>
          <Button onClick={handleClose} autoFocus>
             Deny
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

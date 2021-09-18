import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";


const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="down" ref={ref} {...props} />;
    });

function DialogModal({title, component, openDialog}) {

  const [open, setOpen] = useState(openDialog);

  console.log(open);



  const handleClose = () => {
    console.log(openDialog);
  };
  
  return (

  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <div className="dialog__header">
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>

      <DialogActions>
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon fontSize="large" />
        </IconButton>
      </DialogActions>
    </div>

    <DialogContent>
      {component}
    </DialogContent>
  </Dialog>
  )
}
export default DialogModal;

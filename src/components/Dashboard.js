
 



import React, { useState } from "react";

import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";


import JobCard from "./JobCard";
import JobDescription from "./JobDescription";

import "./Dashboard.css";
import NavBar from "./NavBar";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  function Dashboard() {
    const [openDJ, setOpenDJ] = useState(false);
      
        const handleClickOpen = () => {
          setOpenDJ(true);
        };
      
        const handleClose = () => {
          setOpenDJ(false);
        };
  return (
    <div className="dashboard main">
    
    <NavBar />
    <div className="content">
    <JobCard onClick={handleClickOpen}>

<Dialog
  open={openDJ}
  TransitionComponent={Transition}
  keepMounted
  aria-labelledby="alert-dialog-slide-title"
  aria-describedby="alert-dialog-slide-description"
>
  <div className="dialog__header">
    <DialogTitle id="alert-dialog-slide-title">Job Title</DialogTitle>

    <DialogActions>
      <IconButton onClick={handleClose}>
        <CloseOutlinedIcon fontSize="large" />
      </IconButton>
    </DialogActions>
  </div>

  <DialogContent>
      <JobDescription />
  </DialogContent>
</Dialog>
</JobCard>
    </div>
   
    </div>
  );
}

export default Dashboard;



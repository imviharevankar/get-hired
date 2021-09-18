import React, { useState } from "react";

import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";


import JobCard from "./JobCard";
import JobDescription from "./JobDescription";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

function JobList() {   
        const [openJD, setOpenJD] = useState(false);
      
        const handleClickOpenJD = () => {
          setOpenJD(true);
        };
      
        const handleCloseJD = () => {
          setOpenJD(false);
        };
  return (
    <div className="jobList">
      <JobCard onClick={handleClickOpenJD} />

      <Dialog
        open={openJD}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog__header">
          <DialogTitle id="alert-dialog-slide-title">Job Title</DialogTitle>

          <DialogActions>
            <IconButton onClick={handleCloseJD}>
              <CloseOutlinedIcon fontSize="large" />
            </IconButton>
          </DialogActions>
        </div>

        <DialogContent>
            <JobDescription />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default JobList;

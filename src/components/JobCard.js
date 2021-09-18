import React, { useState } from "react";
import "./JobCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import JobDescription from "./JobDescription";
import DialogModal from "./DialogModal";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function JobCard() {

  const [heart, setHeart] = useState(false);
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };

  const heartIt = () => {
    if(currentUser) {
      console.log("added");
    setHeart(!heart);

    } else {
      history.push("/sign-in");
    }
    
  };

  return (
    <div className="jobCard" onClick={handleClickOpen}>
      <div className="jobCard__header">
        <h4>Title</h4>
        <IconButton onClick={heartIt}>
          {heart ? (
            <FavoriteIcon className="red" fontSize="small" />
          ) : (
            <FavoriteBorderOutlinedIcon fontSize="small" />
          )}
        </IconButton>
      </div>
      <div className="jobCard__subHeader">
        <p>Company</p>
        <p>Location</p>
      </div>
      <div className="jobCard__desc">
        <p>Description</p>
      </div>
      <div className="jobCard__time">
        <p>Posted on 23rd June 2019</p>
      </div>

      <Dialog
        open={open}
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

      {/* <DialogModal title="Job Title" component={<JobDescription />} openDialog={open} /> */}
    </div>
  );
}

export default JobCard;

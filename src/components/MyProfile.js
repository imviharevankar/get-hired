import React, { useState } from "react";
import "./MyProfile.css";
import {
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import PictureAsPdfOutlinedIcon from "@material-ui/icons/PictureAsPdfOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import EditProfile from "./EditProfile";
import NavBar from "./NavBar";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function MyProfile() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { currentUser } = useAuth();
  const history = useHistory();

  const redirect = () => {
      history.push("/sign-in")
  }

  return (
    <div className="myProfile main">
      <NavBar />

      <div className="content">

        {
          currentUser ?
         ( <div className="myProfile__content"> 
<header>
        <h1>Name</h1>
      </header>

      <div className="subHeader">
        <p>
          <PublicOutlinedIcon fontSize={"small"} />
          Location
        </p>
        <p>Role</p>
        <p>Company</p>
      </div>

      <aside>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditOutlinedIcon />}
          onClick={handleClickOpen}
        >
          Edit Profile
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<PictureAsPdfOutlinedIcon />}
        >
          Download
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<PrintOutlinedIcon />}
        >
          Print
        </Button>
      </aside>

      <main>
        <section className="main__left">
          <h4>About</h4>
          <p>Hi! I am Vihar Revankar</p>
          <h4>Experience</h4>
          <p> 5 years of Experience</p>

          <h4>Skills</h4>
          <div>
            <Chip
              className="chip"
              label="React JS"
              size="small"
              variant="outlined"
            />
            <Chip
              className="chip"
              label="React JS"
              size="small"
              variant="outlined"
            />
            <Chip
              className="chip"
              label="React JS"
              size="small"
              variant="outlined"
            />
            <Chip
              className="chip"
              label="React JS"
              size="small"
              variant="outlined"
            />
            <Chip
              className="chip"
              label="React JS"
              size="small"
              variant="outlined"
            />
            <Chip
              className="chip"
              label="React JS"
              size="small"
              variant="outlined"
            />
          </div>
        </section>
        <section className="main__right">TimeLine</section>
      </main>
      <footer>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </footer>

     
          </div>)
       :
         (<h1 onClick={redirect}>  Please Log in</h1>)

        }

<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog__header">
          <DialogTitle id="alert-dialog-slide-title">Edit Profile</DialogTitle>

          <DialogActions>
            <IconButton onClick={handleClose}>
              <CloseOutlinedIcon fontSize="large" />
            </IconButton>
          </DialogActions>
        </div>

        <DialogContent>
          <EditProfile />
        </DialogContent>
      </Dialog>

      

    </div>
    </div>
  );
}

export default MyProfile;

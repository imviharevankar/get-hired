import { IconButton } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const history = useHistory();
  const { signout } = useAuth();
  const { currentUser } = useAuth();

  const handleSignout = () => {
    signout();
    history.push("/sign-in");
  };

  return (
    <div className="navBar">
      <Link to="/">
        <div className="navBar__icon">
          <IconButton>
            <WorkOutlineIcon />
          </IconButton>
          <p>Jobs</p>
        </div>
      </Link>

      <Link to="applied">
        <div className="navBar__icon">
          <IconButton>
            <AssignmentOutlinedIcon />
          </IconButton>
          <p>Applied</p>
        </div>
      </Link>



      <Link to="profile">
        <div className="navBar__icon">
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <p>Profile</p>
        </div>
      </Link>



      <Link to="saved">


      <div className="navBar__icon">
        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <p>Saved</p>
      </div>
      </Link>


      {currentUser ? (
      <Link onClick={handleSignout}>

        <div className="navBar__icon">
          <IconButton>
            <ExitToAppOutlinedIcon />
          </IconButton>
          <p>Log Out</p>
        </div>
        </Link>
      ) : null}
    </div>
  );
}

export default NavBar;

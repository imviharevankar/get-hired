import React, { useState } from "react";
import "./Header.css";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { IconButton } from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import { useAuth } from "../contexts/AuthContext";

import AccountMenu from "./AccountMenu";
function Header() {
  const [display, setDisplay] = useState(false);
  


  const displayMenu = () => setDisplay(!display);
  const { currentUser } = useAuth();
  console.log(currentUser)


  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__right">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        {
            currentUser ?
            <div style={{ display: "flex"}}>
            
            <p>{currentUser.displayName}</p>
        {/* <IconButton onClick={displayMenu}>
          <PersonOutlineOutlinedIcon />
        </IconButton> */}
        </div>
         :
          null

        }
        

        {/* { display ? <AccountMenu disp={display} /> : "" } */}
      </div>
    </div>
  );
}

export default Header;

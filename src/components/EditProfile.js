import React, { useState } from "react";
import "./EditProfile.css";
import { Button, TextField } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { useUserData } from "../contexts/UserDataContext";

function EditProfile() {

  const { currentUser } = useAuth();
  const { company } = useUserData();
  return (
    <div className="editProfile">
      <form className="editProfile__form">
        <div>
          <TextField
            label="Full Name"
            type="text"
            value={currentUser.displayName}
            variant="outlined"
            inputProps={{
              readOnly: true
            }}
            style={{ margin: "5px 3px"}}
          />

          
        </div>


        <TextField 
            label="Company Name" 
            type="text" variant="outlined"
            className="input"
            value={company}
            style={{ margin: "5px 3px"}}
        />
        <div>


        <TextField 
            label="Role" 
            type="text" 
            variant="outlined"
            style={{ margin: "5px 3px"}}
        />

        <TextField 
            label="Location" 
            type="text" 
            required 
            variant="outlined"
            style={{ margin: "5px 3px"}}
        />
        </div>


        <TextField label="Last Name" type="text" required variant="outlined" />

        <Button>
            Submit
        </Button>
      </form>
    </div>
  );
}

export default EditProfile;

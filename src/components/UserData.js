import React, { useState } from "react";
import "./EditProfile.css";
import { Button, FormControl, MenuItem, TextField, FormControlLabel, FormLabel } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { db } from "./../firebase";
import { useHistory } from "react-router-dom";
import { useUserData } from "../contexts/UserDataContext";

import { Radio, RadioGroup } from '@mui/material';

import "./UserData.css"


const experiences = [
  {
    value: '1',
    label: '<1 Year',
  },
  {
    value: '2',
    label: '<5 Years',
  },
  {
    value: '3',
    label: '<10 Years',
  },
  {
    value: '4',
    label: '10+ years',
  },
];

function UserData() {
  const { currentUser } = useAuth();
  const { addUserData } = useUserData();

  const history = useHistory();
  const count = 10;

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState('1');

  const handleExperience = (e) => {
    setExperience(e.target.value);
  };



  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleUserData = (e) => {
    e.preventDefault();
    addUserData(company, role, location)
      .then((ref) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    setCompany("");
    setRole("");
    setLocation("");
  };



  return (
    <div className="userData">
      <form onSubmit={(e) => handleUserData(e)} className="userData__form">
        <h1 className="form__title">Add More Info.</h1>
        <div>
          <TextField
            label="Full Name"
            type="text"
            variant="outlined"
            defaultValue={currentUser.displayName}
            InputProps={{
              readOnly: true,
            }}
            required
            className="userData__inputField"

          />
           <TextField
            label="Location"
            value={location}
            onChange={(e) => handleLocation(e)}
            type="text"
            required
            variant="outlined"
            required
            className="userData__inputField"
          />
        </div>

        <div>
        <TextField
          label="Company Name"
          value={company}
          onChange={(e) => handleCompany(e)}
          type="text"
          variant="outlined"
          className="input"
          className="userData__inputField"


        />

<TextField
            label="Role"
            type="text"
            value={role}
            onChange={(e) => handleRole(e)}
            variant="outlined"
            required
            className="userData__inputField"


          />



        </div>

        <div>
        <TextField
          select
          label="Experience"
          variant="outlined"
          value={experience}
          onChange={handleExperience}
          helperText="Please select your Experience"
          required

        >
          {experiences.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        
<FormControl component="fieldset">
      <FormLabel component="legend">Status</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="Seeking" control={<Radio />} label="Seeking" />
        <FormControlLabel value="Employed" control={<Radio />} label="Employed" />
        <FormControlLabel value="Freelancer" control={<Radio />} label="Freelancer" />

      </RadioGroup>
    </FormControl>
        
          
         
        </div>

       

        <TextField
          label="About"
          variant="outlined"
          maxRows={count}
          placeholder={count}
          multiline
          required
          rows={4}
          style={{ overflow:"hidden"}}
          maxRows={4}
        />



        <Button className="signUp__button" type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UserData;

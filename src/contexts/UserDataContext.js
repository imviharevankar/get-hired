import React, { createContext, useContext, useState } from "react";
import { db } from "./../firebase";

export const UserDataContext = createContext();

export function useUserData() {
    return useContext(UserDataContext);
  }

export const UserDataProvider = (props) => {

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");


  const addUserData = (company, role, location) => {
    db.collection("userData").add({
        company,
        role,
        location
      })
  }


  const value = {
      company,
      role,
      location,
      addUserData,
  }

  return (<UserDataContext.Provider value={value}>
      {props.children}
  </UserDataContext.Provider>);
};

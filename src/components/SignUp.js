import React, { useRef, useState } from "react";
import "./SignUp.css";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

import { Button, TextField } from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send"
function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signup } = useAuth();

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;


    signup(fullName, email, password)
      .then((ref) => {
        setLoading(false);
        history.push("/user-data");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="signUp">
      <form className="signUp__form" onSubmit={(e) => handleSignUp(e)}>
        <h1 className="form__title">Sign up to GetHired</h1>

        <TextField
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          type="text"
          variant="outlined"
          ref={fullNameRef}
          className="signUp__inputField"
          required
        />

        <TextField
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          type="email"
          variant="outlined"
          ref={emailRef}
          className="signUp__inputField"
          required
        />

        <TextField
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          variant="outlined"
          ref={passwordRef}
          className="signUp__inputField"
          required
        />

        <div className="error">{error && <p>{error}</p>}</div>

        <Button className="signUp__button" type="submit" disabled={loading}
        variant="contained"
        endIcon={<SendIcon />}>
          Next
        </Button>
      </form>
    </div>
  );
}

export default SignUp;

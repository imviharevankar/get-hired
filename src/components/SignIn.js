import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { Link, Redirect } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { signin } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signin(email, password)
      .then((ref) => {
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="signIn">
      <form className="signIn__form" onSubmit={(e) => handleSignIn(e)}>
        <h1 className="form__title">Sign In to GetHired</h1>
        <TextField
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          type="text"
          variant="outlined"
          ref={emailRef}
          className="inputField"
          required
        />

        <TextField
          className="inputField"
          label="Password"
          placeholder="********"
          name="password"
          ref={passwordRef}
          type="password"
          variant="outlined"
          required
        />

        <div className="error">{error && <p>{error}</p>}</div>

        <Button className="signIn__button" type="submit" variant="contained" disabled={loading}>
          Sign In
        </Button>

              <div>
        <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
       
      </div>
      </form>

    </div>
  );
}

export default SignIn;

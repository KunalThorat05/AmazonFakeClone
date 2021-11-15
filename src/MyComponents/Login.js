import React, { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();  //it allows us to programmatically changed the URL
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //firebase here down
    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth => {
        history.push('/')
    })
    .catch(error => alert(error.message))



  };

  const register = (e) => {
    e.preventDefault();

    //firebase stuff down
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
        // it successfully created a new user with email and password

        if (auth) {  //if the auth is not empty 
            history.push('/')    //history of the browser and saying push( redirect )this to home page
        }
    })
    .catch(error => alert(error.message)) 
    
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in, you agree to AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

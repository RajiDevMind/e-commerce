import React from "react";
import "./CSS/LoginSignUp.css";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="login_signup">
      <form className="loginsignup_container">
        <h1>sign in</h1>
        <div className="fields">
          <input
            type="email"
            name="email"
            required
            minLength={4}
            placeholder="email address"
          />
          <input
            type="password"
            name="password"
            required
            minLength={5}
            maxLength={10}
            placeholder="password"
          />
        </div>
        <button type="submit">Continue</button>
        <div className="login">
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/login">Sign-In</Link>
            </span>{" "}
            here
          </p>
          <div className="login_agree">
            <input type="checkbox" name="" id="" />
            <p>By continue i agree to use the terms and policy.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

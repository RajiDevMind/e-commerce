import React from "react";
import "./CSS/LoginSignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login_signup">
      <form className="loginsignup_container">
        <h1>sign up</h1>
        <div className="fields">
          <input
            name="name"
            type="text"
            required
            minLength={5}
            placeholder="full name"
          />
          <input
            type="email"
            name="email"
            required
            minLength={5}
            placeholder="email address"
          />
          <input
            type="password"
            name="password"
            required
            maxLength={10}
            minLength={5}
            placeholder="password"
          />
        </div>
        <button type="submit">Continue</button>
        <div className="login">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/register">Sign-Up</Link>
            </span>
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

export default SignUp;

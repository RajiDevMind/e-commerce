import React from "react";
import "./CSS/LoginSignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login_signup">
      <div className="loginsignup_container">
        <h1>sign up</h1>
        <div className="fields">
          <input type="text" placeholder="full name" />
          <input type="email" name="" placeholder="email address" />
          <input type="password" name="" placeholder="password" />
        </div>
        <button>Continue</button>
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
      </div>
    </div>
  );
};

export default SignUp;

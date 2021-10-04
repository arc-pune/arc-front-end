import React from "react";
import "./signup.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <div class="signup">
      <div class="section-1">
        <div class="content">
          <div class="image">
            <img src="/Assets/images/image 8.png" alt="arc"></img>
          </div>
          <div class="text">
            Help our furry little friends find a home for themselves.
          </div>
        </div>
      </div>
      <div class="section-2">
        <form class="form">
        <div class="google button">
            <p>
                <img
                    src="/Assets/images/google.png"
                    alt="google"
                    className="inline"
                />
                SignUp with Google
            </p>
        </div>

        <p class="or">OR</p>
        
        <div class="form-control">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
            ></input>
          </div>
          <div class="form-control">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
            ></input>
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="example.mail@yourmail.com"
            ></input>
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password"></input>
          </div>
          <div class="buttons">
            <p class="signin button">Create Account</p>
          </div>
          <div>
            <p class="signup button"><Link to="/login">Already have an account? Log In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import "./login.css";
import NavBar from "../components/NavBar";

const Login = () => {
  return (
    <div class="login">
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
            <p class="signin button">Login</p>
            <p class="signup button">New User? Sign up</p>
          </div>
          <p class="or">OR</p>
          <div class="google button">
            <p>
              <img
                src="/Assets/images/google.png"
                alt="google"
                className="inline"
              />
              continue with google
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function Login() {
  return (
    <div class="auth_box flex text_center">
      <div class="form">
        <h2 class="color_primary cursive text_center mr_tb_md">Sign in</h2>
        <label for="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />

        <div class="flex align_center space_btw">
          <label class="checkbox">
            <input type="checkbox" name="" value="Remember Me" />
            <span class="chechbox_text">Remember Me</span>
          </label>
          <a href="#" class="color_primary">
            Forgot Password
          </a>
        </div>

        <Link to={"/login"}><button className="btn_ecom btn_shop_now text_center">Login Now</button></Link>

        <Link to={"/logout"} class="block mr_1">
          Create new account <i class="fa-solid fa-angle-right"></i>
        </Link>
      </div>
    </div >
  );
}

export { Login };

import React from "react";
import "./auth.css";

function SignUp() {
  return (
    <div class="auth_box flex text_center">
      <div class="form">
        <h2 class="color_primary cursive text_center mr_tb_md">Signup</h2>
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

        <label class="checkbox">
          <input type="checkbox" name="" value="conditions" />
          <span class="chechbox_text">I accept all Terms & Conditions</span>
        </label>

        <input
          class="btn_ecom btn_shop_now text_center"
          type="button"
          value="Create New Account"
        />

        <a href="login.html" class="block mr_1">
          Already have an account <i class="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export { SignUp };

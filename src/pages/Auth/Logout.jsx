import React from "react";
import "./auth.css";

function Logout() {
  return (
    <div class="auth_box flex text_center">
      <div class="form mr_3">
        <h2 class="color_primary cursive text_center mr_tb_md">logout ? :(</h2>
        <p class="textcenter size_sm">We are sad to see you go !!</p>

        <label class="checkbox">
          <input type="checkbox" name="" value="Remember Me" />
          <span class="chechbox_text">Remember your login details</span>
        </label>

        <input
          class="btn_ecom btn_shop_now text_center"
          type="button"
          value="Log Out"
        />

        <a href="../index.html" class="block mr_1">
          <i class="mr_sm fa-solid fa-angle-left"></i>Take me back to home page
        </a>
      </div>
    </div>
  );
}

export { Logout };

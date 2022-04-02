import React from "react";
import {
  footer1,
  footer2,
  footer3,
  footer4,
  footer5,
  footer6,
} from "../../assets";

import "./footer.css";

function Footer() {
  return (
    <footer className="flex space_btw">
      <div className="footer_left flex_30">
        <p className="footer_heading size_md mr_tb_md">Contact us</p>
        <p className="mr_tb_md">Akshya Nagar 1st Block 1st Cross</p>
        <p className="mr_tb_md">Rammurthy nagar, Bangalore-560016 </p>
        <p className="mr_tb_md"> simrangangwani3107@gmail.com </p>
        <p className="mr_tb_md">(+91)9876 54321</p>
        <p className="mr_tb_md">
          <a href="#" className="danger_color">
            www.simrangangwani.com
          </a>
        </p>
        <div className="social_icons mr_tb_md flex">
          <a
            className="side_icon"
            target="_blank"
            href="https://github.com/simran61"
          >
            <i className="size_md fab fa-github-alt"></i>
          </a>
          <a
            className="side_icon"
            target="_blank"
            href="https://www.linkedin.com/in/simran-gangwani-b93a441b2/"
          >
            <i className="size_md fab fa-linkedin-in"></i>
          </a>
          <a
            className="side_icon"
            target="_blank"
            href="https://www.instagram.com/simran_wb65/"
          >
            <i className="size_md fab fa-instagram"></i>
          </a>
          <a
            className="side_icon"
            target="_blank"
            href="https://twitter.com/SimranGangwani3"
          >
            <i className="size_md fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footer_center flex_15">
        <p className="footer_heading size_md mr_tb_md">Contact us</p>
        <p className="mr_tb_md">About us</p>
        <p className="mr_tb_md">Before you go</p>
        <p className="mr_tb_md">Online check in</p>
        <p className="mr_tb_md">FAQ</p>
      </div>

      <div className="footer_center flex_15">
        <p className="footer_heading size_md mr_tb_md">Contact us</p>
        <p className="mr_tb_md">How it works</p>
        <p className="mr_tb_md">About us</p>
        <p className="mr_tb_md">Affiliate</p>
        <p className="mr_tb_md">Popular posts</p>
      </div>

      <div className="footer_right flex_30">
        <p className="footer_heading size_md mr_tb_md">Instagram</p>
        <div className="flex gap_0_5">
          <img src={footer1} alt="" className="footer_img" />
          <img src={footer2} alt="" className="footer_img" />
          <img src={footer3} alt="" className="footer_img" />
          <img src={footer4} alt="" className="footer_img" />
          <img src={footer5} alt="" className="footer_img" />
          <img src={footer6} alt="" className="footer_img" />
        </div>
      </div>
    </footer>
  );
}

export { Footer };

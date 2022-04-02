import React from 'react'
import './newsletter.css'

function Newsletter() {
  return (
    <section className="newsletter flex">
        <div className="flex_50 color_primary mr_3 cursive text_center side_heading">Subscribe to stay connected with us</div>
        <div className="newsletter_content size_md pd_tb_6">
            <h3>Subscribe to our newsletter</h3>
            <div className="search relative">
                <input type="text" placeholder="Your email address"/>
                <button className="btn_ecom btn_subs">Subscribe</button>
            </div>
        </div>
    </section>
  )
}


export {Newsletter};
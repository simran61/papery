import React from "react";
import "./filter.css";

function Filter() {
  return (
    <div className="filters mr_3 pd_sm">
      <div className="search_product flex space_btw">
        <input type="text" placeholder="Search products.." />
        <i className="size_sm grey_text fa-solid fa-magnifying-glass"></i>
      </div>

      <button className="btn color_primary filter_btn">
        <i className="mr_sm fa-solid fa-xmark"></i>Clear all filters
      </button>

      <div className="slider_filter_price">
        <p className="filter_headings">Filter by price</p>
        <div className="flex space_btw">
          <div className="slider">
            <div className="flex space_btw">
              <div>0</div>
              <div className="value">640</div>
              <div>1500</div>
            </div>
            <input type="range" min="0" max="1500" className="rangeSlider" />
          </div>
        </div>
        <p className="mr_tb_sm1">Price: $0 - $1500</p>
      </div>

      <div className="checkbox_categories">
        <p className="filter_headings">Category</p>
        <label className="checkbox">
          <input type="checkbox" name="" value="Kids Products" />
          <span className="chechbox_text">Kids Products</span>
        </label>

        <label className="checkbox">
          <input type="checkbox" name="" value="School Products" />
          <span className="chechbox_text">School Products</span>
        </label>

        <label className="checkbox">
          <input type="checkbox" name="" value="Office Products" />
          <span className="chechbox_text">Office Products</span>
        </label>

        <label className="checkbox">
          <input type="checkbox" name="" value="Gift Products" />
          <span className="chechbox_text">Gift Products</span>
        </label>
      </div>

      <div className="rating_component">
        <p className="filter_headings">Rating</p>
        <div className="star_rating">
          <div className="star_container text_center">
            <span className="star star1">
              <i className="fas fa-star"></i>
            </span>
            <span className="star star2">
              <i className="fas fa-star"></i>
            </span>
            <span className="star star3">
              <i className="fas fa-star"></i>
            </span>
            <span className="star star4">
              <i className="fas fa-star"></i>
            </span>
            <span className="star star5">
              <i className="fas fa-star"></i>
            </span>
          </div>
          <p className="rating_desc text_center">Browse according to rating</p>
        </div>
      </div>

      <div className="radio_sort_price">
        <p className="filter_headings">Sort by</p>
        <label className="radio">
          <input type="radio" value="lowToHigh" name="price" />
          <span className="radio_text">Price: Low to High</span>
        </label>

        <label className="radio">
          <input type="radio" value="highToLow" name="price" />
          <span className="radio_text">Price- High to low</span>
        </label>
      </div>
    </div>
  );
}

export { Filter };

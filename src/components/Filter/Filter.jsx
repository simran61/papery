import React from "react";
import { useFilter } from "../../context/filter-context";
import "./filter.css";

function Filter() {
  const { productState, productDispatch } = useFilter();
  const { price, category, rating, sort } = productState;
  return (
    <div className="filters mr_3 pd_sm">
      <div className="search_product flex space_btw">
        <input type="text" placeholder="Search products.." />
        <i className="size_sm grey_text fa-solid fa-magnifying-glass"></i>
      </div>

      <button
        onClick={() => {
          productDispatch({ type: "CLEAR_FILTER" });
        }}
        className="btn color_primary filter_btn"
      >
        <i className="mr_sm fa-solid fa-xmark"></i>Clear all filters
      </button>

      <div className="slider_filter_price">
        <p className="filter_headings">Filter by price</p>
        <div className="flex space_btw">
          <div className="slider">
            <div className="flex space_btw">
              <div>0</div>
              {/* <div className="value">{price}</div> */}
              <div>{price}</div>
            </div>
            <input
              onChange={(e) => {
                productDispatch({
                  type: "RANGE_FILTER",
                  payload: { maxPrice: e.target.value },
                });
              }}
              type="range"
              min="0"
              max="30"
              value={price}
              className="rangeSlider"
            />
          </div>
        </div>
        <p className="mr_tb_sm1">Price: $0 - $30</p>
      </div>

      <div className="checkbox_categories">
        <p className="filter_headings">Category</p>
        <label className="checkbox" for="Notebooks">
          <input
            onChange={() =>
              productDispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "Notebooks" },
              })
            }
            type="checkbox"
            name="Notebooks"
            value="Notebooks"
            checked={category.includes("Notebooks")}
          />
          <span className="chechbox_text">Notebooks</span>
        </label>

        <label for="Cards" className="checkbox">
          <input
            onChange={() =>
              productDispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "Cards" },
              })
            }
            type="checkbox"
            name="Cards"
            value="Cards"
            checked={category.includes("Cards")}
          />
          <span className="chechbox_text">Cards</span>
        </label>

        <label for="Canvas" className="checkbox">
          <input
            onChange={() =>
              productDispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "Canvas" },
              })
            }
            type="checkbox"
            name="Canvas"
            value="Canvas"
            checked={category.includes("Canvas")}
          />
          <span className="chechbox_text">Canvas</span>
        </label>
      </div>

      <div className="rating_component">
        <p className="filter_headings">Rating</p>
        <div className="star_rating">
          <div className="star_container text_center">
            <span
              onClick={() =>
                productDispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 1 },
                })
              }
              className={`star  ${rating >= 1 ? "star-yellow" : ""}`}
            >
              <i className="fas fa-star"></i>
            </span>
            <span
              onClick={() =>
                productDispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 2 },
                })
              }
              className={`star  ${rating >= 2 ? "star-yellow" : ""}`}
            >
              <i className="fas fa-star"></i>
            </span>
            <span
              onClick={() =>
                productDispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 3 },
                })
              }
              className={`star  ${rating >= 3 ? "star-yellow" : ""}`}
            >
              <i className="fas fa-star"></i>
            </span>
            <span
              onClick={() =>
                productDispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 4 },
                })
              }
              className={`star  ${rating >= 4 ? "star-yellow" : ""}`}
            >
              <i className="fas fa-star"></i>
            </span>
            <span
              onClick={() =>
                productDispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 5 },
                })
              }
              className={`star  ${rating >= 5 ? "star-yellow" : ""}`}
            >
              <i className="fas fa-star"></i>
            </span>
          </div>
          <p className="rating_desc text_center">
            You seleted {rating} stars and above
          </p>
        </div>
      </div>

      <div className="radio_sort_price">
        <p className="filter_headings">Sort by</p>
        <label
          onClick={() =>
            productDispatch({ type: "SORT_FILTER", payload: { sort: "ASC" } })
          }
          className="radio"
        >
          <input
            type="radio"
            value="lowToHigh"
            name="price"
            checked={sort === "ASC"}
          />
          <span className="radio_text">Price: Low to High</span>
        </label>

        <label
          onClick={() =>
            productDispatch({ type: "SORT_FILTER", payload: { sort: "DSC" } })
          }
          className="radio"
        >
          <input
            type="radio"
            value="highToLow"
            name="price"
            checked={sort === "DSC"}
          />
          <span className="radio_text">Price- High to low</span>
        </label>
      </div>
    </div>
  );
}

export { Filter };

import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
const filterReducer = (filterState, action) => {
  let filterStateCopy = { ...filterState };
  console.log("initial filterStateCopy", filterStateCopy);
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      filterStateCopy = {
        ...filterStateCopy,
        product: action.payload.products,
        default: action.payload.products,
      };
      break;

    case "CLEAR_FILTER":
      filterStateCopy = {
        product: filterStateCopy.default,
        price: 30,
        category: [],
        rating: 5,
        sort: null,
        default: filterStateCopy.default,
      };
      break;

    case "RANGE_FILTER":
      filterStateCopy = {
        ...filterStateCopy,
        price: action.payload.maxPrice,
        product: filterStateCopy.default.filter(
          (item) => item.price <= action.payload.maxPrice
        ),
      };
      break;

    case "TOGGLE_CATEGORY":
      filterStateCopy = {
        ...filterStateCopy,
        category: [
          ...(filterStateCopy.category.includes(action.payload.category)
            ? filterStateCopy.category.filter(
                (category) => category !== action.payload.category
              )
            : [...filterStateCopy.category, action.payload.category]),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...(filterStateCopy.category.length
            ? filterStateCopy.default.filter((item) =>
                filterStateCopy.category.includes(item.category)
              )
            : filterStateCopy.default),
        ],
      };
      break;

    case "RATING_FILTER":
      filterStateCopy = {
        ...filterStateCopy,
        rating: action.payload.rating,
        product: filterStateCopy.default.filter(
          (item) => item.rating >= action.payload.rating
        ),
      };
      break;
    case "SORT_FILTER":
      filterStateCopy = {
        ...filterStateCopy,
        sort: action.payload.sort,
        product:
          action.payload.sort === "DSC"
            ? [...filterStateCopy.default].sort((a, b) => b.price - a.price)
            : [...filterStateCopy.default].sort((a, b) => a.price - b.price),
      };
      break;

    case "ADD_TO_WISHLIST":
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isWishlisted: !item.isWishlisted }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      break;

    case "ADD_TO_CART":
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isAddedToCart: true }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      break;

    case "REMOVE_FROM_CART":
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isAddedToCart: false }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      break;

    default:
      break;
  }

  if (filterStateCopy.sort !== null && !action.payload.sort) {
    filterStateCopy = {
      ...filterStateCopy,
      product:
        action.payload.sort === "DSC"
          ? [...filterStateCopy.product].sort((a, b) => b.price - a.price)
          : [...filterStateCopy.product].sort((a, b) => a.price - b.price),
    };
  }

  if (filterStateCopy.category.length && !action.payload.category) {
    filterStateCopy = {
      ...filterStateCopy,
      product: [
        ...(filterStateCopy.category.length
          ? filterStateCopy.product.filter((item) =>
              filterStateCopy.category.includes(item.category)
            )
          : filterStateCopy.product),
      ],
    };
  }

  if (filterStateCopy.price !== 30 && !action.payload.maxPrice) {
    filterStateCopy = {
      ...filterStateCopy,
      product: filterStateCopy.product.filter(
        (item) => item.price <= filterStateCopy.price
      ),
    };
  }

  if (filterStateCopy.rating !== 5 && !action.payload.rating) {
    filterStateCopy = {
      ...filterStateCopy,
      rating: filterStateCopy.rating,
      product: filterStateCopy.product.filter(
        (item) => item.rating >= filterStateCopy.rating
      ),
    };
  }

  return { ...filterStateCopy };
};
const FilterContext = createContext(null);
const FilterProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(filterReducer, {
    product: [],
    price: 30,
    category: [],
    rating: 5,
    sort: null,
    default: [],
  });
  useEffect(() => {
    (async () => {
      let response = await axios.get("/api/products");
      console.log(response.data.products);
      productDispatch({
        type: "UPDATE_PRODUCTS",
        payload: { products: response.data.products },
      });
    })();
  }, []);

  return (
    <FilterContext.Provider value={{ productState, productDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };

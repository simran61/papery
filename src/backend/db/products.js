import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "../../assets";
export const products = [
  {
    _id: uuid(),
    itemName: "Girlish Papery",
    category: "Cards",
    price: 15.75,
    rating: 2.5,
    imgURL: product1,
  },
  {
    _id: uuid(),
    itemName: "Elegence Papery",
    category: "Notebooks",
    price: 21.5,
    rating: 3.5,
    imgURL: product2,
  },
  {
    _id: uuid(),

    itemName: "Love Papery",
    category: "Cards",
    price: 10.25,
    rating: 1,
    imgURL: product3,
  },
  {
    _id: uuid(),
    itemName: "The Baker Papery",
    category: "Notebooks",
    price: 11.75,
    rating: 4.7,
    imgURL: product4,
  },
  {
    _id: uuid(),
    itemName: "Pinkish Papery",
    category: "Notebooks",
    price: 18.75,
    rating: 5,
    imgURL: product5,
  },
  {
    _id: uuid(),
    itemName: "Butterfly Papery",
    category: "Canvas",
    price: 15.75,
    rating: 2.5,
    imgURL: product6,
  },
  {
    _id: uuid(),
    itemName: "Smallish Gratitude Papery",
    price: 5.75,
    category: "Cards",
    rating: 4.9,
    imgURL: product7,
  },
  {
    _id: uuid(),
    itemName: "Peach Nature Papery",
    price: 15.75,
    category: "Notebooks",
    rating: 2.8,
    imgURL: product8,
  },
  {
    _id: uuid(),
    itemName: "Sunny Papery",
    category: "Canvas",
    price: 12.5,
    rating: 3.5,
    imgURL: product9,
  },
];

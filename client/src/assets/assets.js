// src/assets/assets.js
import p_img1 from "./p_img/p_img1.png";
import p_img2 from "./p_img/p_img2.png";
import p_img2_2 from "./p_img/p_img2_2.png";
import p_img2_3 from "./p_img/p_img2_3.png";
import p_img2_4 from "./p_img/p_img2_4.png";
import p_img3 from "./p_img/p_img3.png";
import p_img4 from "./p_img/p_img4.png";
import p_img5 from "./p_img/p_img5.png";
import p_img6 from "./p_img/p_img6.png";
import p_img15 from "./p_img/p_img15.png";

export const products = [
  {
    id: 1,
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt, close-fitting and stylish.",
    price: 49.99,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    id: 2,
    name: "Men Casual Slim Fit Shirt",
    description: "Casual wear slim fit shirt made with breathable cotton.",
    price: 59.99,
    image: [p_img2, p_img2_2, p_img2_3, p_img2_4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345449,
    bestseller: false,
  },
  {
    id: 3,
    name: "Kids Hoodie Winterwear",
    description: "Cozy hoodie for kids with soft inner lining for winter.",
    price: 39.99,
    image: [p_img3],
    category: "Kids",
    subCategory: "TopWear",
    sizes: ["S", "M"],
    date: 1716634345450,
    bestseller: true,
  },
  {
    id: 4,
    name: "Women Denim Jeans",
    description: "Classic high-waist denim jeans with stretchable fabric.",
    price: 69.99,
    image: [p_img4],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345451,
    bestseller: false,
  },
  {
    id: 5,
    name: "Men Winter Jacket",
    description: "Warm and stylish winter jacket with water-resistant fabric.",
    price: 120,
    image: [p_img5],
    category: "Men",
    subCategory: "TopWear",
    sizes: ["M", "L", "XL"],
    date: 1716634345452,
    bestseller: true,
  },
  {
    id: 6,
    name: "Kids Cotton Shorts",
    description: "Lightweight cotton shorts perfect for everyday wear.",
    price: 25,
    image: [p_img6],
    category: "Kids",
    subCategory: "TopWear",
    sizes: ["S", "M"],
    date: 1716634345453,
    bestseller: false,
  },
  {
    id: 7,
    name: "Men's Lower",
    description: "Lightweight cotton shorts perfect for everyday wear.",
    price: 20,
    image: [p_img15],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M"],
    date: 1716634345454,
    bestseller: false,
  },
];

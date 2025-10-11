import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 15;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [user, setUser] = useState("");

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error("Select product size ");
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
      const sizesObj = cartItems[productId];
      const itemInfo = products.find((product) => product._id === productId);
      if (!itemInfo) continue; // skip if product not found

      for (const size in sizesObj) {
        const quantity = sizesObj[size];
        totalAmount += itemInfo.price * quantity;
      }
    }

    return totalAmount;
  };
  const storeTokenInLS = (serverToken) => {
    return sessionStorage.setItem("token", serverToken);
  };

  const UserAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);
        setUser(data.userData);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      UserAuthentication();
    }
  }, [token]);

  const getProductData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/list`, {
        method: "GET",
      });
      const res_data = await response.json();
      // console.log(res_data);
      if (response.ok) {
        setProducts(res_data.products);
        console.log(res_data.products);
      } else {
        toast.error(res_data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  // let isLoggedIn = !!token;

  // useEffect(() => {
  //   // addToCart();
  //   console.log(cartItems);
  // }, [cartItems]);

  const value = {
    products,
    setProducts,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    storeTokenInLS,
    token,
    setToken,
    user,
    setUser,
    UserAuthentication,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

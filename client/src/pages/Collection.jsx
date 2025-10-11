import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "../components/ProductItem";

import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export default function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCateegory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (search) {
      productsCopy = productsCopy.filter(
        (item) =>
          item.name && item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    switch (sortType) {
      case "low-high":
        setFilterProducts(productsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(productsCopy.sort((a, b) => b.price - a.price));
        break;
    }
    setFilterProducts(productsCopy);
  };

  /*const sortProduct = (sortType) => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };*/
  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, sortType, products]);

  /*useEffect(() => {
    sortProduct(sortType);
  }, [sortType]);*/

  return (
    <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-10  border-t">
      {/* Filter Sidebar */}
      <div className="w-full sm:w-64">
        {/* Filter Header */}
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center   cursor-pointer gap-1 text-amber-50 select-none"
        >
          Filters
          {/* Caret icon → only visible on small screens */}
          <span
            className="inline-block sm:hidden ml-2 transition-transform duration-200"
            aria-hidden="true"
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              className={`h-4 ${
                showFilter ? "rotate-90" : "rotate-0"
              } transform`}
            />
          </span>
        </p>

        {/* Category Filter */}
        <div
          className={`border border-amber-50 rounded-md pl-5 py-3 mt-4 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="text-amber-300 font-semibold mb-2">Categories</p>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-amber-50">
              <input type="checkbox" value={"Men"} onChange={toggleCategory} />{" "}
              Men
            </label>
            <label className="flex items-center gap-2 text-amber-50">
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </label>
            <label className="flex items-center gap-2 text-amber-50">
              <input type="checkbox" value={"Kids"} onChange={toggleCategory} />{" "}
              Kids
            </label>
          </div>
        </div>

        {/* Type Filter */}
        <div
          className={`border border-amber-50 rounded-md pl-5 py-3 mt-4 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="text-amber-300 font-semibold mb-2">Type</p>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-amber-50">
              <input
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCateegory}
              />{" "}
              Topwear
            </label>
            <label className="flex items-center gap-2 text-amber-50">
              <input
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCateegory}
              />{" "}
              Bottomwear
            </label>
            <label className="flex items-center gap-2 text-amber-50">
              <input
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCateegory}
              />{" "}
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right side part*/}
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="text-amber-50 mb-4">All Collections</p>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="text-amber-50 bg-gray-800 border border-amber-50 mb-2"
          >
            <option value="relevent">Sort by:Relevant</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={item._id}
              name={item.name}
              _id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

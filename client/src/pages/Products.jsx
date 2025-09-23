import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import starIcon from "../assets/icon/star_icon.png";
import stardullIcon from "../assets/icon/star_dull_icon2.png";
import RelatedProducts from "../components/RelatedProducts";

export default function Products() {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductsData = () => {
    products.map((item) => {
      if (item.id === Number(productId)) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);

        return null; // prevent React warnings
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId]);

  return productData ? (
    <div className="boder-t-2 pl-6 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Products Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-amber-50">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1">
            <div className="flex item-center gap-1 mt-2">
              <img src={starIcon} alt="" className="w-3 5" />
              <img src={starIcon} alt="" className="w-3 5" />
              <img src={starIcon} alt="" className="w-3 5" />
              <img src={starIcon} alt="" className="w-3 5" />
            </div>
            <div className="mt-2.5">
              <img src={stardullIcon} alt="" className="w-3.5 h-4 5" />
            </div>
          </div>
          <p className="text-amber-50 mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-300 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-amber-50">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-green-700 text-white px-8 py-3 text-sm active:bg-gray-400">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 text-amber-50" />
          <div className="text-sm text-gray-300 mt-5 flex flex-col gap1">
            <p>100% Premium Product</p>
            <p>Cash on delivery is availabe</p>
            <p>Easy return and Exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* description section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm text-amber-50">Description</b>
          <p className="border px-5 py-3 text-sm text-amber-50">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 text-sm text-gray-300">
          <p>
            Dream Closet is your ultimate fashion destination, offering stylish
            and high-quality clothing for men, women, and kids. From trendy
            casual wear to elegant outfits, we bring you the latest fashion at
            affordable prices, helping you look and feel your best every day
          </p>
          <p>
            An e-commerce website is an online platform where businesses sell
            products or services directly to customers over the internet. It
            allows users to browse items, compare prices, make purchases, and
            often track orders, providing a convenient shopping experience
            without visiting a physical store.
          </p>
        </div>
      </div>
      {/* Related Rpoducts */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import starIcon from "../assets/icon/star_icon.png";
import stardullIcon from "../assets/icon/star_dull_icon2.png";
import RelatedProducts from "../components/RelatedProducts";

export default function Products() {
  const { productId } = useParams(); // URL param
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // Fetch product based on ID
  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]); // set first image as default
      }
    }
  }, [productId, products]);

  if (!productData)
    return <div className="text-amber-50 p-10">Loading product...</div>;

  return (
    <div className="pl-6 pt-10">
      {/* Product Section */}
      <div className="flex flex-col sm:flex-row gap-12">
        {/* Images */}
        <div className="flex flex-col sm:flex-row flex-1 gap-3">
          {/* Thumbnail images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] gap-2">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                className="w-[24%] sm:w-full cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setImage(img)}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="w-full sm:w-[80%]">
            <img src={image} alt={productData.name} className="w-full h-auto" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium text-amber-50">
            {productData.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
            ))}
            <img src={stardullIcon} alt="star dull" className="w-4 h-4" />
          </div>

          {/* Price */}
          <p className="text-3xl font-medium text-amber-50 mt-5">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-300 md:w-4/5 mt-5">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="my-8 flex flex-col gap-4">
            <p className="text-amber-50">Select Size</p>
            <div className="flex gap-2 text-amber-50">
              {productData.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border py-2 px-4 ${
                    size === s ? "border-orange-500" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-green-700 text-white px-8 py-3 text-sm active:bg-gray-400"
          >
            ADD TO CART
          </button>

          {/* Extra info */}
          <hr className="mt-8 sm:w-4/5 border-amber-50" />
          <div className="flex flex-col gap-1 mt-5 text-gray-300 text-sm">
            <p>100% Premium Product</p>
            <p>Cash on delivery available</p>
            <p>Easy return and exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm text-amber-50">Description</b>
          <p className="border px-5 py-3 text-sm text-amber-50">Reviews</p>
        </div>
        <div className="flex flex-col mr-6 gap-4 border  px-6 text-sm text-gray-300 mt-2">
          <p className="m-1">
            {productData.description}.
            <br />
            An e-commerce website allows users to browse, compare, and purchase
            products online conveniently.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
}

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SIZE_OPTIONS = ["S", "M", "L", "XL", "XXL"];
const MAX_IMAGES = 4;

const AddProduct = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const [previews, setPreviews] = useState([null, null, null, null]);

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    const newPreviews = [...previews];
    newPreviews[index] = file ? URL.createObjectURL(file) : null;
    setPreviews(newPreviews);

    if (index === 0) setImage1(file);
    if (index === 1) setImage2(file);
    if (index === 2) setImage3(file);
    if (index === 3) setImage4(file);
  };

  const toggleSize = (size) => {
    setSizes(
      sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image1 && !image2 && !image3 && !image4) {
      toast.warning("Please select at least one image!");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await fetch(`http://localhost:5000/api/products/add`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const res_data = await response.json();
      if (response.ok) {
        toast.success("Product added!");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setBestseller(false);
        setSizes([]);
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setPreviews([null, null, null, null]);
      } else {
        toast.error(res_data.message || "Failed to add product");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    }
  };

  return (
    <div className="w-full max-w-xl sm:p-6 rounded-xl shadow-lg bg-gray-900 text-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 mb-6 text-center sm:text-left">
        Add Product
      </h2>

      {/* Image Upload Boxes */}
      <div className="flex flex-wrap sm:flex-nowrap gap-3 mb-4 justify-center sm:justify-start">
        {Array(MAX_IMAGES)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="relative border-2 border-dashed border-amber-500 rounded-lg w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gray-800 overflow-hidden"
            >
              {previews[idx] ? (
                <img
                  src={previews[idx]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <label className="cursor-pointer text-amber-400 text-xl flex flex-col items-center justify-center h-full w-full">
                  +
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(idx, e)}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
          className="w-full p-2 rounded bg-gray-800 border border-amber-500 placeholder-amber-400 focus:outline-none focus:border-amber-400"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows="3"
          required
          className="w-full p-2 rounded bg-gray-800 border border-amber-500 placeholder-amber-400 focus:outline-none focus:border-amber-400"
        />

        {/* Category, SubCategory, Price */}
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="flex-1 p-2 rounded bg-gray-800 border text-amber-400 border-amber-500 focus:outline-none focus:border-amber-400"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>

          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
            className="flex-1 p-2 rounded bg-gray-800 border text-amber-400 border-amber-500 focus:outline-none focus:border-amber-400"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Footwear">Footwear</option>
          </select>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
            className="flex-1 p-2 rounded bg-gray-800 border border-amber-500 placeholder-amber-400 focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {SIZE_OPTIONS.map((size) => (
            <button
              type="button"
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 rounded border text-sm sm:text-base ${
                sizes.includes(size)
                  ? "bg-amber-500 text-gray-900 border-amber-500"
                  : "bg-gray-800 text-amber-400 border-amber-500"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Bestseller */}
        <div className="flex items-center gap-2 text-amber-400 justify-center sm:justify-start">
          <input
            type="checkbox"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
            className="w-5 h-5 text-amber-500"
          />
          <span>Bestseller</span>
        </div>

        {/* Add Product Button */}
        <button
          type="submit"
          className="w-full py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg 
             hover:bg-amber-700 hover:scale-105 
             active:scale-95 active:bg-amber-600
             transition transform duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

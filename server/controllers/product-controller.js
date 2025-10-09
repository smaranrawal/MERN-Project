const cloudinary = require("cloudinary").v2;
const productModel = require("../models/product-model");

const addProducts = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData);

    const product = new productModel(productData);
    await product.save();
    res.status(201).json({ sucess: true, messsage: "Product added" });
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log(imagesUrl);
  } catch (error) {
    console.log(error);
    res.status(201).json({ sucess: false, message: error.message });
    // next(error);
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(201).json({ sucess: true, products });
  } catch (error) {
    console.log(error);
    res.status(201).json({ sucess: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.status(201).json({ sucess: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.status(201).json({ sucess: false, message: error.message });
  }
};

const singleProducts = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.status(201).json({ sucess: true, product });
  } catch (error) {
    console.log(error);
    res.status(201).json({ sucess: false, message: error.message });
  }
};

module.exports = { addProducts, listProducts, removeProduct, singleProducts };

const express = require("express");
const router = express.Router();
const productcontrollers = require("../controllers/product-controller");
const upload = require("../middleware/multer.js");
const adminAuth = require("../middleware/adminauth-middleware.js");

router.route("/add").post(
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  productcontrollers.addProducts
);
router.route("/list").get(productcontrollers.listProducts);
router.route("/remove").post(productcontrollers.removeProduct);
router.route("/single").post(productcontrollers.singleProducts);

module.exports = router;

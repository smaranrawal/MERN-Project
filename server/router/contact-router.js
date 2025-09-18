const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const contactSchema = require("../validator/contact-validator");
const validate = require("../middleware/validate-middleware");

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;

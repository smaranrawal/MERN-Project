require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const productRoute = require("./router/product-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const connectCloudinary = require("./utils/cloudinary");

//tackle cors
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
  })
);
app.use(express.json());
app.use(errorMiddleware);

//api endpoints
app.use("/api/auth", router); //for rgister,login
app.use("/api/form", contactRoute); //for contact-controller
//for products
app.use("/api/products", productRoute);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
connectCloudinary();

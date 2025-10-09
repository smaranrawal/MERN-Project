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
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Register from "./pages/Register";
import "./index.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ShopContextProvider from "./context/ShopContext";
import Cart from "./pages/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <ToastContainer />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
};

export default App;

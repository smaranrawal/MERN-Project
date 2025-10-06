import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { token, setToken, storeTokenInLS } = useContext(ShopContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("res form data", res_data);
        toast.success("Register Scucesfully! Please Login.");

        // setToken(res_data.token);
        // storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        const res_data = await response.json();
        const errorMsg =
      res_data.extraDetails || res_data.message || "Registration failed!";
    toast.error(errorMsg);
      }
      console.log(response);
    } catch (error) {
      console.log("register error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <section className="flex items-center justify-center bg-gray-800 py-10">
      <div className="w-full max-w-xl  bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-amber-500 mb-5 text-center">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-amber-400 font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              className="w-full px-2 py-1 text-sm border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-amber-400 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              className="w-full px-2 py-1 text-sm border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-amber-400 font-medium mb-1"
            >
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
              className="w-full px-2 py-1 text-sm border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-amber-400 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
              className="w-full px-2 py-1 text-sm border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
            />
          </div>

          {/* Login Link */}
          <div className="flex justify-between text-md">
            <p className="text-amber-400 hover:underline">Forgot password?</p>
            <Link to="/login" className="text-amber-400 hover:underline">
              Login Here
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 text-md bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 active:bg-amber-800 transition duration-200"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
}

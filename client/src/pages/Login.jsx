import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
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
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // const res_data = await response.json();
      if (response.ok) {
        const res_data = await response.json();
        console.log("res form data", res_data);
        setToken(res_data.token);
        storeTokenInLS(res_data.token);
        // alert("Login Sucessful");
        toast.success("Login Successful ");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        // alert("Inavalid credentials");
        const res_data = await response.json();
        const errorMsg =
          res_data.extraDetails || res_data.message || "Invalid Credentails!";
        toast.error(errorMsg);
      }
    } catch (error) {
      console.log("Invalid credentials");
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <section className="py-10 flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-xl ">
        <h1 className="text-3xl font-bold text-amber-500 mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              className="w-full px-3 py-2 border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
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
              className="w-full px-3 py-2 border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
            />
          </div>

          {/* Forgot Password + Register Here in same row */}
          <div className="flex justify-between text-sm">
            <Link
              to="/forgot-password"
              className="text-amber-400 hover:underline"
            >
              Don't have an account?
            </Link>
            <Link to="/register" className="text-amber-400 hover:underline">
              Create account
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 active:bg-amber-800 transition duration-300 ease-in-out"
          >
            Login Now
          </button>
        </form>
      </div>
    </section>
  );
}

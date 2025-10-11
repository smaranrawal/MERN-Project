import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      if (response.ok) {
        console.log("res form data", res_data);
        setToken(res_data.token);
        toast.success("Login Sucessfull");
        navigate("/add");
      } else {
        console.log(res_data);
        // const errorMsg =
        //   res_data.extraDetails || res_data.message || "Invalid Credentails!";
        toast.error(res_data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
};

export default Login;

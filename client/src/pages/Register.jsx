import React, { useState } from "react";
// import {registerImage} from "../assets/images/register.png";
import downloadImage from "../assets/images/pic.jpg";
export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
  };

  return (
    <section className=" py-10">
      <main className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side image */}
          <div className="flex justify-center">
            <img
              src={downloadImage}
              alt="lock picture"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right side form */}
          <div className="bg-grey-800 p-8 rounded-xl ">
            <h1 className="text-2xl font-bold text-amber-700 mb-6 text-center">
              Registration Form
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-amber-700 font-medium mb-1"
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
                  className="w-full px-4 py-2 bg-gray-500 border rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-amber-700 font-medium mb-1"
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
                  className="w-full px-4 py-2 bg-gray-500 border rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-amber-700 font-medium mb-1"
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
                  className="w-full px-4 py-2 bg-gray-500 border  rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-amber-700 font-medium mb-1"
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
                  className="w-full px-4 py-2 bg-gray-500 border  rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

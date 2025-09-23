import React, { useState } from "react";

export default function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const [user, setUser] = useState({
    user: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));
  };

  // Conditional form classes
  const formWidth = currentState === "SignUp" ? "max-w-xl" : "max-w-lg"; // wider for SignUp
  const formHeight = currentState === "SignUp" ? "h-[550px]" : "h-[400px]"; // slightly shorter for SignUp

  return (
    <section className="min-h-screen flex items-center justify-center py-10 bg-gray-900">
      <div
        className={`w-full ${formWidth} ${formHeight} p-8 flex flex-col justify-center transition-all duration-300`}
      >
        <h1 className="text-3xl font-bold text-amber-700 mb-6 text-center">
          {currentState}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {currentState === "SignUp" && (
            <div>
              <label
                htmlFor="user"
                className="block text-amber-500 font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                name="user"
                id="user"
                placeholder="Enter your username"
                required
                autoComplete="off"
                value={user.user}
                onChange={handleInput}
                className="w-full px-4 py-2 border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-amber-500 font-medium mb-1"
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
              className="w-full px-4 py-2 border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
            />
          </div>

          {currentState === "SignUp" && (
            <div>
              <label
                htmlFor="phone"
                className="block text-amber-500 font-medium mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
                className="w-full px-4 py-2 border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="password"
              className="block text-amber-500 font-medium mb-1"
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
              className="w-full px-4 py-2 border-b-2 border-amber-500 bg-transparent focus:outline-none focus:border-amber-400 text-white placeholder-gray-400"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <p className="text-gray-300 hover:text-amber-400 cursor-pointer transition">
              Forgot your password?
            </p>
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("SignUp")}
                className="mt-2 text-gray-300 hover:text-amber-400 cursor-pointer transition"
              >
                <span className="font-semibold">Create account</span>
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="mt-2 text-gray-300 hover:text-amber-700 cursor-pointer transition"
              >
                <span className="font-semibold">Login here</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 active:bg-amber-900 transition duration-300 ease-in-out"
          >
            {currentState}
          </button>
        </form>
      </div>
    </section>
  );
}

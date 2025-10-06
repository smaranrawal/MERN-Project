import React, { useContext, useState } from "react";
import downloadImage from "../assets/images/download.png";
import { ShopContext } from "../context/ShopContext";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};
export default function Contact() {
  const { user, setUser } = useContext(ShopContext);
  const [userData, setUserData] = useState(true);
  const [contact, setContact] = useState(defaultContactFormData);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(user);

    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("message not sent");
      console.log(error);
    }
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
              Contact Us
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
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handleInput}
                  className="w-full px-4 py-2 bg-gray-500 border rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-amber-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter message here"
                  required
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  className="w-full px-4 py-2 bg-gray-500 border rounded-lg 
               focus:ring-1 focus:ring-amber-500 focus:border-amber-500 focus:outline-none 
               h-32 sm:h-40 md:h-48 lg:h-56 resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

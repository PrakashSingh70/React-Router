import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      telephone: "",
    });
  };

  return (
    <div className="mx-auto w-60 p-4">
      <form
        className="p-6 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label for="name" className="hidden">
            Full Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label for="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label for="telephone" className="hidden">
            Number
          </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            placeholder="Telephone Number"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

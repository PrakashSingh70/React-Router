import React, { useState } from "react";

function GetStarted() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const {email} = e.target.name
    e.preventDefault();
    if (!email) {
      alert("field require");
      return;
    }
    console.log(formData);
    setFormData({
      email: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <label for="email" className="hidden">
            password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="md:w-32 bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
        >
          Start
        </button>
      </form>
    </div>
  );
}

export default GetStarted;

'use client';
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // later we will call the backend for verifying credentials
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-950">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-700 rounded-md placeholder-gray-700"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-700 rounded-md placeholder-gray-700"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

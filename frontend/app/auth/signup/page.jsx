'use client';
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    profileImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      const file = files[0];
      setFormData({ ...formData, profileImage: file });
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.profileImage) newErrors.profileImage = "Profile image is required.";

    setErrors(newErrors);

    // If no errors, you can proceed to submit
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // You can now send the formData to backend
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-950">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-700 rounded-md placeholder-gray-700"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-700 rounded-md placeholder-gray-700"
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 p-4 border-2 border-dashed rounded-md cursor-pointer border-gray-700 text-gray-700">
              <span>Select your Profile Picture</span>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
            {errors.profileImage && <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>}
          </div>

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="w-32 h-32 object-cover mx-auto rounded-full mt-4"
            />
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}

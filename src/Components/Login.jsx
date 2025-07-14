import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // You can call your API here
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full bg-pink-700 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Welcome Back User</h1>
        <p className="text-base md:text-lg text-center">
          Manage your inventory with ease and efficiency.
        </p>
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don’t have an account? <Link to="/register" className="text-pink-500 hover:underline">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

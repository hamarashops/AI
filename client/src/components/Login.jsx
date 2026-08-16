import React, { useState } from "react";
import logo from "../assets/hamarashopslogo.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../services/admin";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await login(formData);
      if (response.status === 1) {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("Login successful! Welcome back.");

        // Redirect based on local user role or API response role
        if (response.data.Role === "Admin") {
          navigate("/dashboard");
        } else {
          navigate("/candidate-dashboard");
        }
      } else {
        toast.error(response.message || "Login failed");
      }
    } catch (error) {
      toast.error("Error during login. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-primary p-8 text-white text-center">
          <Link to="/" className="inline-block mb-4">
            <img src={logo} alt="Logo" className="h-10 mx-auto" />
          </Link>
          <h2 className="text-2xl font-display font-black">Welcome Back</h2>
          <p className="text-white/70 text-sm mt-2">
            Login to your HamaraShops.ai account
          </p>
        </div>

        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-widest">
              Password
            </label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleInputChange}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-accent focus:ring-accent"
              />
              <span className="ml-2 text-xs text-slate-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-xs font-bold text-accent hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-accent text-white py-3.5 rounded-lg font-bold uppercase text-sm tracking-widest shadow-lg transition-all ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-accent/90 hover:-translate-y-0.5"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Member Login"}
          </button>

          <p className="text-center text-xs text-slate-500">
            Don't have an account?{" "}
            <Link to="/" className="text-accent font-bold hover:underline">
              Create Profile
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

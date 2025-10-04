import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import Orb from "./Orb";
import { useAuthStore } from "@/store/useAuthStore";


export const Login = () => {
  const { login } = useAuthStore();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    try {
      const data = await login({ identifier, password});
      setMessage("Login successful!");
      setError(false);

      navigate("/");
    } catch (err) {
      setMessage(err.message || "Login failed");
      setError(true);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Orb Background */}
      <div className="absolute inset-0 -z-10">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={200}
          forceHoverState={false}
        />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Welcome Back 👋
        </h2>

        {/* Notification */}
        {message && (
          <p
            className={`mb-4 text-center p-2 rounded ${
              error ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="bg-white/20 text-white placeholder:text-gray-200 border-white/30 focus-visible:ring-white"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/20 text-white placeholder:text-gray-200 border-white/30 focus-visible:ring-white"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
          >
            Login
          </Button>
        </form>

        <p className="mt-6 text-sm text-gray-200 text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-300 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};


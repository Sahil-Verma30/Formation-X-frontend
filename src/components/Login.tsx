import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Orb from "./Orb";

export const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login submitted!");
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            required
            className="bg-white/20 text-white placeholder:text-gray-200 border-white/30 focus-visible:ring-white"
          />
          <Input
            type="password"
            placeholder="Password"
            required
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

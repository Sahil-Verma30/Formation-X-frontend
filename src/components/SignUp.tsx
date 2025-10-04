import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Orb from "./Orb";

export const SignUp = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sign Up submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Orb Background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={200}
          forceHoverState={false}
        />
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Full Name"
            required
            className="bg-white/20 text-white placeholder:text-gray-200 border-white/30 focus-visible:ring-white"
          />
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
            Sign Up
          </Button>
        </form>

        <p className="mt-4 text-sm text-gray-200 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-300 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

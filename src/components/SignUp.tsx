import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Orb from "./Orb";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

export const SignUp = () => {
  // Form state
  const { signup } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();

  // Notification state
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    try {
      const data = await signup({ username, email, password });

      setMessage("Sign up successful! You are now logged in.");
      setError(false);
      console.log("User data:", data.user);
      navigate("/");
    } catch (err) {
      setMessage(err?.message || "Sign up failed");
      setError(true);
    }
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
           
            type="text"
           
            placeholder="Full Name"
           
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         
            className="bg-white/20 text-white placeholder:text-gray-200 border-white/30 focus-visible:ring-white"
          />
          <Input
           
            type="email"
           
            placeholder="Email"
           
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         
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

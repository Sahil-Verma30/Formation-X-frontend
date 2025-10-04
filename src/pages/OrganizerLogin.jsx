import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
// import bgImg from "@/assets/hackathon-bg.jpg";

const OrganizerLogin = () => {
  const { login } = useAuthStore();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login({identifier, password});
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left section */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center " >
        <div className="bg-black/50 w-full flex items-center justify-center text-center text-white ">
          <div>
            <h2 className="text-4xl font-bold mb-4">Welcome Back, Organizer!</h2>
            <p className="text-lg opacity-80">
              Manage your hackathons, connect with sponsors, and build innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex w-full md:w-1/2 items-center justify-center  py-12">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6">Organizer Login</h2>
          <form onSubmit={handleLogin} className="space-y-4 ">
            <input
              type="email"
              placeholder="Email address"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/organizer-signup" className="text-primary font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizerLogin;

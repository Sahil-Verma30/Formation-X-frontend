import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
// import bgImg from "@/assets/hackathon-bg.jpg";

const OrganizerSignup = () => {
  const { signup } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signup(username, email, password);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left section */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center" >
        <div className="bg-black/50 w-full flex items-center justify-center text-center text-white px-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Join the Hackathon Revolution</h2>
            <p className="text-lg opacity-80">
              Create, host, and manage hackathons effortlessly. Bring your ideas to life!
            </p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-8 py-12">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6">Organizer Sign Up</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <input
              type="password"
              placeholder="Create Password"
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
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/organizer-login" className="text-primary font-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizerSignup;

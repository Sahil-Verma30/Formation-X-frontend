import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B032D] pt-24 via-[#1E0A47] to-[#2B1055] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text"
        >
          About Formation X
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg mb-16"
        >
          Formation X is a next-generation hackathon ecosystem that empowers innovators, creators, and developers to turn ideas into reality. We connect brilliant minds with inspiring spaces, sponsors, and tools to accelerate the journey from concept to creation.
        </motion.p>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              To revolutionize how hackathons are organized and experienced — enabling seamless collaboration between creators, organizers, and sponsors worldwide.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text">
              Our Vision
            </h2>
            <p className="text-gray-400 leading-relaxed">
              To become the global hub for innovation — where every brilliant idea finds the right platform, mentorship, and community to thrive.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text">
              Our Community
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We unite 50,000+ innovators, 500+ active hackathons, and 200+ sponsors who share the passion to build, collaborate, and grow together.
            </p>
          </motion.div>
        </div>

        {/* Platform Values */}
        <div className="mt-20 text-left">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text">
            What Makes Formation X Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
              <p className="text-gray-400">
                Our platform enables developers, designers, and entrepreneurs to work together in real time — connecting teams across continents effortlessly.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-400">
                We use intelligent algorithms to match participants with the right events, mentors, and sponsors — maximizing impact and opportunity.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Comprehensive Dashboard</h3>
              <p className="text-gray-400">
                Track progress, manage teams, and access resources all in one place with our intuitive, AI-powered hackathon management dashboard.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-400">
                Formation X bridges boundaries, connecting innovators from more than 30 countries and enabling cross-cultural innovation on a global scale.
              </p>
            </motion.div>
          </div>
        </div>

        {/* New Impact Section */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text">
            The Impact We're Creating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#8E2DE2]">500+</h3>
              <p className="text-gray-300">Active Hackathons Hosted</p>
              <p className="text-gray-500 mt-2 text-sm">Empowering participants to launch groundbreaking solutions every month.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#8E2DE2]">50K+</h3>
              <p className="text-gray-300">Innovators Engaged</p>
              <p className="text-gray-500 mt-2 text-sm">From students to professionals, we’re nurturing a global innovation network.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#8E2DE2]">200+</h3>
              <p className="text-gray-300">Partner Sponsors</p>
              <p className="text-gray-500 mt-2 text-sm">Top organizations supporting creativity, technology, and entrepreneurship.</p>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-2xl py-12 px-8 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Join the Next Wave of Innovation</h2>
          <p className="text-gray-100 mb-6 max-w-xl mx-auto">
            Be part of a thriving ecosystem that powers creativity and collaboration. Let’s build the future, one hackathon at a time.
          </p>
          <a href="/SignUp" className="px-8 py-3 bg-white text-[#4A00E0] rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started 
          </a>
        </motion.div>
      </div>
    </div>
  );
}

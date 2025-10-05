import React, { useState } from "react";

const SponsorPage: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleClick = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  return (
    <div className="bg-black min-h-screen text-white px-6 py-24"> {/* Top padding */}
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl font-bold">
          Connect with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">
            Top Sponsors
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Formation X bridges the gap between innovative ideas and funding
          opportunities
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Organizer */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#111122] border border-gray-800 rounded-xl p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sky-400 text-xl">✨</span>
            <h2 className="text-xl font-bold">For Organizers</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Access our curated network of sponsors. Pitch your event directly
            through our platform and secure funding faster.
          </p>
          <ul className="text-sky-300 space-y-2 mb-6">
            <li>• Direct messaging with sponsors</li>
            <li>• Automated pitch deck sharing</li>
            <li>• Real-time funding updates</li>
          </ul>
          <button
            onClick={handleClick} // <-- Popup triggered here
            className="w-full border border-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition"
          >
            Start Pitching →
          </button>
        </div>

        {/* Sponsor */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#111122] border border-gray-800 rounded-xl p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-violet-400 text-xl">✨</span>
            <h2 className="text-xl font-bold">For Sponsors</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Discover high-quality hackathons aligned with your brand values.
            Support innovation and gain visibility.
          </p>
          <ul className="text-purple-300 space-y-2 mb-6">
            <li>• Curated event recommendations</li>
            <li>• Direct organizer communication</li>
            <li>• Impact analytics dashboard</li>
          </ul>
          <button
            onClick={handleClick} // <-- Popup triggered here too
            className="w-full border border-violet-500 text-white py-2 rounded-md hover:bg-violet-600 transition"
          >
            Become a Sponsor →
          </button>
        </div>
      </div>

      {/* Extra Section */}
      <div className="max-w-5xl mx-auto mt-20 bg-[#161625] rounded-xl p-10 border border-gray-800">
        <h3 className="text-2xl font-semibold text-sky-400 mb-4">
          🌟 Benefits of Sponsorship
        </h3>
        <p className="text-gray-300 leading-relaxed">
          When you sponsor through Formation X, you gain more than just exposure —
          you invest in innovation. Our platform provides detailed analytics on
          your impact, brand visibility among thousands of developers, and
          targeted access to communities aligned with your mission.
          <br />
          <br />
          With our transparent dashboard, you'll always know how your support is
          making a difference. Be the driving force behind the next breakthrough
          idea.
        </p>
      </div>

      {/* Coming Soon Popup */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111122] p-8 rounded-xl border border-gray-700 text-center max-w-sm mx-4">
            <h2 className="text-2xl font-bold mb-4">🚧 Coming Soon!</h2>
            <p className="text-gray-300 mb-6">
              This feature is under development. Stay tuned for updates!
            </p>
            <button
              onClick={closePopup}
              className="px-6 py-2 rounded-md bg-sky-500 hover:bg-sky-600 transition text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorPage;

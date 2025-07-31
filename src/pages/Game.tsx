import { motion } from "framer-motion";

export const Game = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row h-full gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Game View */}
      <div className="flex-1 bg-gray-800 border border-gray-700 rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-2">📍 Game World</h2>
        <div className="h-[400px] bg-gray-900 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">[Game viewport goes here]</span>
        </div>
      </div>

      {/* HUD / Sidebar */}
      <div className="w-full lg:w-80 bg-gray-900 border border-gray-700 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-2">🧠 Player Info</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>🎓 Skills: React, TypeScript, C#</li>
          <li>📦 Projects: 6 unlocked</li>
          <li>🎯 Goals: ML + GameDev</li>
          <li>📄 Resume: [link or button]</li>
        </ul>
      </div>
    </motion.div>
  );
};

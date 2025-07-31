// src/pages/MainMenu.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col gap-4 items-center justify-center h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6">🎮 Arcade Portfolio</h1>
      <button onClick={() => navigate("/game")} className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg">
        Start Game
      </button>
      <button onClick={() => navigate("/about")} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
        About
      </button>
      <button onClick={() => navigate("/resume")} className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg">
        Continue
      </button>
      <button onClick={() => navigate("/credits")} className="px-6 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg">
        Credits
      </button>
    </motion.div>
  );
};

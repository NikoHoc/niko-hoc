import { motion } from 'framer-motion';
import icon from '../assets/nikohoc-icon.png';

export default function SplashScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  return (
    <motion.div
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white"
    >
      <motion.img
        src={icon}
        alt="NikoHoc Icon"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-28 h-28 mb-6 rounded-full shadow-lg shadow-blue-500/30"
      />
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold tracking-widest mb-8"
      >
        NikoHoc
      </motion.h1>

      <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          onAnimationComplete={onLoadingComplete}
        />
      </div>
    </motion.div>
  );
}
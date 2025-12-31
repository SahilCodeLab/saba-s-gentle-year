import { motion } from "framer-motion";
import CandleFlame from "../components/CandleFlame";
import TypewriterText from "../components/TypewriterText";
import ChapterButton from "../components/ChapterButton";

interface EntranceStepProps {
  onNext: () => void;
}

const EntranceStep = ({ onNext }: EntranceStepProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient glow behind candle */}
      <motion.div
        className="absolute"
        style={{
          width: 300,
          height: 300,
          background: `radial-gradient(ellipse at center, hsl(var(--candle-glow) / 0.2), transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Candle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-12"
      >
        <CandleFlame size="lg" />
      </motion.div>

      {/* Typewriter text */}
      <motion.h1
        className="font-display text-3xl md:text-5xl text-center text-foreground mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <TypewriterText 
          text="Saba, Happy New Year 2026" 
          speed={100}
          delay={1500}
        />
      </motion.h1>

      {/* Begin button */}
      <ChapterButton onClick={onNext} delay={4}>
        Begin
      </ChapterButton>
    </motion.div>
  );
};

export default EntranceStep;

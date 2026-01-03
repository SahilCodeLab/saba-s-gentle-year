import { motion } from "framer-motion";
import CandleFlame from "../components/CandleFlame";
import TypewriterText from "../components/TypewriterText";
import ChapterButton from "../components/ChapterButton";
import LotusFlower from "../components/LotusFlower";
import FallingPetals from "../components/FallingPetals"; // <-- Import kiya

interface EntranceStepProps {
  onNext: () => void;
}

const EntranceStep = ({ onNext }: EntranceStepProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      
      {/* 1. Falling Petals Animation (New) */}
      <FallingPetals />

      {/* 2. Ambient Glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: `radial-gradient(circle at center, hsl(var(--candle-glow) / 0.12), transparent 70%)`,
          filter: "blur(90px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-xl mt-8">
        
        {/* TEXT SECTION */}
        <motion.div
          className="text-center z-20 mb-[-50px]" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h1 className="font-display text-3xl md:text-5xl text-[#d4af37] drop-shadow-md mb-6 tracking-wide">
            <TypewriterText text="10 January 2025" speed={80} delay={500} />
          </h1>

          <div className="space-y-2 relative">
            <p className="font-display text-xl md:text-2xl text-foreground/95 drop-shadow-lg" 
               style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                Today marks one beautiful year of us, ,{" "}
                <span className="text-[#d4af37] font-bold italic">Saba.</span>
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground/90 italic" 
               style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                A year since we met,
a year of conversations —
maybe there wasn’t a day we didn’t talk.
            </p>
          </div>
        </motion.div>

        {/* CANDLES & LOTUS SECTION */}
        <div className="flex items-end justify-center gap-4 md:gap-10 w-full px-2 mt-6">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="pb-4"
          >
            <CandleFlame size="lg" />
          </motion.div>

          <motion.div
            className="z-10 mb-[-25px] scale-110 origin-bottom"
            initial={{ opacity: 0, scale: 0, y: 30 }}
            animate={{ opacity: 1, scale: 1.1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, type: "spring", bounce: 0.3 }}
          >
            <LotusFlower />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="pb-4"
          >
            <CandleFlame size="lg" />
          </motion.div>

        </div>

        {/* BUTTON */}
        <div className="mt-24 z-30">
          <ChapterButton onClick={onNext} delay={3.5}>
            Begin
          </ChapterButton>
        </div>

      </div>
    </motion.div>
  );
};

export default EntranceStep;
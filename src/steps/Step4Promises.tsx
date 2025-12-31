import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";
import PromiseCard from "../components/PromiseCard";
import FloatingCandles from "../components/FloatingCandles";

interface Step4Props {
  onNext: () => void;
}

const Step4Promises = ({ onNext }: Step4Props) => {
  const promises = [
    "I will listen without judgement",
    "I will respect your boundaries",
    "I will choose kindness even in disagreement",
    "I will be honest with what I feel",
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingCandles />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          className="font-display text-3xl md:text-5xl text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Candlelight Promises
        </motion.h2>

        <motion.p
          className="font-body text-lg text-muted-foreground text-center mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Four things I promise to hold sacred
        </motion.p>

        {/* Promise cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promises.map((promise, index) => (
            <PromiseCard key={index} promise={promise} index={index} />
          ))}
        </div>

        {/* Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Ek aur cheez…
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step4Promises;

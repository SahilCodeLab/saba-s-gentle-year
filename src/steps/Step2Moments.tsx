import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";

interface Step2Props {
  onNext: () => void;
}

const Step2Moments = ({ onNext }: Step2Props) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-10">
        
        {/* Title */}
        <motion.h2
          className="font-display text-2xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Ek saal… bina plan ke, bina label ke.
        </motion.h2>

        {/* Main text block */}
        <div className="space-y-8 font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Kabhi kabhi insaan nahi,
            <br />
            uska asar yaad reh jaata hai.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            2025 mere liye khaas raha,
            <br />
            shayad isliye kyunki tum us saal mili.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            College ne subjects sikhaye honge,
            <br />
            par tumne samajhne ka tareeka sikhaya.
          </motion.p>
        </div>

        {/* Poetic break */}
        <motion.div
          className="py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-display text-xl md:text-2xl text-primary/80 italic">
            "Presence… jo dheere se
            <br />
            life ko re-arrange kar de."
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Button */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Next • Thoda aur
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step2Moments;

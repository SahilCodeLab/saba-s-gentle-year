import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";

interface Step3Props {
  onNext: () => void;
}

const Step3Letter = ({ onNext }: Step3Props) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        
        {/* Title */}
        <motion.h2
          className="font-display text-2xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Agar tum padh rahe ho… thank you, Saba.
        </motion.h2>

        {/* Main content */}
        <div className="space-y-6 font-body text-lg md:text-xl text-foreground/90 leading-relaxed text-left md:text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Main ye sab isliye nahi bol raha
            <br className="hidden md:block" />
            kyunki mujhe kuch prove karna hai.
            <br />
            Ya tumse kuch expect karna hai.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Bas isliye,
            <br />
            kyunki tumhare saath baat karna
            <br />
            kabhi bojh nahi laga.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Tumhaari baatein… break jaisi thi.
            <br />
            Aur kabhi kabhi sukoon ka
            <br />
            sirf itna hi matlab hota hai.
          </motion.p>
        </div>

        {/* Highlighted key line */}
        <motion.div
          className="py-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.4 }}
        >
          <div className="card-candle p-6 md:p-8 inline-block">
            <p className="font-display text-xl md:text-2xl text-primary">
              "Main tumhare pace pe chalne ko ready hoon.
              <br />
              Jitna tum chaho, utna hi."
            </p>
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Aage?
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step3Letter;

import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";

interface Step1Props {
  onNext: () => void;
}

const Step1Message = ({ onNext }: Step1Props) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative line */}
        <motion.div
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Main message - fades in like ink */}
        <motion.p
          className="font-display text-2xl md:text-4xl text-foreground leading-relaxed mb-8"
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          New year se pehle…
        </motion.p>

        <motion.p
          className="font-display text-xl md:text-3xl text-foreground/80 leading-relaxed italic"
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
        >
          ek baat.
        </motion.p>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground mt-10 leading-relaxed"
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        >
          Tum ho, isliye main grateful hoon.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-12 mb-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />

        <ChapterButton onClick={onNext} delay={3}>
          Next page
        </ChapterButton>
      </div>
    </motion.div>
  );
};

export default Step1Message;

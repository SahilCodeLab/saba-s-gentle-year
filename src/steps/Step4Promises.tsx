import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";
import FloatingCandles from "../components/FloatingCandles";

interface Step4Props {
  onNext: () => void;
}

const Step4Promises = ({ onNext }: Step4Props) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingCandles />

      <div className="w-full max-w-2xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Title */}
        <motion.h2
          className="font-display text-2xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Agar kabhi tumhare dil ko bhi aisa hi lage…
        </motion.h2>

        {/* Main content */}
        <div className="space-y-6 font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Ke hum dono ek hi taraf dekh rahe hain,
            <br />
            toh main intezaar nahi karunga.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Main saath chalne ko ready rahunga.
          </motion.p>

          <motion.div
            className="py-4 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <p className="text-muted-foreground">
              Jahan rukna ho… waha rukenge.
            </p>
            <p className="text-muted-foreground">
              Jahan breathe chahiye ho… waha ruk jayenge.
            </p>
            <p className="text-muted-foreground">
              Jahan pace slow ho… waha slow ho jayenge.
            </p>
          </motion.div>
        </div>

        {/* Highlighted line */}
        <motion.div
          className="py-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.4 }}
        >
          <p className="font-display text-xl md:text-2xl text-primary">
            "Tumhaari comfort,
            <br />
            mere liye compass ban sakti hai."
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Ek last baat…
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step4Promises;

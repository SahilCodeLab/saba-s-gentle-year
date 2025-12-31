import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";

interface Step3Props {
  onNext: () => void;
}

const Step3Letter = ({ onNext }: Step3Props) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Letter container */}
        <motion.div
          className="card-candle p-8 md:p-12"
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Decorative corner */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40" />

          {/* Title */}
          <motion.h2
            className="font-display text-2xl md:text-3xl text-center text-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Dil Se
          </motion.h2>

          {/* Letter content */}
          <div className="space-y-6 font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Tumse baat karna kabhi farz nahi lagta. Aisa lagta hai jaise din ne saans li.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Tumhari simplicity mein ek peace hai jo rare hai. Jo log chaahte hain kisi mein dhundhte hain, wo tumhare paas khud se hai.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              Main nahi jaanta sab kuch kahan jaayega. But I know one thing — tumhare saath wala waqt genuine lagta hai.
            </motion.p>

            <motion.p
              className="italic text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              Aur yahi kaafi hai.
            </motion.p>
          </div>

          {/* Signature */}
          <motion.div
            className="mt-10 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <span className="font-signature text-3xl text-primary">— Sahil</span>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Continue
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step3Letter;

import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";

interface Step1Props {
  onNext: () => void;
}

const Step1Message = ({ onNext }: Step1Props) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        
        {/* Section Title */}
        <motion.h2
          className="font-display text-2xl md:text-4xl text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Jahan sab shuru hua…
        </motion.h2>

        {/* Chat Bubbles Container */}
        <div className="space-y-6 max-w-lg mx-auto">
          {/* Left bubble - Saba */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-xs text-muted-foreground mb-1 ml-2">
              10 January 2025 • 3:06 PM
            </span>
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl rounded-bl-sm px-5 py-3 max-w-[85%] shadow-soft">
              <p className="font-body text-foreground text-left">
                Ap editing sikhate ho kya
              </p>
            </div>
          </motion.div>

          {/* Right bubble - Sahil 1 */}
          <motion.div
            className="flex flex-col items-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <span className="text-xs text-muted-foreground mb-1 mr-2">
              3:49 PM
            </span>
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl rounded-br-sm px-5 py-3 max-w-[85%] shadow-soft">
              <p className="font-body text-foreground text-right">
                Hello… sorry, thoda late ho gaya.
              </p>
            </div>
          </motion.div>

          {/* Right bubble - Sahil 2 */}
          <motion.div
            className="flex flex-col items-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <span className="text-xs text-muted-foreground mb-1 mr-2">
              3:52 PM
            </span>
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl rounded-br-sm px-5 py-3 max-w-[85%] shadow-soft">
              <p className="font-body text-foreground text-right">
                Jii
              </p>
            </div>
          </motion.div>

          {/* Right bubble - Sahil 3 */}
          <motion.div
            className="flex flex-col items-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <span className="text-xs text-muted-foreground mb-1 mr-2">
              3:54 PM
            </span>
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl rounded-br-sm px-5 py-3 max-w-[85%] shadow-soft">
              <p className="font-body text-foreground text-right">
                Web designing etc…..
              </p>
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.p
          className="font-body text-lg text-muted-foreground italic mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          "Kabhi kabhi ek message, ek year ka direction badal deta hai."
        </motion.p>

        {/* Button */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Aage chalein?
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step1Message;

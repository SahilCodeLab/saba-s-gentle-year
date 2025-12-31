import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";

interface Step1Props {
  onNext: () => void;
}

const Step1Message = ({ onNext }: Step1Props) => {
  // Animation helper
  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 20, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay: delay, ease: "easeOut" }
  });

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Scrollable container for smaller screens */}
      <div className="w-full max-w-xl mx-auto text-center space-y-8 overflow-y-auto max-h-[85vh] no-scrollbar py-4">
        
        {/* Decorative line */}
        <motion.div
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto sticky top-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Para 1: Intro */}
        <motion.div {...fadeIn(0.5)}>
          <p className="font-display text-2xl md:text-3xl text-foreground mb-2">
            Saal badal raha hai...
          </p>
          <p className="font-body text-lg text-muted-foreground italic">
            par kuch cheezein apna asar chod jaati hain.
          </p>
        </motion.div>

        {/* Para 2: Connection */}
        <motion.p 
          className="font-body text-lg text-foreground/90 leading-relaxed"
          {...fadeIn(1.5)}
        >
          Hamaare beech jo halka sa connection bana,
          <br />shayad wohhi unme se ek hai, Saba.
        </motion.p>

        {/* Para 3: 2025 Reflection */}
        <motion.div 
          className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed"
          {...fadeIn(2.5)}
        >
          <p>
            2025 mere liye bohot khaas raha, shayad isliye kyunki us saal tum mili.
          </p>
          <p>
            College ne subjects sikhaye honge, par tumne samajhne ka tareeka sikhaya.
          </p>
        </motion.div>

        {/* Para 4: Growth */}
        <motion.div 
          className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed"
          {...fadeIn(3.5)}
        >
          <p>
            Tumhare aane ke baad bohot kuch badla... khud ko dekha, socha, grow kiya.
          </p>
          <p>
            Jab main thaka hua feel karta tha, tumhari baat ek chhota sa break jaisi lagti thi.
          </p>
        </motion.div>

        {/* Para 5: Gratitude */}
        <motion.div 
          className="font-body text-lg text-foreground/90 leading-relaxed pb-4"
          {...fadeIn(4.5)}
        >
          <p className="mb-4">
            Ye sab bhoolne ka nahi, bas apne pace se sambhal kar rakhne jaisa hai.
          </p>
          <p className="font-display text-xl text-primary">
            Thank you, Saba,
          </p>
          <p className="text-muted-foreground italic">
            itna saath dene ke liye... jitna tumne diya.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          className="pt-4 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Aage...
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step1Message;

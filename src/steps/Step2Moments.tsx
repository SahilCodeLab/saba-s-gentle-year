import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";

interface Step2Props {
  onNext: () => void;
}

const Step2Moments = ({ onNext }: Step2Props) => {
  // Yahan aap wo baatein likh sakte hain jo aapko unke baare mein pasand hain
  const moments = [
    { text: "Tumhari awaaz sunkar mera din ban jaata hai.", delay: 0.2 },
    { text: "Jis tarah tum meri faaltu baatein bhi dhyan se sunti ho.", delay: 0.4 },
    { text: "Tumhara gussa, jo thodi der mein hi pighal jaata hai.", delay: 0.6 },
    { text: "Tumhari wo hasi jo mere dil ko sukoon deti hai.", delay: 0.8 },
    { text: "Bas tumhara hona hi mere liye kaafi hai.", delay: 1.0 },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="font-display text-3xl md:text-5xl text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tumhari Kuch Baatein...
        </motion.h2>

        <motion.p
          className="font-body text-lg text-muted-foreground mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Jo shabdon mein bayan nahi hoti, par mehsoos hoti hain.
        </motion.p>

        {/* Floating Text Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {moments.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm shadow-sm ${
                index === moments.length - 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: item.delay + 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--primary), 0.05)" }}
            >
              <p className="font-display text-xl text-foreground/90 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Aage chalo...
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step2Moments;

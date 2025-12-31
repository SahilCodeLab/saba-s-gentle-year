import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";
import SoftConfetti from "../components/SoftConfetti";

interface Step5Props {
  onNext: () => void;
}

const Step5Wish = ({ onNext }: Step5Props) => {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hey Sahil... ✨");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const wishWords = [
    "Peace.",
    "Clarity.",
    "Affection.",
    "Healing.",
    "Sukoon.",
    "Unrush.",
    "Jo tum deserve karti ho."
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SoftConfetti />

      <div className="w-full max-w-2xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Title */}
        <motion.h2
          className="font-display text-2xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Mera 2026 ka wish, Saba ke liye
        </motion.h2>

        {/* Animated wish words */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 py-6">
          {wishWords.map((word, index) => (
            <motion.span
              key={index}
              className={`font-display text-xl md:text-2xl ${
                index === wishWords.length - 1 
                  ? "text-primary w-full mt-4" 
                  : "text-foreground/80"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + (index * 0.3),
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Main text */}
        <motion.div
          className="space-y-4 font-body text-lg md:text-xl text-foreground/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <p>
            2026 tumhare liye gentle rahe.
          </p>
          <p className="text-muted-foreground">
            Aur agar kabhi zindagi allow kare…
            <br />
            toh hum dono ek nayi line likh sakte hain.
          </p>
        </motion.div>

        {/* Subtext - no pressure */}
        <motion.div
          className="py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.5 }}
        >
          <p className="font-body text-base text-muted-foreground/70 italic">
            Not as pressure.
            <br />
            Not as promise.
            <br />
            But as possibility.
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          className="py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.2 }}
        >
          <span className="font-signature text-4xl md:text-5xl text-primary neon-signature">
            — Sahil
          </span>
        </motion.div>

        {/* Small note */}
        <motion.p
          className="font-body text-sm text-muted-foreground/60 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.8 }}
        >
          itna hi… jitna tum chaaho
        </motion.p>

        {/* Reply button */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.5, duration: 0.8 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-chapter inline-block"
          >
            Reply?
          </a>
        </motion.div>

        {/* Continue to outro */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7 }}
        >
          <button
            onClick={onNext}
            className="font-display text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            or continue...
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step5Wish;

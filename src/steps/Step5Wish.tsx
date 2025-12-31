import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";
import SoftConfetti from "../components/SoftConfetti";

interface Step5Props {
  onNext: () => void;
}

const Step5Wish = ({ onNext }: Step5Props) => {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hey Sahil... Happy New Year 2026 to you too 💫");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SoftConfetti />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Main wish */}
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          2026 tumhare liye gentle ho.
        </motion.h2>

        <motion.p
          className="font-display text-xl md:text-2xl text-foreground/80 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Tum jahan bhi rahogi, khush raho.
        </motion.p>

        {/* Subtext */}
        <motion.div
          className="max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Agar kabhi tum chaho, to hum is saal ki story ek team ki tarah likh sakte hain.
          </p>
          <p className="font-body text-base text-muted-foreground/70 mt-2 italic">
            Bas ek option hai… pressure nahi.
          </p>
        </motion.div>

        {/* Reply button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
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
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <button
            onClick={onNext}
            className="font-display text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            or continue reading...
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step5Wish;

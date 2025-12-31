import { motion } from "framer-motion";
import ChapterButton from "../components/ChapterButton";
import PhotoGallery from "../components/PhotoGallery";

interface Step2Props {
  onNext: () => void;
}

const Step2Moments = ({ onNext }: Step2Props) => {
  const photos = [
    { id: 1, src: "", caption: "Ek pal jo dil mein reh gaya..." },
    { id: 2, src: "", caption: "Tumhari hasi ke liye..." },
    { id: 3, src: "", caption: "Yaad hai ye din?" },
    { id: 4, src: "", caption: "Kuch baatein kabhi nahi bhoolte..." },
    { id: 5, src: "", caption: "Tum, bas tum." },
    { id: 6, src: "", caption: "Is pal ko jeena tha..." },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="font-display text-3xl md:text-5xl text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Moments
        </motion.h2>

        <motion.p
          className="font-body text-lg text-muted-foreground text-center mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Click to open each memory
        </motion.p>

        {/* Photo Gallery */}
        <PhotoGallery photos={photos} />

        {/* Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ChapterButton onClick={onNext} delay={0}>
            Chalo aage…
          </ChapterButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step2Moments;

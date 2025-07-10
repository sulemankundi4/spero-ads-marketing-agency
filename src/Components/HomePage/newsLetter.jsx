import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Newsletter() {
  return (
    <section className="relative w-full text-black py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#39FF14]/10 via-white/5 to-white/0" />
      <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants}>
        <motion.h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" variants={childVariants}>
          Stay in the loop.
        </motion.h2>
        <motion.p className="text-black text-base sm:text-lg mb-8" variants={childVariants}>
          Join our newsletter and never miss the latest drops, marketing hacks, or brand wins.
        </motion.p>
        <motion.form variants={childVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input type="email" placeholder="Enter your email" className="w-full sm:w-auto px-4 py-3 rounded-xl  border border-black/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#39FF14]/60" />
          <button type="submit" className="px-6 py-3 rounded-xl bg-[#39FF14] text-black font-semibold hover:scale-105 transition-transform">
            Subscribe
          </button>
        </motion.form>
      </motion.div>
      <motion.div className="absolute w-40 h-40 bg-[#39FF14]/10 rounded-full blur-3xl -top-10 -right-10" animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 6, repeat: Infinity }} />
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} viewport={{ once: true }} className="bg-black/80 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left section - logo & description */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#39FF14] mb-4">Spero Ads</h2>
          <p className="text-white/80 text-base leading-relaxed max-w-md">Spero Ads is a full-service marketing agency dedicated to helping grow business through smart strategy and creative solutions that drive real, lasting results.</p>
        </div>

        {/* Right section - Links */}
        <div className="flex flex-col sm:flex-row gap-10 flex-1 justify-end">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/10 text-sm text-center text-white/50 py-6 px-4">© {new Date().getFullYear()} Spero Ads. All rights reserved.</div>
    </motion.footer>
  );
};

export default Footer;

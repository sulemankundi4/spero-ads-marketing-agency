// import React from "react";
// import { motion } from "framer-motion";
// import { MovingImages } from "../Components/HomePage/movingImages";
// import ad1 from "../assets/Images/ad1.jpeg";
// import ad2 from "../assets/Images/ad2.jpg";
// import ad3 from "../assets/Images/ad3.jpg";
// import ad4 from "../assets/Images/ad4.jpg";
// import ad5 from "../assets/Images/ad5.jpeg";
// import { PointerHighlight } from "../Components/HomePage/pointerHighlight";
// import Navbar from "../Components/Shared/Navbar";
// import { Spotlight } from "../Components/Shared/spotLight";
// import { SpotlightMain } from "../Components/Shared/spotLightMain";
// import { NavbarDemo } from "./Navbar";

// const images = [
//   { src: ad1, alt: "Image 1" },
//   { src: ad2, alt: "Image 2" },
//   { src: ad3, alt: "Image 3" },
//   { src: ad4, alt: "Image 4" },
//   { src: ad5, alt: "Image 5" },
// ];

// const wordVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.5,
//     rotateX: 90,
//   },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotateX: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 1,
//       type: "spring",
//       stiffness: 80,
//       damping: 20,
//     },
//   }),
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.5,
//     },
//   },
// };

// const HomePage = () => {
//   const headingWords = ["ENGAGE", "ELEVATE", "DOMINATE"];

//   return (
//     <>
//       {/* <NavbarDemo />

//       <div className="relative w-full h-screen overflow-hidden bg-black">
//         <div className="absolute inset-0 z-0">
//           <MovingImages items={images} direction="right" speed="slow" />
//           <MovingImages items={images} direction="left" speed="normal" />
//         </div>

//         <div className="absolute inset-0 z-10 bg-black/90 pointer-events-none" />

//         <Spotlight />
//         <SpotlightMain className="-top-40 z-50 left-0 md:-top-20 md:left-60" fill="white" />

//         <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
//           <div className="text-center max-w-4xl">
//             <motion.h1 className="flex flex-wrap justify-center gap-3 text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60" variants={containerVariants} initial="hidden" animate="visible">
//               {headingWords.map((word, i) => (
//                 <motion.span key={word} className="inline-block" custom={i} variants={wordVariants}>
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.h1>

//             <PointerHighlight rectangleClassName="rounded-lg" pointerClassName="text-[#48FF50]">
//               <motion.p className="mt-6 relative z-10 text-lg text-white/90 font-medium leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.8, type: "spring" }}>
//                 No matter the industry, the ultimate aim is clear: to be seen and to thrive. At Spero Ads, we turn that vision into reality. By blending sharp strategy, bold creative thinking, and seamless implementation, we help businesses rise above the noise and take the lead in their market.
//               </motion.p>
//             </PointerHighlight>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default HomePage;

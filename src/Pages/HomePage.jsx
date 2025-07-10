import React, { useState } from "react";
import { motion } from "framer-motion";
import { MovingImages } from "../Components/HomePage/movingImages";
import ad1 from "../assets/Images/ad1.jpeg";
import ad2 from "../assets/Images/ad2.jpg";
import ad3 from "../assets/Images/ad3.jpg";
import ad4 from "../assets/Images/ad4.jpg";
import ad5 from "../assets/Images/ad5.jpeg";
import ad6 from "../assets/Images/ad6.jpeg";
import { PointerHighlight } from "../Components/HomePage/pointerHighlight";
import { Spotlight } from "../Components/Shared/spotLight";
import { SpotlightMain } from "../Components/Shared/spotLightMain";
import { NavbarDemo } from "./Navbar";
import { CardBody, CardContainer, CardItem } from "../Components/HomePage/productCards";
import { useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { PiXCircleDuotone } from "react-icons/pi";
import { ThreeDMarquee } from "../Components/HomePage/marquee";
import Newsletter from "../Components/HomePage/newsLetter";
import Footer from "../Components/Shared/Footer";

const images = [
  { src: ad1, alt: "Image 1" },
  { src: ad2, alt: "Image 2" },
  { src: ad3, alt: "Image 3" },
  { src: ad4, alt: "Image 4" },
  { src: ad5, alt: "Image 5" },
];

// Array of card data for the 6 cards
const cardsData = [
  { id: 1, image: ad1, alt: "Advertisement 1" },
  { id: 2, image: ad2, alt: "Advertisement 2" },
  { id: 3, image: ad3, alt: "Advertisement 3" },
  { id: 4, image: ad4, alt: "Advertisement 4" },
  { id: 5, image: ad5, alt: "Advertisement 5" },
  { id: 6, image: ad6, alt: "Advertisement 6" },
];

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1], // smooth easeOut
    },
  },
};

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Amimation configs on become impossible to ignore
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({ threshold: 0.4, triggerOnce: true });

  useEffect(() => {
    if (headingInView) {
      headingControls.start("visible");
    }
  }, [headingInView, headingControls]);

  // Amimation configs on paragraph become impossible to ignore
  const paragraphControls = useAnimation();
  const [paraRef, paraInView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (paraInView) {
      paragraphControls.start("visible");
    }
  }, [paraInView, paragraphControls]);

  // AD detail model animation settings
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 22 },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 100,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // 3d marquess states and stuff

  // Dynamically import image URLs using Vite's glob import
  const imageModules = import.meta.glob("/src/assets/Images/*.{jpg,jpeg}", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const marqueeImages = Object.values(imageModules);

  console.log("Loaded images:", marqueeImages);

  // const marqueeImages = ["src/assets/Images/ad1.jpeg", "/src/assets/Images/ad2.jpg", "/src/assets/Images/ad3.jpg", "/src/assets/Images/ad4.jpg", "/src/assets/Images/ad5.jpeg", "/src/assets/Images/ad6.jpeg", "/src/assets/Images/ad1.jpeg", "/src/assets/Images/ad2.jpg"];
  return (
    <>
      <NavbarDemo />
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <div className="absolute mt-16 inset-0 z-0">
          <MovingImages items={images} direction="right" speed="slow" />
          <MovingImages items={images} direction="left" speed="normal" />
        </div>

        <div className="absolute inset-0 z-10 bg-black/90 pointer-events-none" />

        <Spotlight />
        <SpotlightMain className="-top-40 z-50 left-0 md:-top-20 md:left-60" fill="white" />

        <div className="absolute inset-0 z-20 flex mt-30 items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <motion.h1
              className="relative flex flex-wrap justify-center text-center text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] via-white/90 to-white/40"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {["ENGAGE", "ELEVATE", "DOMINATE"].map((word, wordIndex) => (
                <span key={wordIndex} className="mx-2 flex">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      initial={{
                        opacity: 0,
                        y: 60,
                        rotateX: 120,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                      }}
                      transition={{
                        delay: wordIndex * 0.4 + charIndex * 0.05,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <PointerHighlight rectangleClassName="rounded-lg" pointerClassName="text-[#48FF50]">
              <motion.p className="mt-6 relative z-10 text-lg text-white/90 font-medium leading-relaxed">No matter the industry, the ultimate aim is clear: to be seen and to thrive. At Spero Ads, we turn that vision into reality. By blending sharp strategy, bold creative thinking, and seamless implementation, we help businesses rise above the noise and take the lead in their market.</motion.p>
            </PointerHighlight>
          </div>
        </div>
      </div>

      {/* Cards sections */}

      {/* Show 2 cards per row */}
      <div className="px-8 py-16 overflow-hidden">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={cardContainerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardsData.map((card) => (
            <motion.div key={card.id} variants={cardVariants} onClick={() => setSelectedCard(card)} className="cursor-pointer">
              {" "}
              <CardContainer className="inter-var w-full">
                <CardBody className="relative group/card dark:hover:shadow-emerald-500/[0.1] w-full rounded-xl">
                  <CardItem translateX="0" translateZ="25" className="w-full">
                    <img src={card.image} className="w-full object-cover rounded-xl group-hover/card:shadow-xl" alt={card.alt} />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div key="backdrop" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md" variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={() => setSelectedCard(null)}>
            <motion.div key="modal" className="relative w-auto max-w-[95vw] max-h-[95vh] overflow-hidden" variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
              {/* Image */}
              <div className="relative">
                <img src={selectedCard.image} alt={selectedCard.alt} className="w-full h-auto max-h-[95vh] object-contain rounded-xl" />

                {/* Close Button on Image */}
                <button className="absolute cursor-pointer top-4 right-4 z-10 text-white bg-black/60 hover:bg-black/90 p-2 rounded-full transition-all" onClick={() => setSelectedCard(null)} aria-label="Close">
                  <PiXCircleDuotone className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D marquee with background images */}

      <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden">
        <motion.h2
          ref={headingRef}
          className="relative z-20 mx-auto max-w-5xl text-center text-2xl font-bold text-balance text-white md:text-5xl lg:text-7xl"
          initial="hidden"
          animate={headingControls}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {["Become", "Impossible", "To", "Ignore"].map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mx-2 ${word === "Ignore" ? "relative z-20 rounded-xl bg-[#39FF14] px-4 py-1 text-white underline decoration-[#39FF14] decoration-[6px] underline-offset-[16px] backdrop-blur-sm" : ""}`}
              variants={{
                hidden: { scale: 0.7, opacity: 0, y: 40 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          ref={paraRef}
          className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base"
          initial="hidden"
          animate={paragraphControls}
          variants={{
            hidden: { opacity: 0, scale: 0.85, y: 40 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              },
            },
          }}
        >
          For years, our proven approach has turned bold ideas into measurable results—and it’s ready to do the same for you. We don’t just market; we create momentum that drives real growth where it matters most.
        </motion.p>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full dark:bg-black/80" />
        <ThreeDMarquee className="pointer-events-none absolute inset-0 h-full w-full" images={marqueeImages} />
      </div>

      {/* NEWS letter section  */}
      <Newsletter />
      {/* Footer section */}
      <Footer />
    </>
  );
};

export default HomePage;

import { cn } from "../Utils/utils";
import React, { useEffect, useState } from "react";

export const MovingImages = ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div ref={containerRef} className={cn("scroller relative z-20 w-full overflow-hidden", className)}>
      <ul ref={scrollerRef} className={cn("flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4", start && "animate-scroll", pauseOnHover && "hover:[animation-play-state:paused]")}>
        {items.map((item, idx) => (
          <li className="relative w-[250px] md:w-[250px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-2 py-2 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]" key={idx}>
            <div className="w-full h-[200px]">
              <img src={item.src} alt={item.alt || "Image"} className="w-full h-full object-contain rounded-md" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

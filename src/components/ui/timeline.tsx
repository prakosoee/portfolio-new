"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  heading?: string;
  subheading?: string;
  eyebrow?: string;
}

export const Timeline = ({
  data,
  eyebrow = "Pengalaman Rekayasa",
  heading = "Pengalaman Kerja & Rekayasa",
  subheading = "Jejak rekayasa sistem, kepemimpinan teknis arsitektur basis data, dan perancangan pipeline machine learning.",
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="timeline-section-root w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
      id="experience"
    >
      <div className="timeline-container-inner max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-8 lg:px-10">
        <div className="timeline-header-block">
          {eyebrow && <span className="timeline-chip">{eyebrow}</span>}
          <h2 className="timeline-main-heading text-2xl md:text-4xl mb-4 font-bold text-neutral-900 dark:text-white max-w-4xl tracking-tight">
            {heading}
          </h2>
          <p className="timeline-main-subheading text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed">
            {subheading}
          </p>
        </div>

        <div ref={ref} className="timeline-track-wrap relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="timeline-entry-row flex justify-start pt-10 md:pt-32 md:gap-10"
            >
              <div className="timeline-sticky-anchor sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="timeline-dot-outer h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-sm">
                  <div className="timeline-dot-inner h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="timeline-year-text-desktop hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-400 font-mono">
                  {item.title}
                </h3>
              </div>

              <div className="timeline-content-panel relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="timeline-year-text-mobile md:hidden block text-xl mb-4 text-left font-bold text-neutral-600 dark:text-neutral-300 font-mono">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}

          <div
            style={{
              height: height + "px",
            }}
            className="timeline-vertical-rail absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="timeline-vertical-beam absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-indigo-500 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_12px_rgba(37,99,235,0.8)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

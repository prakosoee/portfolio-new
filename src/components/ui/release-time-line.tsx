"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { defaultEntries } from "@/data/release-timeline-entries";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
  title = "Pengalaman Kerja & Rekayasa",
  description = "Rekam jejak rekayasa sistem, arsitektur basis data relasional, dan perancangan pipeline machine learning.",
  entries = defaultEntries,
  className = "",
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };

  useEffect(() => {
    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight * 0.38;
      let bestIndex = 0;
      let bestDist = Infinity;

      itemRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const cardPoint = rect.top + Math.min(rect.height * 0.25, 120);
        const dist = Math.abs(cardPoint - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={`rt-section ${className}`}>
      <div className="rt-container">
        <div className="rt-header">
          <h2 className="rt-title">{title}</h2>
          <p className="rt-description">{description}</p>
        </div>

        <div className="rt-entries-list">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="rt-row"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="rt-meta-col">
                  <div className={`rt-icon-wrap ${isActive ? "active" : ""}`}>
                    <entry.icon className="w-5 h-5" />
                  </div>
                  <div className="rt-meta-text">
                    <span className="rt-meta-title">{entry.title}</span>
                    <span className="rt-meta-subtitle">{entry.subtitle}</span>
                  </div>
                </div>

                {/* Content column */}
                <article
                  className={`rt-card ${isActive ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(index);
                    }
                  }}
                  role="region"
                  aria-label={entry.title}
                >
                  {entry.image && (
                    <img
                      src={entry.image}
                      alt={`${entry.title} visual`}
                      className="rt-card-img"
                      loading="lazy"
                    />
                  )}
                  <div className="rt-card-content">
                    <div className="rt-card-header">
                      <h3 className="rt-card-title">{entry.title}</h3>
                      <p className="rt-card-desc">{entry.description}</p>
                    </div>

                    {/* Smooth expanding content */}
                    <div
                      aria-hidden={!isActive}
                      className={`rt-expandable ${isActive ? "expanded" : "collapsed"}`}
                    >
                      <div className="rt-expandable-inner">
                        <div className="rt-expandable-body">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rt-items-box">
                              <span className="rt-items-label">
                                Lingkup Rekayasa & Hasil:
                              </span>
                              <ul className="rt-items-list">
                                {entry.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="rt-item-row">
                                    <span className="rt-item-dot" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="rt-actions">
                              <a
                                href={entry.button.url}
                                className="rt-btn"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {entry.button.text}
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

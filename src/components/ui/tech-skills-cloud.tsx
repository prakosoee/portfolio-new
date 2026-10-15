"use client";

import React, { useState } from "react";
import { LogoCloud, type Logo } from "@/components/ui/logo-cloud-2";
import { featuredTechLogos, techCategoryGroups } from "@/data/technology-logos";

export function TechSkillsCloud() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = [
    { name: "Semua", logos: featuredTechLogos },
    ...techCategoryGroups.map((g) => ({ name: g.category, logos: g.logos })),
  ];

  const currentGroup = categories.find((c) => c.name === activeCategory) || categories[0];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2.5 md:gap-3" role="tablist" aria-label="Filter kategori teknologi">
        {categories.map((cat) => {
          const isActive = cat.name === activeCategory;
          return (
            <button
              key={cat.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.name)}
              className={`shrink-0 whitespace-nowrap px-5 py-2 md:px-6 md:py-2.5 rounded-none text-xs md:text-sm font-medium transition-all duration-150 cursor-pointer border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Grid of Logos (Solid lines, Checkerboard background, Plus icons at crosshairs) */}
      <div className="w-full">
        <LogoCloud logos={currentGroup.logos} />
      </div>
    </div>
  );
}

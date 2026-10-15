"use client";

import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  name?: string;
  width?: number;
  height?: number;
};

export type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

export function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-white px-4 py-7 md:py-8 relative group transition-colors select-none min-h-[110px]",
        className
      )}
      title={logo.name || logo.alt}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-6 md:h-7 w-auto max-w-[120px] select-none object-contain transition-transform duration-200 group-hover:scale-110"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
        loading="lazy"
      />
      {logo.name && (
        <span className="mt-2 text-[11.5px] font-medium text-slate-500 tracking-tight text-center">
          {logo.name}
        </span>
      )}
      {children}
    </div>
  );
}

export type LogoCloudProps = React.ComponentProps<"div"> & {
  logos?: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  // When customized logos are passed, render them with the exact solid-border checkerboard style
  if (logos && logos.length > 0) {
    const total = logos.length;
    const desktopCols = 4;
    const mobileCols = 2;

    return (
      <div
        className={cn(
          "relative grid grid-cols-2 md:grid-cols-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs",
          className
        )}
        {...props}
      >
        {logos.map((logo, index) => {
          const colDesktop = index % desktopCols;
          const rowDesktop = Math.floor(index / desktopCols);
          const totalDesktopRows = Math.ceil(total / desktopCols);

          const colMobile = index % mobileCols;
          const rowMobile = Math.floor(index / mobileCols);
          const totalMobileRows = Math.ceil(total / mobileCols);

          // Checkerboard alternating pattern
          const isShadedDesktop = (rowDesktop + colDesktop) % 2 === 0;
          const isShadedMobile = (rowMobile + colMobile) % 2 === 0;

          const isLastDesktopRow = rowDesktop === totalDesktopRows - 1;
          const isLastDesktopCol = colDesktop === desktopCols - 1;
          const isLastMobileRow = rowMobile === totalMobileRows - 1;
          const isLastMobileCol = colMobile === mobileCols - 1;

          return (
            <LogoCard
              key={logo.alt + index}
              className={cn(
                // SOLID borders: solid border-b and solid border-r
                "border-b border-r border-slate-200",
                // Checkerboard colors
                isShadedMobile ? "bg-slate-100/80" : "bg-white",
                isShadedDesktop ? "md:bg-slate-100/80" : "md:bg-white"
              )}
              logo={logo}
            >
              {/* Desktop Plus icon at grid intersections */}
              {!isLastDesktopRow && !isLastDesktopCol && (
                <PlusIcon
                  className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none hidden md:block"
                  strokeWidth={1}
                />
              )}
              {/* Mobile Plus icon at grid intersections */}
              {!isLastMobileRow && !isLastMobileCol && (
                <PlusIcon
                  className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none block md:hidden"
                  strokeWidth={1}
                />
              )}
            </LogoCard>
          );
        })}
      </div>
    );
  }

  // Exact default demo component from prompt
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border border-slate-200 rounded-xl overflow-hidden md:grid-cols-4 bg-white",
        className
      )}
      {...props}
    >
      <LogoCard
        className="relative border-r border-b border-slate-200 bg-slate-100/80"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/bd/bdf5f3ae72bcfda892a686c03b7932985c694e9a9828643c980601bbc9e53cb4.svg",
          alt: "Nvidia Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-r border-slate-200 bg-white"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/31/319eeae853dd1af99d442b6c16b6c38dc52a66a719f8e502c65f85d26255cbd3.svg",
          alt: "Supabase Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-slate-200 bg-slate-100/80"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/90/90f01a9537335666282ae5acc80bd4305f86d085a92d60904c3aa3ccc4414570.svg",
          alt: "GitHub Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 text-slate-400 pointer-events-none md:block"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-slate-200 bg-white"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/2b/2bcdd4124223e3bf8e66bc08ce0ac32a6cc42ffe3584bbecfd377847176a188d.svg",
          alt: "OpenAI Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-slate-200 bg-white"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/fc/fc7b090ebcfc468d24a1dc482b2db1fcbfd99ca14568552a30ce553d6dda7fcb.svg",
          alt: "Turso Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 text-slate-400 pointer-events-none md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-r border-slate-200 bg-slate-100/80"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/96/96517bce3574d648280ff639d01d9889f354b488b3f826db5df746d730232a0c.svg",
          alt: "Clerk Logo",
        }}
      />

      <LogoCard
        className="border-r border-slate-200 bg-white"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/e8/e8514b1206f79e1abdafcc1d2632393cc7cfbcbbe25426ac5143b17b184b56b8.svg",
          alt: "Claude AI Logo",
        }}
      />

      <LogoCard
        className="bg-slate-100/80"
        logo={{
          src: "https://cdn.21st.dev/assets/mirror/56/5624b7c243ac8d60e848fb5ea222ec932c1600df54a2762238b37498372fb0c8.svg",
          alt: "Vercel Logo",
        }}
      />
    </div>
  );
}

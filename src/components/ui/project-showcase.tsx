"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

export interface Project {
  title: string
  description: string
  year: string
  link: string
  image: string
}

const defaultProjects: Project[] = [
  {
    title: "Sistem Pelayanan Pajak Daerah",
    description: "Pelayanan pajak daerah terpadu dengan pelacakan posisi dokumen real-time dan integrasi NIK kependudukan.",
    year: "2024",
    link: "/projects/sistem-pelayanan-pajak-daerah",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Analisis Sentimen Berbasis Aspek (ABSA)",
    description: "Pipeline NLP multi-aspek dengan fine-tuning model IndoBERT dan microservice inference FastAPI.",
    year: "2024",
    link: "/projects/analisis-sentimen-absa",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Sistem Pembayaran Pondok Pesantren",
    description: "Manajemen keuangan santri, generator tagihan berkala, dan pembukuan kas berbasis transaksi ACID.",
    year: "2023",
    link: "/projects/sistem-pembayaran-pesantren",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop",
  },
]

interface ProjectShowcaseProps {
  items?: Project[]
  heading?: string
}

export function ProjectShowcase({ items = defaultProjects, heading = "SELECTED WORK" }: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.14),
        y: lerp(prev.y, mousePosition.y, 0.14),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Eyebrow Header */}
      <h2 className="text-muted-foreground text-xs font-mono font-medium tracking-[0.14em] uppercase mb-8 sm:mb-10">
        {heading}
      </h2>

      {/* Floating Preview Cursor Box (Desktop Only) */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-2xl shadow-[0_28px_65px_-12px_rgba(0,0,0,0.4)] hidden md:block"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 105}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
          transition: "opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1), scale 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden="true"
      >
        <div className="relative w-[330px] h-[210px] bg-neutral-950 rounded-2xl overflow-hidden border border-white/10">
          {items.map((project, index) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.08,
                filter: hoveredIndex === index ? "none" : "blur(8px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="space-y-0 border-t border-b border-border">
        {items.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block min-h-[56px] border-b border-border last:border-b-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-7 sm:py-9 transition-all duration-300 ease-out">
              {/* Background highlight pill on hover */}
              <div
                className={`
                  absolute inset-y-1.5 -mx-3 sm:-mx-5 px-3 sm:px-5 bg-secondary/60 rounded-xl
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-[0.985]"}
                `}
              />

              {/* Mobile Inline Media (< 768px) */}
              <div className="md:hidden mb-4 w-full h-44 rounded-xl overflow-hidden bg-secondary border border-border/50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-foreground font-semibold text-lg sm:text-2xl tracking-tight leading-snug">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-1 h-[1.5px] bg-foreground
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-muted-foreground shrink-0
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0 text-foreground"
                            : "opacity-0 -translate-x-2 translate-y-2 md:opacity-0"
                        }
                        max-md:opacity-100 max-md:translate-x-0 max-md:translate-y-0
                      `}
                    />
                  </div>

                  {/* Description */}
                  <p
                    className={`
                      text-muted-foreground text-sm sm:text-[15px] mt-2 sm:mt-2.5 leading-relaxed max-w-xl
                      transition-all duration-200 ease-out
                      ${hoveredIndex === index ? "text-foreground/80" : "text-muted-foreground"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Year badge */}
                <span
                  className={`
                    text-sm font-mono text-muted-foreground/80 tabular-nums shrink-0 pt-1
                    transition-all duration-200 ease-out
                    ${hoveredIndex === index ? "text-foreground" : ""}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Zap,
  Cpu,
  CircuitBoard,
  Ruler,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  cpu: Cpu,
  'circuit-board': CircuitBoard,
  ruler: Ruler,
  'heart-pulse': HeartPulse,
  lightbulb: Lightbulb,
  'shield-check': ShieldCheck,
}

export function ProjectsSection() {
  const { t } = useLanguage()
  const projects = t.projectsData
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(
    null
  )

  const totalProjects = projects.length

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex((index + totalProjects) % totalProjects)
    },
    [totalProjects]
  )

  const goNext = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  const goPrev = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  // Autoplay
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(goNext, 3500)
    return () => clearInterval(interval)
  }, [isPaused, goNext])

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const normalizedDiff =
      ((diff % totalProjects) + totalProjects) % totalProjects
    const actualDiff =
      normalizedDiff > totalProjects / 2
        ? normalizedDiff - totalProjects
        : normalizedDiff

    if (actualDiff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 30,
        opacity: 1,
      }
    } else if (actualDiff === 1 || actualDiff === -totalProjects + 1) {
      return {
        transform: 'translateX(65%) scale(0.85)',
        zIndex: 20,
        opacity: 0.6,
      }
    } else if (actualDiff === -1 || actualDiff === totalProjects - 1) {
      return {
        transform: 'translateX(-65%) scale(0.85)',
        zIndex: 20,
        opacity: 0.6,
      }
    } else if (actualDiff === 2 || actualDiff === -totalProjects + 2) {
      return {
        transform: 'translateX(120%) scale(0.7)',
        zIndex: 10,
        opacity: 0.3,
      }
    } else if (actualDiff === -2 || actualDiff === totalProjects - 2) {
      return {
        transform: 'translateX(-120%) scale(0.7)',
        zIndex: 10,
        opacity: 0.3,
      }
    }
    return {
      transform: 'translateX(0) scale(0.5)',
      zIndex: 0,
      opacity: 0,
    }
  }

  const handleCardClick = (index: number) => {
    if (index === currentIndex) {
      setSelectedProject(projects[index])
    } else {
      goToSlide(index)
    }
  }

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Number & Title */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-6xl sm:text-7xl font-bold text-[#c45c35]/20">
            04
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.projects.title}
          </h2>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative h-[420px] sm:h-[480px] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getCardStyle(index)
              const Icon = iconMap[project.icon] || Cpu

              return (
                <div
                  key={project.id}
                  onClick={() => handleCardClick(index)}
                  className={cn(
                    'absolute w-[280px] sm:w-[340px] cursor-pointer transition-all duration-500 ease-out'
                  )}
                  style={{
                    transform: style.transform,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                  }}
                >
                  <div className="relative bg-card rounded-2xl border border-border shadow-xl p-6 sm:p-8 h-[360px] sm:h-[400px] flex flex-col">
                    {/* In Progress Badge - ONLY for project 7 (TFG) */}
                    {project.inProgress && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#c45c35] text-white hover:bg-[#c45c35] text-xs uppercase tracking-wider">
                          {t.projects.inProgress}
                        </Badge>
                      </div>
                    )}

                    {/* Project Number */}
                    <span className="text-5xl sm:text-6xl font-bold text-[#c45c35]/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className="mt-4 w-14 h-14 rounded-xl bg-[#c45c35]/10 flex items-center justify-center">
                      <Icon className="size-7 text-[#c45c35]" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-lg sm:text-xl font-semibold text-foreground line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description Preview */}
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs font-normal border-border text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goPrev}
            className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Previous project"
          >
            <svg
              className="size-5 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'w-8 bg-[#c45c35]'
                    : 'w-2 bg-border hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Page indicator */}
          <span className="text-sm text-muted-foreground font-medium min-w-[60px] text-center">
            <span className="text-[#c45c35] font-semibold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="mx-1">/</span>
            <span>{String(totalProjects).padStart(2, '0')}</span>
          </span>

          <button
            onClick={goNext}
            className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Next project"
          >
            <svg
              className="size-5 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              {/* Gradient Header */}
              <div className="h-32 -mx-6 -mt-6 mb-4 rounded-t-lg bg-gradient-to-br from-[#c45c35] to-[#c45c35]/60 flex items-center justify-center relative">
                {selectedProject.inProgress && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white hover:bg-white/20 text-xs uppercase tracking-wider backdrop-blur-sm">
                      {t.projects.inProgress}
                    </Badge>
                  </div>
                )}
                {(() => {
                  const Icon = iconMap[selectedProject.icon] || Cpu
                  return <Icon className="size-12 text-white" />
                })()}
              </div>

              <DialogHeader>
                <DialogTitle className="text-xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed mt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <p className="text-sm font-medium text-foreground mb-2">
                  {t.projects.tags}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

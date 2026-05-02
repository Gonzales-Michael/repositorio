'use client'

import { useLanguage } from '@/lib/language-context'
import { 
  Zap, 
  Ruler, 
  HeartPulse, 
  CircuitBoard, 
  Cpu, 
  Lightbulb, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'zap': Zap,
  'ruler': Ruler,
  'heart-pulse': HeartPulse,
  'circuit-board': CircuitBoard,
  'cpu': Cpu,
  'lightbulb': Lightbulb,
  'shield-check': ShieldCheck,
}

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
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

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projectsData.map((project) => {
            const Icon = iconMap[project.icon] || Cpu
            return (
              <article
                key={project.id}
                className="group bg-card rounded-xl border border-border shadow-sm p-6 hover:shadow-lg hover:border-[#c45c35]/30 transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#c45c35]/10 flex items-center justify-center shrink-0">
                    <Icon className="size-6 text-[#c45c35]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-foreground leading-tight">
                        {project.title}
                      </h3>
                      {project.inProgress && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#c45c35]/10 text-[#c45c35] border border-[#c45c35]/20">
                          {t.projects.inProgress}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-accent/50 border border-border text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-accent/50 border border-border text-xs font-medium text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

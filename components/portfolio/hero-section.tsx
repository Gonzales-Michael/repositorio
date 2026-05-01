'use client'

import { Download, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-background" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-start text-left">
          {/* Availability Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {t.hero.available}
            </span>
          </div>

          {/* Name - Split into two lines */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            <span className="block">Michael</span>
            <span className="block">Gonzales Rocha</span>
          </h1>

          {/* Title */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            {t.hero.degree}
          </p>

          {/* University */}
          <p className="mt-2 text-base sm:text-lg text-muted-foreground/80">
            {t.hero.university}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-start gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-[#c45c35] hover:bg-[#a84d2d] text-white"
            >
              <Download className="size-4" />
              {t.hero.downloadCV}
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-4" />
                {t.hero.linkedin}
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="mailto:michael.gonzales.r@gmail.com">
                <Mail className="size-4" />
                {t.hero.sendEmail}
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToProjects}
            >
              <ArrowDown className="size-4" />
              {t.hero.viewProjects}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-6 text-muted-foreground/50" />
      </div>
    </section>
  )
}

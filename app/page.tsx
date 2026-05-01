'use client'

import { LanguageProvider } from '@/lib/language-context'
import { Navigation } from '@/components/portfolio/navigation'
import { HeroSection } from '@/components/portfolio/hero-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { EducationSection } from '@/components/portfolio/education-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { ContactSection } from '@/components/portfolio/contact-section'

export default function PortfolioPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </LanguageProvider>
  )
}

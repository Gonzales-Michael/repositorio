'use client'

import { MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-accent/30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Number & Title */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-6xl sm:text-7xl font-bold text-[#c45c35]/20">
            01
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.about.title}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Image Column */}
          <div className="flex flex-col items-center md:items-end">
            {/* Profile Image Placeholder */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-[#c45c35]/20 to-[#c45c35]/5 border-2 border-[#c45c35]/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-[#c45c35]/40">MG</span>
            </div>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 text-muted-foreground">
              <span className="text-lg">🇪🇸</span>
              <MapPin className="size-4" />
              <span className="text-sm font-medium">{t.about.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

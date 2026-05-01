'use client'

import { GraduationCap, Calendar, Languages } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Card, CardContent } from '@/components/ui/card'

export function EducationSection() {
  const { t, language } = useLanguage()

  const educationDescriptionEs = (
    <>
      <strong className="text-[#c45c35]">Mención en Electrónica</strong>. Formación en diseño analógico y digital, electrónica de potencia y sistemas embebidos, con especialización práctica en programación de <strong className="text-[#c45c35]">microcontroladores (STM32)</strong> y <strong className="text-[#c45c35]">FPGA (VHDL/Quartus)</strong>, diseño de <strong className="text-[#c45c35]">PCB (KiCad)</strong> y <strong className="text-[#c45c35]">automatización industrial</strong>.
    </>
  )

  const educationDescriptionEn = (
    <>
      <strong className="text-[#c45c35]">Specialization in Electronics</strong>. Training in analog and digital design, power electronics and embedded systems, with practical specialization in <strong className="text-[#c45c35]">microcontroller programming (STM32)</strong> and <strong className="text-[#c45c35]">FPGA (VHDL/Quartus)</strong>, <strong className="text-[#c45c35]">PCB design (KiCad)</strong> and <strong className="text-[#c45c35]">industrial automation</strong>.
    </>
  )

  return (
    <section
      id="education"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Number & Title */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-6xl sm:text-7xl font-bold text-[#c45c35]/20">
            02
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.education.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <Card className="lg:col-span-2 border-none shadow-lg bg-card">
            <CardContent className="p-6 sm:p-8">
              {/* Timeline indicator */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#c45c35]/10 flex items-center justify-center">
                    <GraduationCap className="size-6 text-[#c45c35]" />
                  </div>
                  <div className="w-0.5 h-full bg-border mt-4" />
                </div>

                <div className="flex-1 pb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {t.education.degree}
                  </h3>
                  <p className="mt-1 text-base text-muted-foreground">
                    {t.education.university}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4" />
                    <span>{t.education.period}</span>
                  </div>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {language === 'es' ? educationDescriptionEs : educationDescriptionEn}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages Card */}
          <Card className="border-none shadow-lg bg-card">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#c45c35]/10 flex items-center justify-center">
                  <Languages className="size-5 text-[#c45c35]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t.education.languages}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Spanish */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-3">
                    <img src="/Flag_of_Spain.webp" alt="Español" className="w-6 h-auto rounded-sm shadow-sm" />
                    <span className="font-medium text-foreground">
                      {t.education.spanish}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {t.education.spanishLevel}
                  </span>
                </div>

                {/* English */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-3">
                    <img src="/Flag_of_the_United_Kingdom.png" alt="Inglés" className="w-6 h-auto rounded-sm shadow-sm" />
                    <span className="font-medium text-foreground">
                      {t.education.english}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {t.education.englishLevel}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

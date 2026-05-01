'use client'

import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function ContactSection() {
  const { t } = useLanguage()

  const contactItems = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'michael.gonzales.r@gmail.com',
      href: 'mailto:michael.gonzales.r@gmail.com',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+34 640 802 813',
      href: 'tel:+34640802813',
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: 'LinkedIn',
      href: 'https://linkedin.com/in/',
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: 'Valencia, España',
      href: null,
    },
  ]

  return (
    <footer
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-accent/30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Number & Title */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-6xl sm:text-7xl font-bold text-[#c45c35]/20">
            05
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.contact.title}
          </h2>
        </div>

        {/* Main CTA Card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-8 sm:p-12 mb-6">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground font-bold text-center max-w-3xl mx-auto text-balance leading-relaxed">
            {t.contact.description}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background gap-2 px-8"
              asChild
            >
              <a href="mailto:michael.gonzales.r@gmail.com">
                <Mail className="size-4" />
                {t.contact.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon
            const content = (
              <div className="relative bg-card rounded-xl border border-border p-5 hover:border-[#c45c35]/30 hover:shadow-md transition-all duration-300 group h-full">
                {/* Top row: Icon box and arrow */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Icon className="size-5 text-muted-foreground group-hover:text-[#c45c35] transition-colors" />
                  </div>
                  {item.href && (
                    <ArrowUpRight className="size-4 text-muted-foreground/50 group-hover:text-[#c45c35] transition-colors" />
                  )}
                </div>

                {/* Bottom: Label and Value */}
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            )

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="block"
                >
                  {content}
                </a>
              )
            }

            return <div key={item.label}>{content}</div>
          })}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Michael Gonzales Rocha. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useLanguage } from '@/lib/language-context'
import { 
  Calculator, 
  Cpu, 
  CircuitBoard, 
  PenTool, 
  Code, 
  Settings, 
  Cog, 
  Activity 
} from 'lucide-react'

const skillCategories = [
  {
    id: 'calc-sim',
    titleEs: 'Cálculo y simulación',
    titleEn: 'Calculation & Simulation',
    icon: Calculator,
    tools: [
      { name: 'Mathcad', initials: 'MC' },
      { name: 'Matlab/Simulink', initials: 'ML', logo: '/Matlab_Logo.png' },
    ],
  },
  {
    id: 'design-sim',
    titleEs: 'Diseño y simulación electrónica',
    titleEn: 'Electronic Design & Simulation',
    icon: CircuitBoard,
    tools: [
      { name: 'Proteus', initials: 'PT' },
      { name: 'OrCAD', initials: 'OC' },
      { name: 'Multisim', initials: 'MS' },
    ],
  },
  {
    id: 'pcb',
    titleEs: 'Diseño de PCB',
    titleEn: 'PCB Design',
    icon: Cpu,
    tools: [
      { name: 'KiCad', initials: 'KC' },
    ],
  },
  {
    id: 'cad',
    titleEs: 'Diseño CAD',
    titleEn: 'CAD Design',
    icon: PenTool,
    tools: [
      { name: 'AutoCAD', initials: 'AC' },
    ],
  },
  {
    id: 'mcu',
    titleEs: 'Programación de microcontroladores',
    titleEn: 'Microcontroller Programming',
    icon: Code,
    tools: [
      { name: 'STM32CubeIDE', initials: 'STM' },
      { name: 'Code Composer Studio', initials: 'CCS' },
    ],
  },
  {
    id: 'fpga',
    titleEs: 'Programación de FPGA',
    titleEn: 'FPGA Programming',
    icon: Settings,
    tools: [
      { name: 'Quartus Lite', initials: 'QL' },
    ],
  },
  {
    id: 'plc',
    titleEs: 'Automatización industrial (PLC)',
    titleEn: 'Industrial Automation (PLC)',
    icon: Cog,
    tools: [
      { name: 'CX Programmer (Ladder y SFC)', initials: 'CX' },
    ],
  },
  {
    id: 'instrumentation',
    titleEs: 'Instrumentación y medida',
    titleEn: 'Instrumentation & Measurement',
    icon: Activity,
    tools: [
      { name: 'Keysight VEE Pro', initials: 'KV' },
    ],
  },
]

export function SkillsSection() {
  const { t, language } = useLanguage()

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-accent/30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Number & Title */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-6xl sm:text-7xl font-bold text-[#c45c35]/20">
            03
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.skills.title}
          </h2>
        </div>

        {/* Dashboard Panels Grid - 4 columns on large screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="bg-card rounded-xl border border-border shadow-sm p-5 hover:shadow-md hover:border-[#c45c35]/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#c45c35]/10 flex items-center justify-center shrink-0">
                    <Icon className="size-4 text-[#c45c35]" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {language === 'es' ? category.titleEs : category.titleEn}
                  </h3>
                </div>

                {/* Tools as Pills/Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-accent/50 border border-border hover:border-[#c45c35]/30 transition-colors"
                    >
                      <div className="w-6 h-6 flex items-center justify-center overflow-hidden shrink-0">
                        <img 
                          src={tool.logo || "/placeholder.svg"} 
                          alt={tool.name} 
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            // Si el logo falla, muestra las iniciales como plan B
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-[10px] font-bold text-[#c45c35]">${tool.initials}</span>`;
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

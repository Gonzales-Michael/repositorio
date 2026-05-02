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
      { name: 'Mathcad', initials: 'MC', logo: '/mathcad.png' },
      { name: 'Matlab/Simulink', initials: 'ML', logo: '/Matlab_Logo.png' },
    ],
  },
  {
    id: 'design-sim',
    titleEs: 'Diseño y simulación electrónica',
    titleEn: 'Electronic Design & Simulation',
    icon: CircuitBoard,
    tools: [
      { name: 'Proteus', initials: 'PT', logo: '/logo_proteus.png' },
      { name: 'OrCAD', initials: 'OC', logo: '/orcad.png' },
      { name: 'Multisim', initials: 'MS', logo: '/multisim_logo.png' },
    ],
  },
  {
    id: 'pcb',
    titleEs: 'Diseño de PCB',
    titleEn: 'PCB Design',
    icon: Cpu,
    tools: [
      { name: 'KiCad', initials: 'KC', logo: '/Kicad.png' },
    ],
  },
  {
    id: 'cad',
    titleEs: 'Diseño CAD',
    titleEn: 'CAD Design',
    icon: PenTool,
    tools: [
      { name: 'AutoCAD', initials: 'AC', logo: '/autcad.png' },
    ],
  },
  {
    id: 'mcu',
    titleEs: 'Programación de microcontroladores',
    titleEn: 'Microcontroller Programming',
    icon: Code,
    tools: [
      { name: 'STM32CubeIDE', initials: 'STM', logo: '/stm32cubeide.png' },
      { name: 'Code Composer Studio', initials: 'CCS', logo: '/code_composer_studio.png' },
    ],
  },
  {
    id: 'fpga',
    titleEs: 'Programación de FPGA',
    titleEn: 'FPGA Programming',
    icon: Settings,
    tools: [
      { name: 'Quartus Lite', initials: 'QL', logo: '/quartus.png' },
    ],
  },
  {
    id: 'plc',
    titleEs: 'Automatización industrial (PLC)',
    titleEn: 'Industrial Automation (PLC)',
    icon: Cog,
    tools: [
      { name: 'CX Programmer', initials: 'CX', logo: '/cx.png' },
    ],
  },
  {
    id: 'instrumentation',
    titleEs: 'Instrumentación y medida',
    titleEn: 'Instrumentation & Measurement',
    icon: Activity,
    tools: [
      { name: 'Keysight VEE Pro', initials: 'KV', logo: '/keysight.png' },
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
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-accent/50 border border-border hover:border-[#c45c35]/30 transition-colors"
                    >
                      {/* Logo Container - White background for dark mode compatibility */}
                      <div className="w-5 h-5 rounded bg-white flex items-center justify-center shrink-0">
                        {tool.logo ? (
                          <img 
                            src={tool.logo} 
                            alt={tool.name}
                            className="w-full h-full object-contain p-0.5"
                            onError={(e) => {
                              // If logo fails to load, hide it and show initials
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const span = document.createElement('span');
                                span.className = "text-[9px] font-bold text-[#c45c35]";
                                span.innerText = tool.initials;
                                parent.appendChild(span);
                              }
                            }}
                          />
                        ) : (
                          <span className="text-[9px] font-bold text-[#c45c35]">
                            {tool.initials}
                          </span>
                        )}
                      </div>

                      {/* Tool Name */}
                      <span className="text-xs font-medium text-foreground truncate">
                        {tool.name}
                      </span>
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

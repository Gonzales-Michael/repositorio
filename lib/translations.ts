export type Language = 'es' | 'en'

export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    // Hero
    hero: {
      name: 'Michael Gonzales Rocha',
      degree: 'Ingeniería Electrónica Industrial y Automática',
      university: 'Universitat Politècnica de València (UPV)',
      available: 'Disponible para prácticas o proyectos',
      downloadCV: 'Descargar CV',
      linkedin: 'LinkedIn',
      sendEmail: 'Enviar Correo',
      viewProjects: 'Ver Proyectos',
    },
    // About
    about: {
      title: 'Sobre Mí',
      description:
        'Estudiante de último curso de Ingeniería Electrónica Industrial y Automática en la Universitat Politècnica de València, con mención en electrónica. Perfil orientado a la electrónica de potencia y los sistemas embebidos, con experiencia en programación de microcontroladores y FPGA (VHDL), así como en el diseño de inversores y convertidores. Orientado a entornos de I+D e ingeniería de producto, como refleja mi TFG: un sistema embebido de monitorización y protección activa de la red eléctrica doméstica, integrando FPGA para el análisis de señal y microcontrolador para la actuación, con rediseño propio del circuito de adquisición.',
      location: 'Valencia, España',
    },
    // Education
    education: {
      title: 'Educación',
      degree: 'Grado en Ingeniería Electrónica Industrial y Automática',
      university: 'Universitat Politècnica de València',
      period: '2022 - Actualidad',
      description:
        'Mención en Electrónica. Formación en diseño analógico y digital, electrónica de potencia, microcontroladores, instrumentación, automatización industrial y diseño CAD/EDA.',
      languages: 'Idiomas',
      spanish: 'Español',
      spanishLevel: 'Nativo',
      english: 'Inglés',
      englishLevel: 'B1/B2',
    },
    // Skills
    skills: {
      title: 'Software y Herramientas',
    },
    // Projects
    projects: {
      title: 'Proyectos Destacados',
      viewMore: 'Ver más',
      tags: 'Tecnologías',
      inProgress: 'En progreso',
    },
    // Contact
    contact: {
      title: 'Contacto',
      description:
        'Abierto a propuestas de prácticas, colaboraciones en proyectos y oportunidades relacionadas con mi perfil.',
      cta: 'Contáctame',
      email: 'Correo',
      phone: 'Teléfono',
      linkedin: 'LinkedIn',
      location: 'Ubicación',
    },
    // Projects Data
    projectsData: [
      {
        id: 1,
        title: 'Diseño y Simulación de Inversor Monofásico SPWM',
        description:
          'Diseño integral y simulación de la etapa de potencia de un inversor monofásico en puente completo. Implementación de un sistema de control en lazo cerrado mediante un controlador PI para mantener la tensión eficaz constante, logrando una reducción drástica de la distorsión armónica (THD) hasta un 2.17%.',
        tags: ['Electrónica de Potencia', 'Convertidores DC/AC', 'Control Automático', 'Matlab/Simulink', 'SPWM Unipolar', 'Filtro LC', 'Controlador PI'],
        icon: 'zap',
        inProgress: false,
      },
      {
        id: 2,
        title: 'Sistema de Adquisición y Acondicionamiento para Medición Lineal',
        description:
          'Desarrollo end-to-end de un sistema de medición de posición. Acondicionamiento de la señal de un potenciómetro lineal y conversión a bucle de corriente para una transmisión robusta frente al ruido. Desarrollo de la interfaz gráfica y aplicación de calibración por software para mitigar y compensar errores físicos del hardware.',
        tags: ['Instrumentación', 'Adquisición de Datos (DAQ)', 'Acondicionamiento de Señal', 'Keysight VEE Pro', 'Bucle de corriente', 'Conversor V-I (XTR110)', 'Transductor Resistivo'],
        icon: 'ruler',
        inProgress: false,
      },
      {
        id: 3,
        title: 'Diseño de Wearable Óptico para Monitorización Cardíaca',
        description:
          'Desarrollo colaborativo de una banda deportiva de antebrazo con protección IP67 para investigación fisiológica. El sistema integra un sensor PPG y un microcontrolador ESP32-C3 para la captura y transmisión inalámbrica de bioseñales en bruto en tiempo real mediante conectividad BLE.',
        tags: ['Wearables', 'IoT', 'Electrónica Integrada', 'Proyecto en Equipo (6 integrantes)', 'Fotopletismografía (PPG)', 'MAX30102', 'ESP32-C3', 'Bluetooth Low Energy (BLE)'],
        icon: 'heart-pulse',
        inProgress: false,
      },
      {
        id: 4,
        title: 'Diseño de PCB para Sensor de Tensión de Red',
        description:
          'Diseño y enrutado de una placa de circuito impreso (PCB) para la lectura segura de la tensión de red eléctrica, optimizada para su compatibilidad con FPGAs. Selección e integración de un operacional AD823 (Rail-to-Rail, 30V/us) para maximizar la velocidad de adquisición y minimizar el ruido frente a operacionales estándar.',
        tags: ['Diseño de PCB', 'Hardware', 'Acondicionamiento Analógico', 'Transformador ZMPT101B', 'Amplificador Operacional AD823', 'Montaje SMD'],
        icon: 'circuit-board',
        inProgress: false,
      },
      {
        id: 5,
        title: 'Módulo de Adquisición (ADC) y Escalado de Tensión en VHDL para FPGA',
        description:
          'Desarrollo exclusivo en VHDL del módulo conversor analógico-digital (ADC) para digitalizar la señal de la red eléctrica. El sistema transforma la señal acondicionada (0 a 2.5V) en un vector binario de 12 bits a una tasa de 1 MHz. Adicionalmente, se implementaron los algoritmos matemáticos para suprimir el offset físico del sensor y aplicar los factores de conversión exactos, traduciendo de manera precisa los datos crudos (0-4095) a los valores reales de la tensión de red.',
        tags: ['Sistemas Digitales', 'FPGA', 'VHDL', 'Procesamiento de Señal', 'Altera MAX 10', 'ADC 12 bits', '1 MSPS', 'Escalado de Señal', 'Supresión de Offset'],
        icon: 'cpu',
        inProgress: false,
      },
      {
        id: 6,
        title: 'Sistema Embebido para Control de Iluminación por Control de Fase (DSC)',
        description:
          'Desarrollo de firmware en C para un Controlador de Señales Digitales (DSC) TMS320F28027. Implementación de una máquina de estados para gestionar la regulación de potencia luminosa mediante control de fase (ángulo de disparo de un Triac), sincronizándose con la red eléctrica a través de un detector de paso por cero. Incluye la programación de un protocolo de comunicación serie robusto (RS-232 con checksum) para el control remoto desde un PC y la optimización extrema del código para ajustarse a las limitaciones de memoria del microcontrolador.',
        tags: ['Sistemas Embebidos', 'Electrónica de Potencia', 'Control en Tiempo Real', 'C/C++', 'DSC TMS320F28027', 'Control de Ángulo de Disparo', 'Interrupciones (ISR)', 'RS-232 / UART', 'Detector de Paso por Cero'],
        icon: 'lightbulb',
        inProgress: false,
      },
      {
        id: 7,
        title: 'TFG: Sistema Embebido para Monitorización y Protección Activa de Red Eléctrica Doméstica',
        description:
          'Desarrollo integral de un sistema embebido de protección domótica en tiempo real. El proyecto abarca: Rediseño a nivel de hardware (PCB) del sensor ZMPT101B para corregir defectos de fábrica y mejorar la velocidad/estabilidad de adquisición. Muestreo y procesamiento de la señal en VHDL mediante el ADC de la FPGA, extrayendo parámetros críticos (Vmin, Vmax, Vrms, Frecuencia). Integración y comunicación con un microcontrolador domótico para accionar protocolos de seguridad (corte/aislamiento de la red eléctrica) ante anomalías, protegiendo la instalación doméstica.',
        tags: ['Sistemas Embebidos', 'FPGA', 'IoT / Domótica', 'Diseño de Hardware End-to-End', 'Altera MAX 10', 'VHDL', 'ZMPT101B (Custom PCB)', 'Microcontrolador', 'Smart Home', 'Protección Activa'],
        icon: 'shield-check',
        inProgress: true,
      },
    ],
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Me',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    // Hero
    hero: {
      name: 'Michael Gonzales Rocha',
      degree: 'Industrial and Automatic Electronic Engineering',
      university: 'Universitat Politècnica de València (UPV)',
      available: 'Available for internships or projects',
      downloadCV: 'Download CV',
      linkedin: 'LinkedIn',
      sendEmail: 'Send Email',
      viewProjects: 'View Projects',
    },
    // About
    about: {
      title: 'About Me',
      description:
        'Final year student of Industrial and Automatic Electronic Engineering at the Universitat Politècnica de València, with a specialization in electronics. Profile focused on power electronics and embedded systems, with experience in microcontroller and FPGA programming (VHDL), as well as in the design of inverters and converters. Oriented to R&D and product engineering environments, as reflected in my thesis: an embedded system for monitoring and active protection of the domestic electrical grid, integrating FPGA for signal analysis and microcontroller for actuation, with custom redesign of the acquisition circuit.',
      location: 'Valencia, Spain',
    },
    // Education
    education: {
      title: 'Education',
      degree: 'Bachelor in Industrial and Automatic Electronic Engineering',
      university: 'Universitat Politècnica de València',
      period: '2022 - Present',
      description:
        'Specialization in Electronics. Training in analog and digital design, power electronics, microcontrollers, instrumentation, industrial automation, and CAD/EDA design.',
      languages: 'Languages',
      spanish: 'Spanish',
      spanishLevel: 'Native',
      english: 'English',
      englishLevel: 'B1/B2',
    },
    // Skills
    skills: {
      title: 'Software & Tools',
    },
    // Projects
    projects: {
      title: 'Featured Projects',
      viewMore: 'View more',
      tags: 'Technologies',
      inProgress: 'In Progress',
    },
    // Contact
    contact: {
      title: 'Contact',
      description:
        'Open to internship proposals, project collaborations, and opportunities related to my profile.',
      cta: 'Contact Me',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      location: 'Location',
    },
    // Projects Data
    projectsData: [
      {
        id: 1,
        title: 'Design and Simulation of Single-Phase SPWM Inverter',
        description:
          'Comprehensive design and simulation of the power stage of a single-phase full-bridge inverter. Implementation of a closed-loop control system using a PI controller to maintain constant RMS voltage, achieving a drastic reduction in total harmonic distortion (THD) down to 2.17%.',
        tags: ['Power Electronics', 'DC/AC Converters', 'Automatic Control', 'Matlab/Simulink', 'Unipolar SPWM', 'LC Filter', 'PI Controller'],
        icon: 'zap',
        inProgress: false,
      },
      {
        id: 2,
        title: 'Acquisition and Conditioning System for Linear Measurement',
        description:
          'End-to-end development of a position measurement system. Signal conditioning from a linear potentiometer and conversion to current loop for noise-robust transmission. Development of the graphical interface and software calibration application to mitigate and compensate for physical hardware errors.',
        tags: ['Instrumentation', 'Data Acquisition (DAQ)', 'Signal Conditioning', 'Keysight VEE Pro', 'Current Loop', 'V-I Converter (XTR110)', 'Resistive Transducer'],
        icon: 'ruler',
        inProgress: false,
      },
      {
        id: 3,
        title: 'Optical Wearable Design for Cardiac Monitoring',
        description:
          'Collaborative development of a forearm sports band with IP67 protection for physiological research. The system integrates a PPG sensor and an ESP32-C3 microcontroller for real-time capture and wireless transmission of raw biosignals via BLE connectivity.',
        tags: ['Wearables', 'IoT', 'Integrated Electronics', 'Team Project (6 members)', 'Photoplethysmography (PPG)', 'MAX30102', 'ESP32-C3', 'Bluetooth Low Energy (BLE)'],
        icon: 'heart-pulse',
        inProgress: false,
      },
      {
        id: 4,
        title: 'PCB Design for Grid Voltage Sensor',
        description:
          'Design and routing of a printed circuit board (PCB) for safe reading of mains voltage, optimized for FPGA compatibility. Selection and integration of an AD823 op-amp (Rail-to-Rail, 30V/us) to maximize acquisition speed and minimize noise compared to standard op-amps.',
        tags: ['PCB Design', 'Hardware', 'Analog Conditioning', 'ZMPT101B Transformer', 'AD823 Op-Amp', 'SMD Assembly'],
        icon: 'circuit-board',
        inProgress: false,
      },
      {
        id: 5,
        title: 'ADC Acquisition Module and Voltage Scaling in VHDL for FPGA',
        description:
          'Exclusive VHDL development of the analog-to-digital converter (ADC) module to digitize the mains signal. The system transforms the conditioned signal (0 to 2.5V) into a 12-bit binary vector at a rate of 1 MHz. Additionally, mathematical algorithms were implemented to suppress the physical sensor offset and apply exact conversion factors, accurately translating raw data (0-4095) to real mains voltage values.',
        tags: ['Digital Systems', 'FPGA', 'VHDL', 'Signal Processing', 'Altera MAX 10', '12-bit ADC', '1 MSPS', 'Signal Scaling', 'Offset Suppression'],
        icon: 'cpu',
        inProgress: false,
      },
      {
        id: 6,
        title: 'Embedded System for Phase Control Lighting (DSC)',
        description:
          'Firmware development in C for a Digital Signal Controller (DSC) TMS320F28027. Implementation of a state machine to manage light power regulation through phase control (Triac firing angle), synchronizing with the mains through a zero-crossing detector. Includes programming of a robust serial communication protocol (RS-232 with checksum) for remote control from a PC and extreme code optimization to fit within the microcontroller memory limitations.',
        tags: ['Embedded Systems', 'Power Electronics', 'Real-Time Control', 'C/C++', 'DSC TMS320F28027', 'Firing Angle Control', 'Interrupts (ISR)', 'RS-232 / UART', 'Zero-Crossing Detector'],
        icon: 'lightbulb',
        inProgress: false,
      },
      {
        id: 7,
        title: 'Thesis: Embedded System for Monitoring and Active Protection of Domestic Electrical Grid',
        description:
          'Comprehensive development of a real-time home automation protection embedded system. The project covers: Hardware-level (PCB) redesign of the ZMPT101B sensor to correct factory defects and improve acquisition speed/stability. Signal sampling and processing in VHDL using the FPGA ADC, extracting critical parameters (Vmin, Vmax, Vrms, Frequency). Integration and communication with a home automation microcontroller to trigger safety protocols (grid disconnection/isolation) upon anomalies, protecting the home installation.',
        tags: ['Embedded Systems', 'FPGA', 'IoT / Home Automation', 'End-to-End Hardware Design', 'Altera MAX 10', 'VHDL', 'ZMPT101B (Custom PCB)', 'Microcontroller', 'Smart Home', 'Active Protection'],
        icon: 'shield-check',
        inProgress: true,
      },
    ],
  },
} as const

export type Translations = typeof translations.es

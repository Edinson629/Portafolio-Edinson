export const profile = {
  name: 'Edinson Palacio',
  role: 'Desarrollador de Software',
  tagline:
    'Construyo aplicaciones web escalables, limpias y de alto rendimiento.',
  email: 'edinsonpalacio999@gmail.com',
  whatsapp: '573137298287?text=Hola%20Edinson,%20me%20gustaría%20obtener%20más%20información.%20',
  github: 'https://github.com/Edinson629',
  linkedin: 'https://www.linkedin.com/in/edinson-palacio-4991b730a/',
  cv: '/cv-edinson-palacio.pdf',
}

export const about = {
  intro:
    'Desarrollador de software enfocado en resultados. Transformo requisitos de negocio en soluciones técnicas claras, mantenibles y medibles.',
  points: [
    {
      title: 'Qué hago',
      description:
        'Diseño y desarrollo aplicaciones web, con foco en backend (Java, Python/Django, PHP) y frontend moderno (React, JavaScript).',
    },
    {
      title: 'Qué valor aporto',
      description:
        'Entrego software que resuelve problemas reales: procesos automatizados, interfaces intuitivas y bases de datos bien modeladas que reducen costos y errores.',
    },
    {
      title: 'Qué problemas resuelvo',
      description:
        'Sistemas lentos o desordenados, procesos manuales repetitivos y aplicaciones difíciles de mantener. Los convierto en soluciones escalables y ordenadas.',
    },
    {
      title: 'Cómo trabajo',
      description:
        'Con código limpio, control de versiones, buenas prácticas, comunicación constante y trabajo en equipo. Priorizo la calidad y la mejora continua.',
    },
  ],
}

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo?: string
  problem: string
  result: string
}

export const projects: Project[] = [
  {
    title: 'AirCúcuta - Trabajo Colaborativo',
    description:
      'Plataforma web desarrollada para centralizar y visualizar información sobre la calidad del aire mediante mapas interactivos, gráficos y paneles de monitoreo. La solución facilita el análisis de datos ambientales en tiempo real, mejorando el seguimiento de indicadores y apoyando la toma de decisiones informadas.',
    image: '/AirCucuta.png',
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/Edinson629',
    demo: 'https://air-cucuta-1s1v.vercel.app/',
    problem:
      'La información sobre la calidad del aire estaba dispersa y era difícil de interpretar, lo que complicaba el seguimiento y análisis de los datos.',
    result:
      'Se implementó una plataforma web con mapas interactivos, gráficos y paneles de control que centralizan la información y facilitan el monitoreo y la toma de decisiones.',
  },
  
  {
    title: 'Nexora -E-commerce',
    description:
      'Plataforma de comercio electrónico con catálogo, carrito y panel de administración.',
    image: '/Nexora.png',
    tech: ['Next.js', 'TypeScript', 'Bootstrap', 'Lucide React'],
    github: 'https://github.com/Edinson629',
    demo: 'https://nexora-chi-puce.vercel.app/',
    problem:
      'El negocio no tenía presencia online ni forma de vender fuera del local físico.',
    result:
      'Nuevo canal de ventas digital que amplió el alcance del negocio y automatizó los pedidos.',
  },
  {
    title: 'Cyber - Guardian',
    description:
      'Plataforma web para generar contraseñas seguras y personalizadas, permitiendo configurar longitud y tipos de caracteres mediante una interfaz moderna e intuitiva.',
    image: '/CyberGuardian.png',
    tech: ['Next.js', 'TypeScript', 'React', 'Radix UI'],
    github: 'https://github.com/Edinson629',
    demo: 'https://cyber-guardian-otkt.vercel.app/',
    problem:
      'La creación manual de contraseñas solia dar como resultado credenciales débiles o repetidas, aumentando el riesgo de vulnerabilidades de seguridad.',
    result:
      'Se desarrolló una herramienta que genera contraseñas robustas de forma instantánea, mejorando la seguridad y ofreciendo una experiencia de usuario rápida e intuitiva.',
  },
  {
    title: "Yuli's - Flavors",
    description: "Plataforma web de escritorio para restaurante con menú digital, reservas, gestión de contenido y panel de administración.",
    image: "/project-restaurante.png",
    github: "https://github.com/Edinson629",
    problem: "El restaurante no contaba con una plataforma digital para mostrar su menú y administrar su contenido de forma centralizada.",
    result: "Se implementó un sitio web con panel administrativo que facilitó la gestión del contenido y mejoró la experiencia de los clientes.",
    tech: ["PHP", "JavaScript","Django", "HTML5","CSS3"],
}
]

export type Skill = {
  name: string
  description: string
  icon: string
}

export type SkillGroup = {
  category: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', description: 'Desarrollo de aplicaciones orientadas a objetos.', icon: 'java' },
      { name: 'PHP', description: 'Desarrollo de aplicaciones web dinámicas.', icon: 'php' },
      { name: 'Python (Django)', description: 'Desarrollo de aplicaciones web y APIs.', icon: 'python' },
      { name: 'Desarrollo Backend', description: 'Construcción de operaciones CRUD y lógica de servidor.', icon: 'server' },
    ],
  },
  {
    category: 'Base de Datos',
    skills: [
      { name: 'MySQL', description: 'Diseño y gestión de bases de datos relacionales.', icon: 'mysql' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', description: 'Interfaces reutilizables, rápidas y escalables mediante componentes.', icon: 'react' },
      { name: 'JavaScript', description: 'Funcionalidades dinámicas e interactivas para la web.', icon: 'javascript' },
      { name: 'HTML5', description: 'Estructuración semántica y accesible de aplicaciones web.', icon: 'html5' },
      { name: 'CSS3', description: 'Interfaces modernas, responsivas y atractivas.', icon: 'css3' },
      { name: 'Bootstrap', description: 'Creación de interfaces responsivas.', icon: 'bootstrap' },
    ],
  },
  {
    category: 'Control de Versiones',
    skills: [
      { name: 'GitHub', description: 'Control de versiones y trabajo colaborativo.', icon: 'github' },
    ],
  },
  {
    category: 'Fundamentos',
    skills: [
      { name: 'Lógica de programación', description: 'Diseño de algoritmos y resolución de problemas.', icon: 'logic' },
    ],
  },
  {
    category: 'Habilidades Blandas',
    skills: [
      { name: 'Trabajo en equipo', description: 'Colaboración efectiva en proyectos de desarrollo.', icon: 'team' },
    ],
  },
]

export const certificates = [
  { title: 'Fundamentos de Ingeniería de Software', issuer: 'Udemy', year: '2024' },
  { title: 'Python y Django', issuer: 'Udemy', year: '2023' },
  { title: 'Fundamentos de Java de cero a experto', issuer: 'Udemy', year: '2025' },
  { title: 'Bases de Datos con MySQL', issuer: 'Oracle', year: '2024' },
]

export const education = [
  {
    title: 'Bachiller tecnológico',
    place: 'Institución Educativa Luis Gabriel Castro',
    period: '2015 — 2020',
    description:
      'Formación en educación media con énfasis en Técnico en Sistemas.',
  },
  {
    title: 'INGENIERÍA DE SISTEMAS',
    place: 'Universidad de Pamplona',
    period: '2022 — Presente',
    description:
      'Carrera profesional en Ingeniería de Sistemas, enfocada en el desarrollo de software y la gestión de proyectos tecnológicos.',
  },
]

export const stats = [
  { value: 8, suffix: '+', label: 'Proyectos desarrollados' },
  { value: 6, suffix: '+', label: 'Tecnologías dominadas' },
  { value: 4, suffix: '', label: 'Certificaciones' },
  { value: 3, suffix: '+', label: 'Años programando'},
]

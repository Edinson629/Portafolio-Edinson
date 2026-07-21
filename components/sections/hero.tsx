'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 1.5 },
  },
}

const letter = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } },
}

function AnimatedName({ text }: { text: string }) {
  return (
    <motion.span variants={container} initial="hidden" animate="show" aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letter}
          className="inline-block"
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Animated subtle background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--background)_75%)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-144 w-xl -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Disponible para nuevos proyectos
          </motion.span>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <AnimatedName text={profile.name} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {profile.role}. {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.cv}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
            >
              Contactarme
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-brand"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-brand"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.9, scale: 0.9 }}
    
          className="relative mx-auto w-full max-w-sm" >
          <div className="absolute -inset-8 -z-20 rounded-[2.5rem] bg-blue-500/55 blur-[110px]" />
          <div className="absolute -inset-16 -z-30 rounded-[3rem] bg-blue-600/20 blur-[130px]" />

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-blue-400/60
              bg-zinc-900/60
              p-0.75
              shadow-[0_0_20px_rgba(59,130,246,0.55),0_0_60px_rgba(59,130,246,0.35)]
            "
          >
            <div className="overflow-hidden rounded-[1.8rem] bg-zinc-900">
              <Image
                src="/foto.jpg"
                alt="Retrato Edinson Palacio"
                width={480}
                height={480}
                priority
                className="aspect-square w-full rounded-[1.8rem] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

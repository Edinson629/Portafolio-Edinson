'use client'

import { motion } from 'motion/react'
import { about } from '@/lib/data'
import { Reveal, SectionHeading } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Sobre mí" title="Enfocado en resultados" description={about.intro} />

      <div className="grid gap-4 sm:grid-cols-2">
        {about.points.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 [@media(hover:none)]:border-brand/40 [@media(hover:none)]:shadow-lg [@media(hover:none)]:shadow-brand/5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                  {i + 1}
                </span>
                <h3 className="font-medium">{point.title}</h3>
              </div>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

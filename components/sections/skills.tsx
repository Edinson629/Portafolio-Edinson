'use client'

import { motion } from 'motion/react'
import { skillGroups } from '@/lib/data'
import { TechIcon } from '@/components/tech-icon'
import { Reveal, SectionHeading } from '@/components/reveal'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Habilidades"
        title="Tecnologías y herramientas"
        description="Cada tecnología incluye una breve descripción de mi experiencia."
      />

      <div className="space-y-10">
        {skillGroups.map((group, gi) => (
          <div key={group.category}>
            <Reveal>
              <h3 className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {group.category}
                <span className="h-px flex-1 bg-border" />
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.skills.map((skill, si) => (
                <Reveal key={skill.name} delay={(gi * 0.03) + si * 0.05}>
                  <motion.div
                    data-cursor-hover
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                  >
                    <div className="flex items-center gap-3">
                      <TechIcon name={skill.icon} className="h-8 w-8 shrink-0" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                      {skill.description}
                    </p>
                    <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-brand/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
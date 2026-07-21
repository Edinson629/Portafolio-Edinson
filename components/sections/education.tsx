'use client'

import { motion } from 'motion/react'
import { Award, GraduationCap } from 'lucide-react'
import { certificates, education } from '@/lib/data'
import { Reveal, SectionHeading } from '@/components/reveal'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Formación"
        title="Educación y certificados"
        description="Aprendizaje continuo y especialización constante."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Timeline */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-brand" />
            Educación
          </h3>
          <div className="relative space-y-8 border-l border-border pl-6">
            {education.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-background bg-brand" />
                  <span className="text-xs font-medium text-brand">{item.period}</span>
                  <h4 className="mt-1 font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            <Award className="h-4 w-4 text-brand" />
            Certificados
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {certificates.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 [@media(hover:none)]:border-brand/40 [@media(hover:none)]:shadow-lg [@media(hover:none)]:shadow-brand/5"
                >
                  <Award className="h-6 w-6 text-brand" />
                  <h4 className="mt-3 text-sm font-medium leading-snug">{cert.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
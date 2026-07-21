'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight, Lightbulb, TrendingUp } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { projects } from '@/lib/data'
import { Reveal, SectionHeading } from '@/components/reveal'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-(-20) border-y border-border bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo seleccionado"
          description="Soluciones reales a problemas reales, con resultados medibles."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Vista previa del proyecto ${project.title}`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-100 transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
                  <div className="absolute right-3 top-3 flex gap-2 opacity-100 transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.title} en GitHub`}
                      className="glass flex h-9 w-9 items-center justify-center rounded-full border border-border"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demo de ${project.title}`}
                      className="glass flex h-9 w-9 items-center justify-center rounded-full border border-border"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>)}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-2 text-sm">
                    <p className="flex gap-2 text-muted-foreground">
                      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>
                        <span className="font-medium text-foreground">Problema: </span>
                        {project.problem}
                      </span>
                    </p>
                    <p className="flex gap-2 text-muted-foreground">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>
                        <span className="font-medium text-foreground">Resultado: </span>
                        {project.result}
                      </span>
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
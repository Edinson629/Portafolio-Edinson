'use client'

import { motion } from 'motion/react'
import { Mail, MessageCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'
import { Reveal } from '@/components/reveal'

const channels = [
  {
    label: 'LinkedIn',
    value: 'edinson-palacio',
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'Edinson629',
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: 'Gmail',
    value: profile.email,
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: 'Escríbeme',
    href: `https://wa.me/${profile.whatsapp}`,
    icon: MessageCircle,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Contacto
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h4 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Construyamos soluciones 
          </h4>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            ¿Tienes un proyecto o una oportunidad? Estoy listo para aportar valor a tu equipo.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-xl gap-3 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <motion.a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition-colors hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 [@media(hover:none)]:border-brand/40 [@media(hover:none)]:shadow-lg [@media(hover:none)]:shadow-brand/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{c.label}</span>
                  <span className="block text-xs text-muted-foreground">{c.value}</span>
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
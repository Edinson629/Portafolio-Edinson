'use client'

import { stats } from '@/lib/data'
import { AnimatedCounter } from '@/components/animated-counter'
import { Reveal } from '@/components/reveal'

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <div className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

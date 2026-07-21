'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    setEnabled(true)
    document.documentElement.classList.add('cursor-none-desktop')

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      const el = e.target as HTMLElement
      setHovering(Boolean(el.closest('a, button, [data-cursor-hover]')))
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('cursor-none-desktop')
    }
  }, [cursorX, cursorY])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ translateX: springX, translateY: springY }}
        className="pointer-events-none fixed left-0 top-0 z-70 -ml-4 -mt-4 hidden md:block"
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.35 : 0.6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="h-8 w-8 rounded-full border border-brand"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ translateX: cursorX, translateY: cursorY }}
        className="pointer-events-none fixed left-0 top-0 z-70 -ml-1 -mt-1 hidden md:block"
      >
        <div className="h-2 w-2 rounded-full bg-brand" />
      </motion.div>
    </>
  )
}

import { Loader } from '@/components/loader'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Stats } from '@/components/sections/stats'
import { Education } from '@/components/sections/education'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Stats />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Education } from '@/components/portfolio/education'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-coral bg-grain text-navy">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t-4 border-navy bg-navy py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:text-left">
          <p className="font-pixel text-[10px] text-cream">
            © 2026 Aryapriya Panigrahi
          </p>
          <p className="text-sm text-cream/70">
            Creative Portfolio · Built with care
          </p>
        </div>
      </footer>
    </div>
  )
}

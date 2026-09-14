import { PixelHeart } from './pixel-art'

export function About() {
  return (
    <section id="about" className="border-b-4 border-navy bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex items-center gap-3">
          <PixelHeart className="w-6" />
          <h2 className="font-pixel text-2xl text-navy sm:text-3xl">
            about me
          </h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <p className="text-xl leading-relaxed text-navy-deep md:col-span-2">
            I&apos;m a second-year Production Engineering student at{' '}
            <span className="bg-gold px-1 font-bold">VSSUT, Burla</span>, with a
            strong interest in manufacturing, CAD/CAM, and automobile
            technology. Alongside my core engineering journey, I&apos;m
            developing skills in programming and software development,
            particularly Java. I enjoy combining engineering knowledge with
            technology to understand, build, and solve real-world problems.
          </p>
          <ul className="space-y-3">
            {[
              ['Based in', 'Odisha, India'],
              ['Focus', 'Manufacturing + Code'],
              ['Year', 'B.Tech · 2nd Year'],
            ].map(([k, v]) => (
              <li
                key={k}
                className="border-4 border-navy bg-coral p-4 shadow-pixel-sm"
              >
                <span className="block font-pixel text-[9px] uppercase tracking-widest text-cream">
                  {k}
                </span>
                <span className="mt-1 block font-bold text-cream">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

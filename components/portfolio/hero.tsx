import Image from 'next/image'
import { GameBoy, PixelInvader, PixelStar } from './pixel-art'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-4 border-navy"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-20">
        <div className="relative z-10">
          <p className="font-pixel text-[10px] uppercase tracking-widest text-cream">
            Creative Portfolio
          </p>
          <h1 className="mt-4 font-pixel text-5xl leading-[1.1] text-cream drop-shadow-[4px_4px_0_#003e93] sm:text-6xl lg:text-7xl">
            PORT
            <br />
            <span className="text-gold">FOLIO</span>
          </h1>
          <p className="mt-5 font-pixel text-sm text-navy sm:text-base">
            ARYAPRIYA PANIGRAHI
          </p>
          <p className="mt-4 max-w-md text-lg text-navy-deep">
            Production Engineering student blending manufacturing know-how with
            code to build and solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="border-4 border-navy bg-navy px-6 py-3 font-pixel text-xs text-cream shadow-pixel-gold transition-transform hover:-translate-y-1"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border-4 border-navy bg-cream px-6 py-3 font-pixel text-xs text-navy shadow-pixel transition-transform hover:-translate-y-1"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <GameBoy className="absolute -top-2 right-2 z-20 w-16 animate-float sm:w-20" />
          <PixelStar className="absolute right-1/3 top-0 w-6 sm:w-8" />
          <PixelInvader className="absolute bottom-4 left-0 z-20 w-14 animate-float sm:w-16" />
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-6 rounded-full border-4 border-dashed border-navy/40" />
            <Image
              src="/images/hero-character.png"
              alt="Illustration of Aryapriya relaxing with a book"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-contain drop-shadow-[6px_6px_0_rgba(0,42,102,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

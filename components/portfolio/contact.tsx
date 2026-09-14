import { PixelHeart, PixelInvader } from './pixel-art'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="font-pixel text-[10px] uppercase tracking-widest text-coral">
          Let&apos;s
        </p>
        <h2 className="mt-3 font-pixel text-3xl text-navy sm:text-5xl">
          Contact me
        </h2>
        <p className="mt-5 max-w-xl text-lg text-navy-deep">
          Got a project, an idea, or just want to say hi? My inbox is always
          open.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href="mailto:arhi.pani07@gmail.com"
            className="group flex items-center gap-4 border-4 border-navy bg-navy p-6 shadow-pixel-gold transition-transform hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-navy bg-cream">
              <img
                src="https://thesvg.org/icons/gmail/default.svg"
                alt="Gmail logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </span>
            <span className="min-w-0">
              <span className="font-pixel text-[10px] uppercase tracking-widest text-gold">
                Email
              </span>
              <span className="mt-2 block break-all text-lg font-bold text-cream group-hover:underline">
                arhi.pani07@gmail.com
              </span>
            </span>
          </a>
          <a
            href="https://wa.me/916370204047"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-4 border-navy bg-coral p-6 shadow-pixel transition-transform hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-navy bg-cream">
              <img
                src="https://thesvg.org/icons/whatsapp/default.svg"
                alt="WhatsApp logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </span>
            <span className="min-w-0">
              <span className="font-pixel text-[10px] uppercase tracking-widest text-cream">
                WhatsApp
              </span>
              <span className="mt-2 block text-lg font-bold text-cream group-hover:underline">
                +91 63702 04047
              </span>
            </span>
          </a>
          <a
            href="https://github.com/ARHI-pani"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-4 border-navy bg-coral p-6 shadow-pixel transition-transform hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-navy bg-cream">
              <img
                src="https://thesvg.org/icons/github/default.svg"
                alt="GitHub logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </span>
            <span className="min-w-0">
              <span className="font-pixel text-[10px] uppercase tracking-widest text-cream">
                GitHub
              </span>
              <span className="mt-2 block break-all text-lg font-bold text-cream group-hover:underline">
                github.com/ARHI-pani
              </span>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/aryapriya4047"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-4 border-navy bg-navy p-6 shadow-pixel-gold transition-transform hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-navy bg-cream">
              <img
                src="https://thesvg.org/icons/linkedin/default.svg"
                alt="LinkedIn logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </span>
            <span className="min-w-0">
              <span className="font-pixel text-[10px] uppercase tracking-widest text-gold">
                LinkedIn
              </span>
              <span className="mt-2 block break-all text-lg font-bold text-cream group-hover:underline">
                linkedin.com/in/aryapriya4047
              </span>
            </span>
          </a>
        </div>
      </div>
      <PixelInvader className="pointer-events-none absolute -bottom-2 right-6 w-20 opacity-90" />
      <PixelHeart className="pointer-events-none absolute right-40 top-10 hidden w-6 sm:block" />
    </section>
  )
}

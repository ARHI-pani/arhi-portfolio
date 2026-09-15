import Image from 'next/image'
const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-navy bg-coral/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
       <a
  href="#top"
  className="flex items-center gap-2"
>
  <Image
    src="/logo.png"
    alt="Aryapriya Panigrahi logo"
    width={42}
    height={42}
    className="object-contain"
    priority
  />
  <span className="font-pixel text-sm text-cream drop-shadow-[2px_2px_0_#003e93]">
    port<span className="text-gold">folio</span>
  </span>
</a>
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-none px-3 py-2 text-xs font-bold uppercase tracking-widest text-navy transition-colors hover:bg-navy hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="border-2 border-navy bg-gold px-3 py-2 font-pixel text-[10px] text-navy shadow-pixel-sm transition-transform hover:-translate-y-0.5 sm:hidden"
        >
          Hi
        </a>
      </nav>
    </header>
  )
}

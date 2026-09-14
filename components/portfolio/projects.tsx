const coreProjects = [
  { name: 'Bench Vise', image: '/images/project-bench-vise.png' },
  { name: 'Robo Arm', image: '/images/project-robo-arm.png' },
  { name: 'Plummer Joint', image: '/images/project-plummer-joint.png' },
]

const techProjects = [
  {
    name: 'Manufacturing Quality Check',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    blurb:
      'A machine learning model that predicts manufacturing quality from production data, combining data analysis with manufacturing concepts.',
    repo: 'https://github.com/ARHI-pani/1st_ml_py.git',
  },
  {
    name: 'Personal Expense Tracker',
    stack: ['Java', 'Logic Building', 'App Development'],
    blurb:
      'A Java-based tracker to record and organize daily expenses — a simple, practical system built with an emphasis on consistency.',
    repo: 'https://github.com/ARHI-pani/MY-THIRD-PROJECT---PERSONAL-EXPENSE-TRACER.git',
  },
]

export function Projects() {
  return (
    <section id="work" className="border-b-4 border-navy bg-coral bg-grain">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="font-pixel text-[10px] uppercase tracking-widest text-navy">
          Recent Works
        </p>
        <h2 className="mt-3 font-pixel text-3xl text-cream drop-shadow-[3px_3px_0_#003e93] sm:text-4xl">
          Projects
        </h2>

        {/* Core projects */}
        <div className="mt-10 border-4 border-navy bg-cream p-6 shadow-pixel md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-pixel text-lg text-navy">
              <span className="text-coral">01</span> Core Projects
            </h3>
            <span className="font-pixel text-[10px] text-navy/60">
              Engineering
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-navy-deep">
            A collection of core engineering projects focused on design,
            manufacturing, and practical problem-solving through CAD, modelling,
            and hands-on learning.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {coreProjects.map((p) => (
              <li
                key={p.name}
                className="overflow-hidden border-4 border-navy bg-gold shadow-pixel-sm transition-transform hover:-translate-y-1"
              >
                <div className="border-b-4 border-navy bg-white">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={`SolidWorks model of ${p.name}`}
                    className="aspect-[4/3] w-full object-cover object-center"
                  />
                </div>
                <p className="p-4 text-center font-pixel text-xs uppercase text-navy">
                  {p.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech projects */}
        <div className="mt-8 border-4 border-navy bg-navy p-6 shadow-pixel-gold md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-pixel text-lg text-gold">
              <span className="text-cream">02</span> Tech Projects
            </h3>
          </div>
          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {techProjects.map((p) => (
              <li
                key={p.name}
                className="flex flex-col border-4 border-cream bg-cream p-5"
              >
                <h4 className="font-pixel text-[11px] uppercase leading-relaxed text-navy">
                  {p.name}
                </h4>
                <p className="mt-3 flex-1 text-sm text-navy-deep">{p.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="border-2 border-navy px-2 py-1 text-[11px] font-bold text-navy"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 border-4 border-navy bg-gold px-3 py-2 font-pixel text-[10px] uppercase text-navy shadow-pixel-sm transition-transform hover:-translate-y-0.5"
                >
                  View on GitHub ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

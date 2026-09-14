const timeline = [
  {
    stage: 'Secondary Education',
    school: 'SSVM, NayaBazar, Bdk',
    years: '2011 – 2023',
    score: '90.33%',
  },
  {
    stage: 'Intermediate',
    school: 'SVM, Neelakantha Nagar, BAM',
    years: '2023 – 2025',
    score: '81.5%',
  },
  {
    stage: 'Undergraduate',
    school: 'B.Tech — VSSUT, Burla',
    years: '2025 – Present',
    score: 'Ongoing',
  },
]

export function Education() {
  return (
    <section id="education" className="border-b-4 border-navy bg-navy">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="font-pixel text-2xl text-gold sm:text-3xl">Education</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/90">
          Currently pursuing B.Tech in Production Engineering at VSSUT, Burla,
          building a strong foundation in manufacturing, CAD/CAM, and
          engineering problem-solving — while exploring programming to broaden
          my skill set.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {timeline.map((item, i) => (
            <li
              key={item.stage}
              className="flex flex-col border-4 border-cream bg-cream p-5 shadow-pixel-gold"
            >
              <span className="font-pixel text-[10px] text-coral">
                0{i + 1}
              </span>
              <span className="mt-3 font-pixel text-[11px] uppercase leading-relaxed text-navy">
                {item.stage}
              </span>
              <span className="mt-3 text-lg font-bold text-navy-deep">
                {item.school}
              </span>
              <span className="mt-1 text-sm text-navy/70">{item.years}</span>
              <span className="mt-4 inline-block w-fit border-2 border-navy bg-gold px-3 py-1 font-pixel text-[11px] text-navy">
                {item.score}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

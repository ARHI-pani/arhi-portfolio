import { PixelStar } from './pixel-art'

const groups = [
  {
    title: 'Core Engineering',
    color: 'bg-coral',
    text: 'text-cream',
    items: [
      'Production Engineering',
      'Manufacturing Processes',
      'CAD / CAM',
      'SolidWorks',
    ],
  },
  {
    title: 'Technology',
    color: 'bg-coral',
    text: 'text-cream',
    items: [
      'Java',
      'Python',
      'C',
      'MySQL',
      'Git',
      'GitHub',
      'Digital Tools',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-b-4 border-navy bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex items-center gap-3">
          <PixelStar className="w-7 animate-float" />
          <h2 className="font-pixel text-2xl text-navy sm:text-3xl">
            my skills
          </h2>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-deep">
          My skills sit across two complementary areas — core engineering and
          technology. I enjoy combining both to approach engineering problems
          with a practical, technology-driven mindset.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className={`border-4 border-navy ${group.color} p-6 shadow-pixel`}
            >
              <h3 className={`font-pixel text-sm ${group.text}`}>
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-navy bg-cream px-3 py-2 text-sm font-bold text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

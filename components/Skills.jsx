import { skillGroups } from '@/data/siteData'
import { SmallOrb, WaveShape } from './Shapes'

function SkillCard({ group }) {
  const isLarge = group.size === 'large'
  return (
    <div className={`skill-card ${isLarge ? 'skill-card-large' : ''}`}>
      {/* Decoration */}
      {isLarge && (
        <div className="skill-card-orb">
          <SmallOrb color="#E8B4B8" size={80} />
        </div>
      )}

      <span className="skill-category">
        {group.category}
      </span>
      <div className="skill-items">
        {group.items.map((item) => (
          <span key={item} className="skill-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="skills-wave-bg">
        <WaveShape className="skills-wave-svg" />
      </div>

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title section-title-md">
            Skills &amp; Tools
          </h2>
          <p className="section-desc">
            Technologies I&apos;ve worked with and tools I use in my learning journey.
          </p>
        </div>

        {/* Bento grid */}
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <SkillCard key={g.category} group={g} />
          ))}
        </div>
      </div>
    </section>
  )
}

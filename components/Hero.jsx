import Image from 'next/image'
import { HeroOrb, WaveShape, SmallOrb, AbstractBlob, DotGrid } from './Shapes'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background decorative wave */}
      <div className="hero-bg-decorations">
        <WaveShape className="hero-wave" />
        <DotGrid className="hero-dot-grid-right" />
        <DotGrid className="hero-dot-grid-left" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">

          {/* Left: Text */}
          <div className="hero-text">
            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-text">
                Software Development Student
              </span>
            </div>

            {/* H1 */}
            <h1 className="hero-h1">
              Hi, I&apos;m{' '}
              <span className="hero-h1-gradient">Rahma Santika Al Anshori.</span>
            </h1>

            <p className="hero-subtitle font-display">
              I build digital experiences<br />
              with code &amp; creativity.
            </p>

            <p className="hero-desc">
              Saya adalah siswa SMK Negeri 1 Cianjur jurusan Rekayasa Perangkat Lunak yang tertarik pada
              web development, UI/UX, dan pengembangan aplikasi. Saya senang mengubah
              ide menjadi produk digital yang fungsional dan memiliki visual yang menarik.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <a href="#projects" className="hero-btn-primary">
                View My Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="hero-btn-secondary">
                Let&apos;s Talk
              </a>
            </div>

            {/* Small badges */}
            <div className="hero-tags">
              {['RPL Student', 'Web Development', 'UI / UX', 'Always Learning'].map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Abstract composition */}
          <div className="hero-visual">
            {/* Large blob background */}
            <AbstractBlob className="hero-blob-bg" />

            {/* Main orb */}
            <div className="hero-orb-container">
              <HeroOrb className="hero-orb-svg" />

              {/* Profile image */}
              <div className="hero-profile-shape">
                <Image
                  src="/images/rahma.jpeg"
                  alt="Rahma Santika Al Anshori"
                  width={220}
                  height={260}
                  className="hero-profile-img"
                  priority
                />
                <div className="hero-profile-overlay" />
              </div>

              {/* Floating badge: RPL Student */}
              <div className="hero-floating-badge hero-badge-rpl glass">
                <div className="hero-badge-dot" />
                <span className="hero-badge-text">
                  RPL Student
                </span>
              </div>

              {/* Floating badge: Always Learning */}
              <div className="hero-floating-badge hero-badge-learning glass">
                <span className="hero-badge-text-muted">
                  ✦ Always Learning
                </span>
              </div>

              {/* Small floating orb */}
              <div className="hero-small-orb-1">
                <SmallOrb color="#C77D87" size={52} opacity={0.8} />
              </div>
              <div className="hero-small-orb-2">
                <SmallOrb color="#F6DDE0" size={36} opacity={0.9} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

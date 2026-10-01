import { contactInfo } from '@/data/siteData'
import { HeroOrb, SmallOrb } from './Shapes'

export default function Contact() {
  const email = contactInfo.email
  const instagram = contactInfo.instagram
  const github = contactInfo.github
  const linkedin = contactInfo.linkedin

  const contactItems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: email || 'Add your email',
      href: email ? `mailto:${email}` : null,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      label: 'Instagram',
      value: '@xvss_antkaa',
      href: instagram || 'https://www.instagram.com/xvss_antkaa',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      label: 'GitHub',
      value: 'Rahmasantikaanshori01',
      href: github || 'https://github.com/Rahmasantikaanshori01',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Rahma Santika Al Anshori',
      href: linkedin || 'https://id.linkedin.com/in/rahma-santika-al-anshori-73153540b',
    },
  ]

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="contact-container">
        <div className="contact-grid">

          {/* Left: Contact info */}
          <div>
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-title section-title-md">
              Let&apos;s Connect
            </h2>
            <p className="contact-desc">
              Punya ide project atau ingin berdiskusi tentang teknologi? Saya terbuka
              untuk terhubung dan belajar bersama.
            </p>

            <div className="contact-items">
              {contactItems.map((item) => {
                const Tag = item.href ? 'a' : 'div'
                const linkProps = item.href
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : {}

                return (
                  <Tag key={item.label} className="contact-item" {...linkProps}>
                    <div className="contact-item-icon">
                      {item.icon}
                    </div>
                    <div className="contact-item-content">
                      <div className="contact-item-label">
                        {item.label}
                      </div>
                      <div className="contact-item-value">
                        {item.value}
                      </div>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="contact-item-arrow"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Tag>
                )
              })}
            </div>
          </div>

          {/* Right: Visual CTA */}
          <div className="contact-cta">
            <div className="contact-cta-card">
              {/* Decoration */}
              <HeroOrb className="contact-cta-orb-top" />
              <HeroOrb className="contact-cta-orb-bottom" />
              <div className="contact-cta-small-orb">
                <SmallOrb color="#FFF9F7" size={32} opacity={0.6} />
              </div>

              <p className="contact-cta-title font-display">
                Have an idea?
              </p>
              <p className="contact-cta-subtitle font-display">
                Let&apos;s build something meaningful.
              </p>
              {email ? (
                <a href={`mailto:${email}`} className="contact-cta-btn">
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <button className="contact-cta-btn" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

/* ─── Abstract shapes mockup (for projects without a cover image) ─── */
function ProjectMockup({ color, title }) {
  return (
    <div
      className="project-mockup"
      style={{
        background: `linear-gradient(135deg, ${color}25 0%, ${color}50 100%)`,
      }}
    >
      {/* Abstract UI mockup shapes */}
      <div className="project-mockup-shapes">
        <div style={{ height: 36, borderRadius: 10, background: `${color}60`, width: '70%' }} />
        <div style={{ height: 20, borderRadius: 8, background: `${color}40`, width: '90%' }} />
        <div style={{ height: 20, borderRadius: 8, background: `${color}30`, width: '60%' }} />
        <div className="project-mockup-cards">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 120,
                borderRadius: 16,
                background: i === 1 ? `${color}70` : i === 2 ? `${color}50` : `${color}35`,
                boxShadow: `0 4px 16px ${color}30`,
              }}
            />
          ))}
        </div>
        <div style={{ height: 16, borderRadius: 8, background: `${color}30`, width: '80%', marginTop: 8 }} />
        <div style={{ height: 16, borderRadius: 8, background: `${color}20`, width: '55%' }} />
      </div>

      {/* Overlay label */}
      <div className="project-mockup-label glass">
        <span className="project-mockup-label-text font-display">
          {title}
        </span>
        <div className="project-mockup-dot" style={{ background: color }} />
      </div>
    </div>
  )
}

/* ─── Single cover image mockup (e.g. Dailymuslim, Plenary) ─── */
function ProjectCoverMockup({ coverImage, color, title, type }) {
  const isMobile = type === 'mobile'
  return (
    <div
      className={`project-mockup project-mockup-cover ${isMobile ? 'project-mockup-mobile' : ''}`}
      style={{
        background: `linear-gradient(135deg, ${color}25 0%, ${color}50 100%)`,
      }}
    >
      <img
        src={coverImage}
        alt={title}
        className={`project-cover-img ${isMobile ? 'project-cover-img-mobile' : ''}`}
      />
      {/* Overlay label */}
      <div className="project-mockup-label glass">
        <span className="project-mockup-label-text font-display">
          {title}
        </span>
        <div className="project-mockup-dot" style={{ background: color }} />
      </div>
    </div>
  )
}

/* ─── Animated cover images mockup (e.g. ERM dashboards) ─── */
function ProjectAnimatedCoverMockup({ coverImages, coverLabels, color, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!coverImages || coverImages.length <= 1) return
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % coverImages.length)
        setIsTransitioning(false)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [coverImages])

  if (!coverImages || coverImages.length === 0) return null

  const label = coverLabels ? coverLabels[currentIndex] : title

  return (
    <div
      className="project-mockup project-mockup-cover project-mockup-animated"
      style={{
        background: `linear-gradient(135deg, ${color}25 0%, ${color}50 100%)`,
      }}
    >
      <img
        src={coverImages[currentIndex]}
        alt={label}
        className={`project-cover-img project-cover-img-animated ${isTransitioning ? 'fade-out' : 'fade-in'}`}
      />
      {/* Role label indicator */}
      <div className="project-animated-indicator">
        {coverImages.map((_, i) => (
          <button
            key={i}
            className={`project-indicator-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentIndex(i)
                setIsTransitioning(false)
              }, 300)
            }}
            aria-label={coverLabels ? coverLabels[i] : `Slide ${i + 1}`}
          />
        ))}
      </div>
      {/* Overlay label */}
      <div className="project-mockup-label glass">
        <span className="project-mockup-label-text font-display">
          {label}
        </span>
        <div className="project-mockup-dot" style={{ background: color }} />
      </div>
    </div>
  )
}

/* ─── Screenshot Gallery Modal (flat list for Dailymuslim / Plenary) ─── */
function ScreenshotModal({ screenshots, isOpen, onClose, projectTitle, projectType }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }, [screenshots.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }, [screenshots.length])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, handlePrev, handleNext])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const isMobile = projectType === 'mobile'

  return (
    <div className="screenshot-modal-overlay" onClick={onClose}>
      <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="screenshot-modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <div className="screenshot-modal-header">
          <h3 className="screenshot-modal-title font-display">{projectTitle}</h3>
          <span className="screenshot-modal-counter">
            {currentIndex + 1} / {screenshots.length}
          </span>
        </div>

        {/* Gallery area */}
        <div className="screenshot-gallery">
          {/* Prev button */}
          <button
            className="screenshot-nav-btn"
            onClick={handlePrev}
            aria-label="Previous screenshot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Screenshot image */}
          <div className={`screenshot-image-wrapper ${isMobile ? 'screenshot-image-mobile' : ''}`}>
            <img
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].label}
              className="screenshot-full-img"
            />
          </div>

          {/* Next button */}
          <button
            className="screenshot-nav-btn"
            onClick={handleNext}
            aria-label="Next screenshot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        <p className="screenshot-caption">{screenshots[currentIndex].label}</p>

        {/* Thumbnails */}
        <div className="screenshot-thumbnails">
          {screenshots.map((s, i) => (
            <button
              key={i}
              className={`screenshot-thumb ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={s.label}
            >
              <img src={s.src} alt={s.label} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Grouped Screenshot Modal (for ERM with tabs) ─── */
function GroupedScreenshotModal({ screenshotGroups, isOpen, onClose, projectTitle }) {
  const [activeGroup, setActiveGroup] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const thumbnailsRef = useRef(null)

  const group = screenshotGroups[activeGroup]
  const screenshots = group ? group.screenshots : []
  const isMobileGroup = group ? group.type === 'mobile' : false

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }, [screenshots.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }, [screenshots.length])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, handlePrev, handleNext])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset index when changing groups
  useEffect(() => {
    setCurrentIndex(0)
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollLeft = 0
    }
  }, [activeGroup])

  if (!isOpen) return null

  return (
    <div className="screenshot-modal-overlay" onClick={onClose}>
      <div className="screenshot-modal-content screenshot-modal-grouped" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="screenshot-modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <div className="screenshot-modal-header">
          <h3 className="screenshot-modal-title font-display">{projectTitle}</h3>
          <span className="screenshot-modal-counter">
            {currentIndex + 1} / {screenshots.length}
          </span>
        </div>

        {/* Group tabs */}
        <div className="screenshot-group-tabs">
          {screenshotGroups.map((g, i) => (
            <button
              key={i}
              className={`screenshot-group-tab ${i === activeGroup ? 'active' : ''}`}
              onClick={() => setActiveGroup(i)}
            >
              {g.type === 'mobile' && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              )}
              {g.group}
            </button>
          ))}
        </div>

        {/* Gallery area */}
        <div className="screenshot-gallery">
          {/* Prev button */}
          <button
            className="screenshot-nav-btn"
            onClick={handlePrev}
            aria-label="Previous screenshot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Screenshot image */}
          <div className={`screenshot-image-wrapper ${isMobileGroup ? 'screenshot-image-mobile' : ''}`}>
            <img
              src={screenshots[currentIndex]?.src}
              alt={screenshots[currentIndex]?.label}
              className="screenshot-full-img"
            />
          </div>

          {/* Next button */}
          <button
            className="screenshot-nav-btn"
            onClick={handleNext}
            aria-label="Next screenshot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        <p className="screenshot-caption">
          <span className="screenshot-caption-group">{group.group}</span>
          {' — '}
          {screenshots[currentIndex]?.label}
        </p>

        {/* Thumbnails */}
        <div className="screenshot-thumbnails" ref={thumbnailsRef}>
          {screenshots.map((s, i) => (
            <button
              key={i}
              className={`screenshot-thumb ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={s.label}
            >
              <img src={s.src} alt={s.label} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Main Project Card ─── */
export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false)

  const hasDemo = project.demoUrl && project.demoUrl.length > 0
  const hasGithub = project.githubUrl && project.githubUrl.length > 0
  const hasScreenshots = project.screenshots && project.screenshots.length > 0
  const hasScreenshotGroups = project.screenshotGroups && project.screenshotGroups.length > 0
  const hasCover = project.coverImage && project.coverImage.length > 0
  const hasAnimatedCover = project.coverImages && project.coverImages.length > 0
  const hasDetail = hasScreenshots || hasScreenshotGroups

  return (
    <>
      <article className="project-card">
        {/* Image / Mockup */}
        <div
          className={`project-mockup-wrapper ${project.flipped ? 'order-2' : 'order-1'}`}
        >
          {hasAnimatedCover ? (
            <ProjectAnimatedCoverMockup
              coverImages={project.coverImages}
              coverLabels={project.coverLabels}
              color={project.color}
              title={project.title}
            />
          ) : hasCover ? (
            <ProjectCoverMockup
              coverImage={project.coverImage}
              color={project.color}
              title={project.title}
              type={project.type}
            />
          ) : (
            <ProjectMockup color={project.color} title={project.title} />
          )}
        </div>

        {/* Info */}
        <div className={`project-info ${project.flipped ? 'order-1' : 'order-2'}`}>
          <span className="project-num font-display">
            {project.number}
          </span>
          <div style={{ marginBottom: 4 }}>
            <span className="project-subtitle">
              {project.subtitle}
            </span>
          </div>
          <h3 className="project-title font-display">
            {project.title}
          </h3>
          <p className="project-desc">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="project-tech-badges">
            {project.technologies.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="project-buttons">
            {hasDetail ? (
              <button
                className="project-btn-primary"
                onClick={() => setModalOpen(true)}
              >
                View Details
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </button>
            ) : hasDemo ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-primary"
              >
                Live Demo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ) : (
              <button className="project-btn-primary disabled" disabled aria-label="Live Demo (coming soon)">
                Live Demo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-secondary"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            ) : (
              <button className="project-btn-secondary disabled" disabled aria-label="GitHub (coming soon)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </button>
            )}
          </div>
        </div>
      </article>

      {/* Screenshot modal — grouped (ERM) */}
      {hasScreenshotGroups && (
        <GroupedScreenshotModal
          screenshotGroups={project.screenshotGroups}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectTitle={project.title}
        />
      )}

      {/* Screenshot modal — flat list (Dailymuslim, Plenary) */}
      {hasScreenshots && !hasScreenshotGroups && (
        <ScreenshotModal
          screenshots={project.screenshots}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectTitle={project.title}
          projectType={project.type}
        />
      )}
    </>
  )
}

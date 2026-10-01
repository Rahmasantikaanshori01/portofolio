import { SmallOrb, AbstractBlob } from './Shapes'

export default function About() {
  const highlights = ['RPL Student', 'Web Development', 'UI / UX', 'Mobile Development', 'Always Learning']

  return (
    <section id="about" className="section-padding about-section">
      {/* Background decoration */}
      <AbstractBlob className="about-blob-bg" />

      <div className="about-container">
        <div className="about-grid">

          {/* Left: Text */}
          <div className="about-text">
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title section-title-md" style={{ marginBottom: 24 }}>
              Behind the code
            </h2>
            <p>
              Saya adalah siswa SMK Negeri 1 Cianjur jurusan Rekayasa Perangkat Lunak yang sedang memperdalam
              kemampuan di bidang pengembangan aplikasi dan website. Saya menikmati proses
              belajar melalui project nyata, mulai dari membuat interface hingga menghubungkan
              aplikasi dengan database.
            </p>
            <p>
              Ke depannya, saya ingin terus berkembang sebagai seorang developer yang tidak
              hanya memahami teknis pemrograman, tetapi juga memiliki kepekaan terhadap
              desain dan pengalaman pengguna. Setiap project adalah kesempatan baru untuk belajar.
            </p>

            {/* Highlights */}
            <div className="about-highlights">
              {highlights.map((h) => (
                <span key={h} className="about-badge">
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual composition */}
          <div className="about-visual">
            {/* Main card */}
            <div className="about-card">
              {/* Abstract shape inside card */}
              <div className="about-card-orb-top">
                <SmallOrb color="#C77D87" size={120} />
              </div>
              <div className="about-card-orb-bottom">
                <SmallOrb color="#FFF9F7" size={100} />
              </div>

              {/* Code snippet visual */}
              <div className="about-code-snippet">
                <div className="about-code-dots">
                  <div className="about-code-dot" style={{ background: '#ff6b6b' }} />
                  <div className="about-code-dot" style={{ background: '#ffd93d' }} />
                  <div className="about-code-dot" style={{ background: '#6bcb77' }} />
                </div>
                <div className="about-code-lines">
                  {[
                    { color: '#D99AA2', text: 'const rahma = {' },
                    { color: '#81767D', text: '  role: "RPL Student",' },
                    { color: '#81767D', text: '  passion: "code & design",' },
                    { color: '#81767D', text: '  status: "always learning"' },
                    { color: '#D99AA2', text: '};' },
                  ].map((line, i) => (
                    <div key={i} className="about-code-line" style={{ color: line.color }}>
                      {line.text}
                    </div>
                  ))}
                </div>
              </div>

              <p className="about-card-quote">
                &quot;Turning ideas into beautiful,{' '}
                <span>functional</span> digital products.&quot;
              </p>
            </div>

            {/* Floating decoration */}
            <div className="about-floating-orb">
              <SmallOrb color="#E8B4B8" size={64} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

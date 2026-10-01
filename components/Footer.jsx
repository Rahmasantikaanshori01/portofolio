export default function Footer() {
  const links = ['Home', 'Projects', 'About', 'Skills', 'Contact']
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <span className="footer-brand font-display">
            Rahma Santika Al Anshori
          </span>

          <nav className="footer-nav">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Rahma Santika Al Anshori. Built with curiosity and code.
          </p>
        </div>
      </div>
    </footer>
  )
}

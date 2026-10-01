import './globals.css'

export const metadata = {
  title: 'Rahma Santika Al Anshori — Personal Portfolio',
  description: 'Personal portfolio of Rahma Santika Al Anshori, a Software Development student showcasing projects, skills, and digital experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

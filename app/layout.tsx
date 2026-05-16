import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Yahan ab koi Navbar ka import ya tag nahi hona chahiye */}
        {children}
      </body>
    </html>
  )
}
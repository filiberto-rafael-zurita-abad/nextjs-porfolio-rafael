import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Zurita | Porfolio',
  description: 'Tutor Transitioning to Data and Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="vL-pMo5xJB5P3PJHL9ZevQS1ApJOmxOWuhjXvBctgBQ" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

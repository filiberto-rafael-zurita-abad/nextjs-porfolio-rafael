import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Filiberto Rafael Zurita Abad | Porfolio',
  description: 'Tutor Transitioning to Data Analytics and/or Cybersecurity',
  // Other meta tags as needed
  verification: {
    googleSiteVerification: 'vL-pMo5xJB5P3PJHL9ZevQS1ApJOmxOWuhjXvBctgBQ',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

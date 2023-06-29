import LandingNav from '@/components/layout/LandingNav'
import '../globals.css'
import { Inter } from 'next/font/google'
import LandingFooter from '@/components/layout/LandingFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn cooking online | COOK',
  description: "Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community",
}

export default function RootLayout({ children }) {
  return (
    <body>
      <LandingNav />
      {children}
      <LandingFooter />
    </body>
  )
}

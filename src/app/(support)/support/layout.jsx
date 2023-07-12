import SupportFooter from '@/components/Support/SupportFooter'
import SupportNav from '@/components/Support/SupportNav'
import React from 'react'
import "../../globals.css"

export const metadata = {
  title: 'Learn cooking online | COOK',
  description: "Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community",
}

export default function RootLayout({ children }) {
  return (
    <body>
      <SupportNav />
      {children}
      <SupportFooter />
    </body>
  )
}
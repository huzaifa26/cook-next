import React from 'react'
import '../globals.css'
import LegalNav from '@/components/layout/LegalNav'
import LandingFooter from '@/components/layout/LandingFooter'

export default function layout({ children }) {
  return (
    <body>
      <LegalNav />
      {children}
      <LandingFooter />
    </body>
  )
}

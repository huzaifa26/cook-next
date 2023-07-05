import DashboardLayout from '@/components/layout/DashboardLayout'
import '@/app/globals.css'
export default function layout({ children }) {
  return (
    <>
      <DashboardLayout />
      {children}
    </>
  )
}
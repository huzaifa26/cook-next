import DashboardLayout from '@/components/layout/DashboardLayout'

export default function layout({ children }) {
  return (
    <>
      <DashboardLayout />
      {children}
    </>
  )
}
'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Snow from '@/components/Snow'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    // لو كنا داخل لوحة تحكم سانتي، اعرض الصفحة لوحدها بدون هيدر أو فوتر أو تأثيرات
    return <>{children}</>
  }

  // لصفحات الموقع العادية، اعرض الهيدر والفوتر والثلوج بشكل طبيعي
  return (
    <>
      <Snow />
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </>
  )
}
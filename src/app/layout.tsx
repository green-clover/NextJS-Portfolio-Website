import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/app/font/font'

export const metadata: Metadata = {
  title: 'Sweet Clover',
  description: 'ReactJS Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white text-base leading-6`}>{children}</body>
    </html>
  )
}

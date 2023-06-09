import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const jet = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'StackOverflow Users',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jet.className}>{children}</body>
    </html>
  )
}

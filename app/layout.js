import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='flex ml-4 mt-4 text-4xl flex-auto'>
        <Link className=' ml-4 ' href='https://google.com'>Pioneer : 선구자들의 비망록</Link>
      </div>
        {children}</body>

    </html>
  )
}

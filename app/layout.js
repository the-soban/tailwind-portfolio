import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import ThemeBtn from './components/ThemeBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Site',
  description: 'Portfolio website built with NextJS and TailwindCSS',
}

function RootLayout({ children }) {
  return (
    <html lang="en" className='light' style={{ colorScheme: 'light' }}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html >
  )
}

export default RootLayout;
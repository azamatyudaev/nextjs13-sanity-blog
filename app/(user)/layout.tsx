import { PropsWithChildren } from 'react'
import '../../styles/tailwind.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <head />
      <body className="bg-gray-100">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout

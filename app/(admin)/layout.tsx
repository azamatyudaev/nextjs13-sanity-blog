import { PropsWithChildren } from 'react'
import '../../styles/tailwind.scss'

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

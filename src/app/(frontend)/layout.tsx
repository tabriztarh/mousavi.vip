import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fa" data-theme="mousavi-light">
      <body>
        <button className='btn'>bar umar lanat</button>
        <main>{children}</main>
      </body>
    </html>
  )
}

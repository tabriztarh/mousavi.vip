import React from 'react'
import './styles.css'
import localFont from 'next/font/local'

import NextTopLoader from 'nextjs-toploader'
import SpeedDial from './components/SpeedDial'
import { Toaster } from 'react-hot-toast'

import { getPayload } from 'payload'
import config from '@/payload.config'
import FooterBar from './components/FooterBar'
import AppBar from './components/AppBar'
import Helper from './components/Helper'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const vazirmatn = localFont({
  src: './assets/font/font.woff2',
})
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const options = await payload.findGlobal({
    slug: 'options',
  }) //cache it

  return (
    <html lang="fa" data-theme="mousavi-light" dir="rtl">
      <body
        className={`flex flex-col overflow-x-hidden min-h-screen mx-auto max-w-md bg-base-100 ${vazirmatn?.className}`}
      >
        <Helper />
        <NextTopLoader color="oklch(74% .12 230)" />
        <AppBar options={options} />
        {children}
        <FooterBar options={options} />
        <SpeedDial options={options} />
        <Toaster
          position="top-center"
          containerClassName="text-xs font-bold"
          containerStyle={{
            ...vazirmatn.style,
            direction: 'rtl',
          }}
        />{' '}
      </body>
    </html>
  )
}

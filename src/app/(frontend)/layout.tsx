import React from 'react'
import './styles.css'
import localFont from 'next/font/local'

import NextTopLoader from 'nextjs-toploader'
import SpeedDial from './components/SpeedDial'

import { getPayload } from 'payload'
import config from '@/payload.config'
import FooterBar from './components/FooterBar'

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
        className={`flex flex-col overflow-x-hidden min-h-screen mx-auto max-w-md bg-base-100 ${vazirmatn?.className} border-x border-primary`}
      >
        {' '}
        <NextTopLoader color="oklch(74% .12 230)" />
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">مهدیه موسوی</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>{' '}
              </svg>
            </button>
          </div>
        </div>
        {children}
        <FooterBar options={options} />
        <SpeedDial options={options} />
      </body>
    </html>
  )
}

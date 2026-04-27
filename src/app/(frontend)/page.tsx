import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import { Media } from '@/payload-types'
import Profile from './components/Profile'
import Link from 'next/link'
import MainMenu from './components/MainMenu'
import SocialMediaBar from './components/SocialMediaBar'
import CoursesMenu from './components/CoursesMenu'
import Posts from './components/Posts'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const options = await payload.findGlobal({
    slug: 'options',
  })

  const { docs: courses } = await payload.find({
    collection: 'courses',
    sort: 'id',
  })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 9,
    sort: '-createdAt',
  })
  return (
    <main className="grow flex flex-col items-center p-3 gap-3">
      <Profile options={options} />
      <SocialMediaBar options={options} />
      <div className="divider text-sm divider-accent">بخش ها</div>

      <MainMenu options={options} />
      <div className="divider text-sm divider-accent">دوره ها</div>
      <CoursesMenu courses={courses} />

      <div className="divider text-sm divider-accent">پست ها</div>
      <Posts posts={posts} />
    </main>
  )
}

import { getPayload } from 'payload'

import config from '@/payload.config'
import './styles.css'
import Profile from './components/Profile'
import MainMenu from './components/MainMenu'
import SocialMediaBar from './components/SocialMediaBar'
import CoursesMenu from './components/CoursesMenu'
import Posts from './components/Posts'
import { cache } from 'react'
export const getHomeData = cache(async () => {
  const payload = await getPayload({ config: await config })

  const options = await payload.findGlobal({
    slug: 'options',
  })

  const { docs: courses } = await payload.find({
    collection: 'courses',
    sort: 'id',
  })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { isActive: { equals: true } },
    limit: 9,
    sort: '-createdAt',
  })

  return { options, courses, posts }
})
export default async function HomePage() {
  const { options, courses, posts } = await getHomeData()
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

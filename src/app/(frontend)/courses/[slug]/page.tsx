import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import localFont from 'next/font/local'
const notoBlack = localFont({
  src: '../../assets/font/noto-black.woff2',
})
import config from '@/payload.config'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
const isEnglish = (s: string) => /^[A-Za-z]+$/.test(s)

const CoursePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const {
    docs: [course],
  } = await payload.find({
    collection: 'courses',
    where: {
      slug: { equals: slug },
    },
  })
  return (
    <div className="grow flex flex-col w-full p-3 gap-3">
      <div className="rounded-box bg-accent border-primary border h-30 w-full flex flex-col gap-3 justify-center items-center">
        <span className="badge badge-accent badge-outline bg-base-100 text-neutral border-primary border">
          دوره آموزشی
        </span>
        <span
          className={`badge badge-accent badge-outline bg-base-100  text-neutral badge-xl font-extrabold border-primary border ${isEnglish(course?.title as string) ? notoBlack?.className : ''}`}
        >
          {course?.title}
        </span>
      </div>
      <div className="text-justify border-accent border rounded-box p-3">
        <RichText data={course.content as SerializedEditorState} />
      </div>
    </div>
  )
}

export default CoursePage

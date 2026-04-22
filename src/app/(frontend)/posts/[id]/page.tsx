import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { notFound } from 'next/navigation'

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  console.log({ id })

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const post = await payload.findByID({
    collection: 'posts',
    id: parseInt(id),
  })

  if (!post) return notFound()
  return (
    <div className="grow flex flex-col w-full p-3 gap-3">
      {(post?.media as Media)?.url && (
        <div className="aspect-9/16 w-full relative rounded-box border border-accent overflow-hidden">
          <Image
            fill
            className="object-cover"
            src={(post?.media as Media)?.url as string}
            alt={(post?.media as Media)?.alt as string}
          />
        </div>
      )}
      {post?.caption && (
        <div className="w-full rounded-box border border-accent p-3">{post?.caption}</div>
      )}
    </div>
  )
}

export default PostPage

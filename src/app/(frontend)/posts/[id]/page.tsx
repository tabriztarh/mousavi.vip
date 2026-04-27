import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { notFound } from 'next/navigation'

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const post = await payload.findByID({
    collection: 'posts',
    id: parseInt(id),
  })

  if (!post) return notFound()

  const media = post?.media as Media

  return (
    <div className="grow flex flex-col w-full p-3 gap-3">
      {/* IMAGE */}
      {media?.url && media?.mimeType?.startsWith('image') && (
        <div className="aspect-9/16 w-full relative rounded-box border border-accent overflow-hidden">
          <Image fill className="object-cover" src={media.url} alt={media.alt || 'post image'} />
        </div>
      )}

      {/* VIDEO */}
      {media?.url && media?.mimeType?.startsWith('video') && (
        <div className="aspect-9/16 w-full rounded-box border border-accent overflow-hidden">
          <video
            poster={(post?.cover as Media)?.url as string}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src={media.url} type={media.mimeType} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {post?.caption && (
        <div className="w-full rounded-box border border-accent p-3">{post.caption}</div>
      )}
    </div>
  )
}

export default PostPage

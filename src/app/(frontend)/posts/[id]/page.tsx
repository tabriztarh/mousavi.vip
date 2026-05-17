import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import { RichText } from '../../components/RichText'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import ShareBtn from '../../components/ShareBtn'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext';

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


const captionText = convertLexicalToPlaintext({data:post?.captions?.[0]?.content as SerializedEditorState})

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
      <div className="tabs tabs-box gap-x-2 p-0 bg-transparent relative min-h-15">
        <div className="gap-x-2 flex items-center justify-center absolute left-0">
         <ShareBtn title={`${captionText?.split(" ")?.slice(0,15)?.join(" ")}...`} />
        </div>
        {post?.captions &&
          post?.captions?.length > 0 &&
          post?.captions?.map((caption, idx) => (
            <Fragment key={idx}>
              <label className="tab  w-12 btn  btn-accent btn-sm border border-primary">
                <input type="radio" name="caption" defaultChecked={idx === 0} />
                {caption?.lang}
              </label>
              <div
                className="tab-content w-full rounded-box border border-accent p-3"
                dir={caption?.lang === 'en' ? 'ltr' : 'rtl'}
              >
                <RichText data={caption?.content as SerializedEditorState} />
                {/* {caption?.content} */}
              </div>
            </Fragment>
          ))}
      </div>
      {/* {post?.caption && (
        <div className="w-full rounded-box border border-accent p-3">{post.caption}</div>
      )} */}
    </div>
  )
}

export default PostPage

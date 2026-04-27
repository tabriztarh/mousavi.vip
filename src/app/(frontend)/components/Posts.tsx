import { Media, Post } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <div dir="ltr" className="grid grid-cols-3 gap-[0.8px] bg-base-200 items-center rounded-box border border-accent w-full overflow-hidden">
      {posts?.map((post, idx) => (
        <Link href={`/posts/${post?.id}`} key={idx} className="w-full max-w-sm bg-gray-200 aspect-9/16 relative group">
          <div className="bg-accent/20 z-30 absolute left-0 right-0 top-0 bottom-0 m-auto group-hover:opacity-0 transition-opacity"></div>
          <Image
            className="object-cover z-20"
            fill
            alt={(post?.cover as Media)?.alt as string}
            src={(post?.cover as Media)?.url as string}
          />
        </Link>
      ))}
    </div>
  )
}

export default Posts

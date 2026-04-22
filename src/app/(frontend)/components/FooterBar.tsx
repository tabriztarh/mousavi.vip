import { Option } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

const FooterBar = ({ options }: { options: Option }) => {
  return (
    <footer className="bg-accent border-t-neutral border-t flex flex-col p-8 items-center gap-3">
      <article className="flex flex-col gap-3">
        <h5 className="badge badge-outline badge-lg">درباره {options?.name}</h5>
        <div className="text-justify border-neutral border p-3 rounded-box">{options?.aboutMe}</div>
        {/* <Link className='badge badge-neutral badge-sm' href={`/resume`}>بیشتر بخوانید</Link> */}
      </article>
      {/* <div className="divider"></div> */}

      <Link href="https://milad.uk" target="_blank" className="font-bold text-sm">{`< M >`}</Link>
    </footer>
  )
}

export default FooterBar

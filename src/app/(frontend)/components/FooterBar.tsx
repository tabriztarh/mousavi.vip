import { Option } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

const FooterBar = ({ options }: { options: Option }) => {
  return (
    <footer className="bg-neutral border-t-neutral border-t flex flex-col p-8 items-center gap-3">
      <article className="flex flex-col gap-3">
        <h5 className="badge badge-outline badge-lg text-accent">درباره {options?.name}</h5>
        <div className="text-justify border-neutral border rounded-box text-accent">{options?.aboutMe}</div>
        {/* <Link className='badge badge-neutral badge-sm' href={`/resume`}>بیشتر بخوانید</Link> */}
      </article>
      <div className="divider divider-accent h-1px text-accent text-xs">تمامی حقوق محفوظ و مربوط به خانم موسوی می باشد</div>



      <Link href="https://milad.uk" target="_blank" className="font-bold text-accent text-sm">{`< M >`}</Link>
    </footer>
  )
}

export default FooterBar

import { Option } from '@/payload-types'
import React from 'react'

const SocialMediaBar = ({ options }: { options: Option }) => {
  return (
    <div className="flex items-center gap-1">
      {options?.socials?.map((social, idx) => (
        <div key={idx} className="flex flex-col gap-1 group items-center">
          <button key={idx} className="btn btn-square btn-primary btn-sm border-1 border-netral/50">
            <span className="size-5" dangerouslySetInnerHTML={{ __html: social?.icon as string }} />
          </button>
          <span className="badge badge-xs badge-primary badge-outline text-neutral border-primary w-15">
            {social?.title || social?.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default SocialMediaBar

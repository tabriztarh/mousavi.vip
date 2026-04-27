import { Option } from '@/payload-types'
import Link from 'next/link'

const SocialMediaBar = ({ options }: { options: Option }) => {
  return (
    <div className="flex items-center gap-1">
      {options?.socials?.map((social, idx) => (
        <Link
          href={social?.link || '#'}
          target="_blank"
          key={idx}
          className="flex flex-col gap-1 group items-center"
        >
          <button key={idx} className="btn btn-square btn-accent btn-sm border border-primary">
            <span className={social?.twSize || "size-5"} dangerouslySetInnerHTML={{ __html: social?.icon as string }} />
          </button>
          <span className="badge badge-xs badge-accent badge-outline text-neutral border-primary w-15">
            {social?.title || social?.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default SocialMediaBar

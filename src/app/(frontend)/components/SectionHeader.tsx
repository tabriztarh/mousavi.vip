import { Media, Option, Resume, Result, Message1 } from '@/payload-types'
import Image from 'next/image'

const SectionHeader = ({ section }: { section?: Resume | Result | Message1 }) => {
  return (
    <div className="rounded-box border-accent border p-3 relative py-5">
      <span className="badge badge-accent border-primary absolute -top-3.5 right-2 font-bold w-32">
        {section?.title}
      </span>

      {(section?.image as Media)?.url && (
        <div className="avatar float-left mr-3 mb-2 w-24">
          <div className="w-24 h-24 rounded overflow-hidden relative">
            <Image
              fill
              src={(section?.image as Media)?.url as string}
              alt={(section?.image as Media)?.alt as string}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="leading-relaxed text-justify">{section?.description}</div>
      <div className="clear-both" />
    </div>
  )
}

export default SectionHeader

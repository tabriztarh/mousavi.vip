import { Media, Resume } from '@/payload-types'
import { Option } from 'payload'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Image from 'next/image'

const ResumePage = async () => {
  const payloadConfig = await config

  const payload = await getPayload({ config: payloadConfig })

  const resume = await payload.findGlobal({
    slug: 'resume',
  })

  return (
    <div className="grow p-3">
   
      <div className="rounded-box border-accent border p-3">
        <div className="avatar float-left mr-3 mb-2 w-24">
          <div className="w-24 h-24 rounded overflow-hidden relative">
            <Image
              fill
              src={(resume?.image as Media)?.url as string}
              alt={(resume?.image as Media)?.alt as string}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="leading-relaxed text-justify">{resume?.description}</div>

        <div className="clear-both" />
      </div>

      <ul className="timeline timeline-snap-icon  timeline-vertical">
        {resume?.items?.map((item, idx) => (
          <li key={idx}>
            <hr className='bg-accent' />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${item?.side === 'right' ? 'start' : 'end'} mb-10 md:text-end`}
            >
              <time className="font-mono italic">{item?.date}</time>
              <div className="text-lg font-black">{item?.title}</div>
              {item?.description}
            </div>
            <hr className='bg-accent' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResumePage

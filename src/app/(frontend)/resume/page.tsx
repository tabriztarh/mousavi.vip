import { getPayload } from 'payload'
import config from '@/payload.config'
import SectionHeader from '../components/SectionHeader'

const ResumePage = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const resume = await payload.findGlobal({
    slug: 'resume',
  })

  return (
    <div className="grow p-3 flex flex-col items-center pt-5 gap-3">
      <SectionHeader section={resume} />
      <div className="rounded-box border-accent border w-full px-3">
        <ul className="timeline timeline-snap-icon  timeline-vertical">
          {resume?.items?.map((item, idx) => (
            <li key={idx}>
              <hr className="bg-accent w-0.5" />
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
                className={`timeline-${item?.side === 'right' ? 'start text-end' : 'end text-start'} mb-10`}
              >
                {/* ${item?.side === 'right' ? 'text-left' : 'text-right'} */}
                <time className={`font-mono italic`}>{item?.date}</time>
                <div className="text font-black">{item?.title}</div>
                {item?.description}
              </div>
              <hr className="bg-accent w-0.5" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumePage

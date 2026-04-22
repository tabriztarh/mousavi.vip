import { getPayload } from 'payload'
import config from '@/payload.config'
import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

const MessagePage = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const message = await payload.findGlobal({
    slug: 'message',
  })

  const reasons = ['درخواست مشاوره', 'تعیین سطح', 'شرکت در دوره ها', 'سایر موارد']

  return (
    <div className="grow p-3 flex flex-col items-center pt-5 w-full gap-3">
      <SectionHeader section={message} />
      {/* <ul className="timeline timeline-snap-icon  timeline-vertical">
        {resume?.items?.map((item, idx) => (
          <li key={idx}>
            <hr className="bg-accent" />
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
            <hr className="bg-accent" />
          </li>
        ))}
      </ul> */}

{/*       
      <label className="input">
        <span className="label">نام</span>
        <input type="text" placeholder="نام و نام خانوادگی" />
      </label>
      <label className="select">
        <span className="label">موضوع</span>
        <select>
          {reasons?.map((reason, idx) => (
            <option key={idx} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </label> */}

      <ContactForm />
    </div>
  )
}

export default MessagePage

import { Option } from 'payload'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '../components/SectionHeader'

const Results = async () => {
  const payloadConfig = await config

  const payload = await getPayload({ config: payloadConfig })

  const results = await payload.findGlobal({
    slug: 'results',
  })

  return (
    <div className="grow p-3 flex flex-col gap-3 items-center pt-5">
  
      <SectionHeader section={results} />

      <div className="mt-6 w-full items-center flex flex-col gap-3 rounded-box">
        {results?.items?.map((item, idx) => (
          <Link
            href={(item?.image as Media)?.url as string}
            key={idx}
            className="hover-3d block w-full"
          >
            <figure className="w-full rounded-box border border-accent over">
              <div className="relative w-full h-150 group">
                <div className="bg-accent/12 absolute left-0 right-0 top-0 bottom-0 m-auto group-hover:opacity-0 transition-opacity z-29"></div>
                <Image
                  src={(item?.image as Media)?.url as string}
                  alt={(item?.image as Media)?.alt as string}
                  fill
                  className="object-cover object-top z-20"
                />
                <div className=" gap-1  z-30 absolute top-3 left-0 right-0 mx-auto w-full flex items-center justify-center">
                  <span className="badge badge-accent font-bold border border-primary">{item?.score}</span>
                  <span className="badge badge-accent font-bold border border-primary">{item?.type?.toUpperCase()}</span>
                </div>
              </div>
            </figure>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Results

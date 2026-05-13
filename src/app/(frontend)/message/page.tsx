export const dynamic = "force-dynamic";

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


      <ContactForm />
    </div>
  )
}

export default MessagePage

'use client'

import { toEnglishDigits } from '@/app/helpers/main'
import { Message } from '@/payload-types'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { createMessage } from '../actions/createMessage'

const ContactForm = () => {
  const reasons = ['درخواست مشاوره', 'تعیین سطح', 'شرکت در دوره ها', 'سایر موارد']
  const platforms = ['بله', 'تلگرام', 'واتسآپ', 'روبیکا', 'سایر']
  const blankMessage = {
    name: '',
    number: '',
    platform: '',
    reason: '',
    content: '',
  }
  const [message, setMessage] = useState<Omit<Message, 'id' | 'createdAt' | 'updatedAt'>>({
    ...blankMessage,
  })

  return (
    <div className="w-full flex flex-col gap-3 border border-accent rounded-box p-3">
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">نام و نام خانوادگی</legend>
        <input
          onChange={(e) => setMessage({ ...message, [e.target.name]: e.target.value || '' })}
          type="text"
          name="name"
          value={message?.name}
          className="input w-full"
          placeholder="نام و نام خانوادگی"
        />
        {/* <p className="label">Optional</p> */}
      </fieldset>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">موضوع تماس</legend>
        <select
          name="reason"
          value={message?.reason || ''}
          defaultValue=""
          className="select w-full"
          onChange={(e) => setMessage({ ...message, [e.target.name]: e.target.value || '' })}
        >
          <option disabled={true} value="">
            انتخاب موضوع
          </option>
          {reasons?.map((reason, idx) => (
            <option key={idx} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {/* <span className="label">Optional</span> */}
      </fieldset>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">پلتفرم ارتباطی</legend>
        <select
          value={message?.platform || ''}
          onChange={(e) => setMessage({ ...message, [e.target.name]: e.target.value || '' })}
          name="platfrom"
          defaultValue=""
          className="select w-full"
        >
          <option disabled={true} value="">
            انتخاب پلتفرم
          </option>
          {platforms?.map((platfrom, idx) => (
            <option key={idx} value={platfrom}>
              {platfrom}
            </option>
          ))}
        </select>
        {/* <span className="label">با کدام برنامه در تماس باشیم؟</span> */}
      </fieldset>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">شماره همراه</legend>
        <input
          value={message?.number || ''}
          onChange={(e) => setMessage({ ...message, [e.target.name]: e.target.value || '' })}
          type="number"
          name="number"
          className="input w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="شماره همراه"
        />
        {/* <p className="label">جهت تماس و ارتباط از برنامه</p> */}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">متن</legend>
        <textarea
          value={message?.content || ''}
          onChange={(e) => setMessage({ ...message, [e.target.name]: e.target.value || '' })}
          name="content"
          className="textarea h-24 w-full"
          placeholder="متن پیام"
        ></textarea>
        {/* <div className="label">Optional</div> */}
      </fieldset>
      <button
        className="btn btn-neutral w-full"
        onClick={async () => {
          if (message?.name?.length < 3) {
            toast.error('نام و نام خانوادگی خود را وارد کنید')
            return
          }
          const englishNumber = String(Number(toEnglishDigits(message?.number || '')))
          console.log({ englishNumber })
          if (englishNumber?.length < 10 || englishNumber?.length > 15) {
            toast.error('شماره تماس را بررسی کنید')
            return
          }

          const alertForEmptyContent =
            message?.content?.trim()?.length === 0 && message?.reason === ''
          if (alertForEmptyContent) {
            toast.error('متن پیام وارد نشده است')
            return
          }

          const res = await createMessage(message)
          if (res?.id) {
            toast.success('پیام شما را دریافت کردیم')
            setTimeout(() => {
              toast.success('در اسرع وقت با شما در ارتباط خواهیم بود')
            })
            setMessage({ ...blankMessage })
            return
          } else {
            toast.error('خطا در ارسال پیام')
          }
          return
        }}
      >
        ارسال درخواست
      </button>
    </div>
  )
}

export default ContactForm

'use client'

import toast from "react-hot-toast"

type ShareBtnProps = {
  title?: string
  text?: string
}

const ShareBtn = ({ title = 'این پست رو ببین' }: ShareBtnProps) => {
  const handleShare = async () => {
    const url = window.location.href

    try {
      // Native iOS / Android share sheet
      if (navigator.share) {
        await navigator.share({
          title,
          //   text,
          url,
        })

        return
      }

      // Fallback for desktop
      await navigator.clipboard.writeText(url)
      toast.success('لینک کپی شد')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="btn btn-accent w-12 btn-sm border border-primary tooltip tooltip-right"
      data-tip="اشتراک گذاری"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-8">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
        />
      </svg>
    </button>
  )
}

export default ShareBtn

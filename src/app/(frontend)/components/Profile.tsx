import { Media, Option } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

const Profile = ({ options }: { options: Option }) => {
  const status = {
    show: options?.status !== 'hide',
    text: options?.status === 'available' ? 'آنلاین هستم' : 'درحال تدریس',
    value: options?.status as Option['status'],
    avatarClassName: options?.status === 'available' ? 'avatar-online' : 'avatar-offline',
  }

  return (
    <div className="flex flex-col gap-3 items-center rounded-box border border-accent p-3 w-full">
      <span className="badge badge-accent badge-sm">
        <div className="inline-grid *:[grid-area:1/1]">
          <div
            className={`status animate-ping ${status?.value === 'available' ? 'status-success' : 'status-error'}`}
          ></div>
          <div
            className={`status ${status?.value === 'available' ? 'status-success' : 'status-error'}`}
          ></div>
        </div>{' '}
        {status?.text}
      </span>
      <div className={`avatar ${status?.show ? status?.avatarClassName : ''}`}>
        <div className="ring-accent ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 relative">
          <Image
            fill
            className="object-cover"
            src={(options?.avatar as Media)?.url as string}
            alt={(options?.avatar as Media)?.alt as string}
          />
        </div>
      </div>
      <h1 className="badge badge-lg badge-accent border-primary font-bold">{options?.title}</h1>
      <h2 className="badge badge-accent border-primary font-bold">{options?.slogan}</h2>
    </div>
  )
}

export default Profile

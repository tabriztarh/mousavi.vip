import { Option } from '@/payload-types'
import Link from 'next/link'
import BackButton from './BackButton'

const AppBar = ({ options }: { options: Option }) => {
  const menus = [
    {
      title: 'صفحه اصلی',
      link: '/',
    },

    {
      title: 'رزومه',
      link: '/resume',
    },

    {
      title: 'نتایج',
      link: '/results',
    },

    {
      title: 'ارسال پیام',
      link: '/message',
    },
  ]
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{' '}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow border-primary border"
          >
            {menus?.map((menu, idx) => (
              <li key={idx}>
                <Link className="hover:bg-accent" href={menu?.link}>
                  {menu?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href={'/'} className="btn btn-ghost text-xl">
          {options?.name}
        </Link>
      </div>
      <div className="flex-none">
        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {' '}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{' '}
          </svg>
        </button> */}
        <BackButton />
      </div>
    </div>
  )
}

export default AppBar

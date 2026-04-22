import { Option } from '@/payload-types'
import Link from 'next/link'

const MainMenu = ({ options }: { options: Option }) => {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {options?.menus?.main?.map((menu, idx) => (
        <Link
          href={menu?.link as string}
          className="w-full col-span-1 btn-sm btn btn-accent border-primary flex items-center justify-between text-sm"
          key={idx}
        >
          <span>{menu?.title}</span>
          <span
            className="size-5"
            dangerouslySetInnerHTML={{ __html: menu?.icon as string }}
          />{' '}
        </Link>
      ))}
    </div>
  )
}

export default MainMenu

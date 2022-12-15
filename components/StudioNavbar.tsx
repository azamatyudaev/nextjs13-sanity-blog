import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <>
        <div className="flex items-center justify-between p-5">
          <Link className="text-[#f7ab0a] flex items-center" href="/">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
            Go To Website
          </Link>

          <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#f7ab0a]">
            <h1 className="font-bold text-white">
              Want Coding challenges & Solutions sent to your inbox daily?
            </h1>
            <Link
              className="text-[#f7ab0a] font-bold ml-2"
              href="https://www.papareact.com/universityofcode"
            >
              www.papareact.com/universityofcode
            </Link>
          </div>
        </div>
        {props.renderDefault(props)}
      </>
    </div>
  )
}

export default StudioNavbar

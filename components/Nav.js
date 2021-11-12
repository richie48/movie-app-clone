import requests from '../utils/requests';
import {useRouter} from 'next/router'

function Nav() {
    const router=useRouter()


    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {Object.entries(requests).map(([key,{title,url}])=> <h2 onClick={()=> router.push(`/?genre=${key}`)} className="text-2xl last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500" key={key}>{title}</h2> )}

            </div>
            <div className='absolute top-0 right-0 w-1/12 h-8 bg-gradient-to-l from-[#06202A]'></div>
        </nav>
    )
}

export default Nav

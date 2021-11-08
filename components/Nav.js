import request from '../utils/request';

function Nav() {
    return (
        <nav>
            <div className='flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll'>
                {Object.entries(request).map(([key,{title,url}])=> <h2 className=" last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500" key={key}>{title}</h2> )}

            </div>
        </nav>
    )
}

export default Nav

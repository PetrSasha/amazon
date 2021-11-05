import 
{
BellIcon,
ChatIcon,
ChevronDownIcon,
ViewGridIcon,
} 
from '@heroicons/react/solid' 
function HeaderRight() {
    return (
        <div className="flex items-center sm:space-x-2 justify-end pr-5">
            <p className="whitespace-nowrap font-semibold pr-3"> PetrSasha</p>

                <ViewGridIcon className="hidden xl:inline-flex p-2 h-10 w-10 
                bg-gray-200 rounded-full text-gray-70 cursor-pointer 
                hover:bg-gray-300"/>
                <BellIcon className="hidden xl:inline-flex p-2 h-10 w-10 
                bg-gray-200 rounded-full text-gray-70 cursor-pointer 
                hover:bg-gray-300"/>
         <ChatIcon className="hidden xl:inline-flex p-2 h-10 w-10 
                bg-gray-200 rounded-full text-gray-70 cursor-pointer 
                hover:bg-gray-300"/>
         <ChevronDownIcon className="hidden xl:inline-flex p-2 h-10 w-10 
                bg-gray-200 rounded-full text-gray-70 cursor-pointer 
                hover:bg-gray-300"/>
        </div>
    )

}

export default HeaderRight

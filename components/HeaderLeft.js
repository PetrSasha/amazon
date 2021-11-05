import React from 'react'
import Image from "next/image"
import 
{ 
    SearchIcon,
} 
from '@heroicons/react/outline'

function HeaderLeft() {
    return (
         <div  className="flex items-center mt-1 ml-5">
        {/* image-block */}
            <div >
                <Image src="http://links.papareact.com/5me"
                    layout='fixed'
                    width={40}
                    height={40}
                />
            </div>
        {/* SearchInput */}
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 ">
                <SearchIcon className="h-6 text-gray-500"/>
                <input type="text" className="outline-none flex-shrink hidden md:inline-flex bg-transparent fle ml-2 items-center placeholder-gray-400" placeholder="Search Facebook"/>
            </div>
            
            </div>  
            
    
    )
}

export default HeaderLeft

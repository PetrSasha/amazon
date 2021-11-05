import HeaderLeft from "./HeaderLeft"
import HeaderMid from "./HeaderMid"
import HeaderRight from "./HeaderRight"



function Header() {
    return (
        <div className=" sticky top-0 z-50 bg-white flex items-center shadow-lg lg-px-5 py-4">
           <HeaderLeft/>
           <HeaderMid/>
           <HeaderRight/>
        </div>
    )
}

export default Header

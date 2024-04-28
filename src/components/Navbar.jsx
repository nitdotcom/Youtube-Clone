
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import Avatar from 'react-avatar';
import { CiSearch } from "react-icons/ci";
import { IoMicSharp } from "react-icons/io5";




export default function Navbar() {


    


    return (
        <div className=" flex items-center justify-center w-[100%]">
        <div className={`flex  fixed top-0 justify-between h-[50px] w-[100%] px-4 bg-white`}>
            {/* for logo  */}
            <div className={`flex items-center `}>
                <RxHamburgerMenu  className={`size-6`}/>
                <img  className={`w-[120px] `} src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="yt-logo" />
            </div>
            {/* for search bar  */}
            <div className={`flex items-center  `}>
                <div className="  py-1 px-4 border border-gray-400 rounded-l-full">
                  <input type="text" placeholder="Search here ..." className={` w-[500px] outline-none  `}/>
                  
                  
                </div>
                <button className={`px-4 py-[6px] border-y border-r border-gray-400 rounded-r-full`}><CiSearch className="size-5" /></button>
                <div className="bg-[#f1f5f9] h-[35px] w-[35px]  flex items-center justify-center rounded-full mx-4">
                    <IoMicSharp  className="size-[20px]"/>
                </div>
                
            </div>

            {/* profile div  */} 
            <div className={`flex  items-center gap-5 `}>
            <FaRegBell className={`size-[25px] `}/>
            <CiVideoOn  className={`size-[25px]`}/>
            <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" 
            size={30} round={true} />
            </div>
        </div>
        </div>
    )
}
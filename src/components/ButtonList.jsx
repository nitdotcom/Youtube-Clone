


export default function ButtonList(){


    const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", 
    "Programming", "News", "Technology"]




    return(
        <div className="mt-[20px] ">
              <ul className="flex space-x-6">
                 {buttonList.map((item , index)=>(
                    <>
                     <li  key="index" className="">
                        <button className="bg-gray-300 font-medium rounded-full px-3 " >{item}</button>
                     </li>
                    </>
                 ))}
                
                </ul> 
        </div>
    )
}
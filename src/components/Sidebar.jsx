
import React from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export default function Sidebar(){

    const sidebarItem = [
        {
            icons: <CiHome size="24px" />,
            title: "Home" 
        },
        {
            icons: <SiYoutubeshorts size="24px" />,
            title: "Short"
        },
        {
            icons: <MdOutlineSubscriptions size="24px" />,
            title: "Subscription"
        },
        {
            icons: <CiHome size="24px" />,
            title: "Home"
        },
        {
            icons: <SiYoutubeshorts size="24px" />,
            title: "Short"
        },
        {
            icons: <MdOutlineSubscriptions size="24px" />,
            title: "Subscription"
        },
        {
            icons: <CiHome size="24px" />,
            title: "Home"
        },
        {
            icons: <SiYoutubeshorts size="24px" />,
            title: "Short"
        },
        {
            icons: <MdOutlineSubscriptions size="24px" />,
            title: "Subscription"
        },
        {
            icons: <CiHome size="24px" />,
            title: "Home"
        },
        {
            icons: <SiYoutubeshorts size="24px" />,
            title: "Short"
        },
        {
            icons: <MdOutlineSubscriptions size="24px" />,
            title: "Subscription"
        },
        {
            icons: <CiHome size="24px" />,
            title: "Home"
        },
        {
            icons: <SiYoutubeshorts size="24px" />,
            title: "Short"
        },
        {
            icons: <MdOutlineSubscriptions size="24px" />,
            title: "Subscription"
        },
        {
            icons: <CiHome size="24px" />,
            title: "Home"
        },
        {
            icons: <SiYoutubeshorts size="24px" />,
            title: "Short"
        },
        {
            icons: <MdOutlineSubscriptions size="24px" />,
            title: "Subscription"
        },
        {
            icons: <CiHome size="24px" />,
            title: "Home"
        },
        {
            icons: <SiYoutubeshorts size="24px" />,
            title: "Short"
        },
        {
            icons: <MdOutlineSubscriptions size="24px" />,
            title: "Subscription"
        },
        
            
    ]


    const navi = useNavigate();
    function navigoto (){
        navi("/")
    }
    
    

    return(
        <div className={`   pr-6 ml-4  left-0 pr-[200px]  h-screen h-[calc(100vh-4.6rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
             
                <ul>
                    {sidebarItem.map((sidebarItem,index)=>(
                        <>
                        <li key={index} className='flex items-center cursor-pointer px-2 hover:bg-gray-300 hover:rounded-xl pl-2 gap-4 py-2'>
                            <span>{sidebarItem.icons}</span>
                            <span onClick={navigoto}>{sidebarItem.title}</span>
                        </li>
                        </>
                    ))}
                </ul>
                <hr />
                
             
        </div>
    )

}  
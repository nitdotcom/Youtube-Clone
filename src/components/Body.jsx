import React  from "react"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import { Outlet } from "react-router-dom"

export default function Body(){
    return(
        <div className="grid grid-cols-12   mt-[40px]">
         
         <div className="grid col-span-2">
            <Sidebar/>
         </div>
        
          
          <div className="grid col-span-10">
            <Outlet/>
          </div>
        
        </div>
    )
}
import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'



export default function Feed(){
    return(
        <div className=' grid  ml-5'>
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}
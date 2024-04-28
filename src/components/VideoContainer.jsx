import { useEffect, useState } from "react"
import axios from 'axios'
import { YOUTUBE_VIDEO_API } from "../consapi/Youtubeapi"
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom"



export default function VideoContainer() {
    
    const [video , setVideo] = useState([]);

    const fetchYoutubevideo = async () => {
        try {
            const res = await axios.get(YOUTUBE_VIDEO_API);
            
            console.log(res.data.items);
            
            setVideo(res.data.items)

        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        fetchYoutubevideo();

    }, [])


    return (
        <div className="grid grid-cols-4 mt-2 gap-2 mr-2">
          
          {video.map((item)=>(
            <>
            
             <Link to={`/watch?v=${item.id}`} key={item.id}>
             <VideoCart  item={item}/>
             </Link>
            </>
          ))}
          
          
        </div>
    )
}
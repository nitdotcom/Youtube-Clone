import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import API_KEY from "../consapi/Youtubeapi"
import axios from "axios"
import Avatar from "react-avatar"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";



export default function Watch() {

    const [singleVideo, setSingleVideo] = useState(null);

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    console.log("this is video id ", videoId)


    //   fetching for single video id
    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);

            console.log(res.data.items[0]);
            setSingleVideo(res.data.items[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSingleVideo();
    }, [])

    return (
        <div className="grid grid-cols-12 ml-2 mt-4 ">
            {/* video div  */}
            <div className="grid col-span-8">
                <iframe width="750" height="400"
                    src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <h1 className=" text-xl font-bold  ">{singleVideo?.snippet?.title} </h1>
                <div className="flex items-center justify-between ">
                    <div className="flex items-center justify-between w-[35%]">
                        <div className="flex items-center ">
                            <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
                                size={30} round={true} />
                            <h1 className="font-bold ">{singleVideo?.snippet?.channelTitle}</h1>
                        </div>
                        <button className="px-3 py-1  bg-black text-white rounded-full">Subscribe</button>
                    </div>
                    <div className="flex items-center cursor-pointer space-x-2 bg-gray-300 px-4 py-1 rounded-full">
                        <AiOutlineLike size={`20px`} />
                        <AiOutlineDislike size={`20px`} />

                    </div>
                    <div className="flex items-center cursor-pointer space-x-2 bg-gray-300 px-4 py-1 rounded-full">
                        <RiShareForwardLine size={`20px`} />
                        <p>Share</p>
                    </div>
                    <div className="flex items-center cursor-pointer space-x-2 bg-gray-300 px-4 py-1 rounded-full">
                        <IoMdDownload size={`20px`} />
                        <p>Download</p>
                    </div>
                </div>


            </div>
            {/* chatt div  */}
            <div className="grid col-span-4 ml-4">
                
            </div>
        </div>

    )


}
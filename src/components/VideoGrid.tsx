import { YOUTUBE_RESULTS_API, YOUTUBE_VIDEOS_API } from "@/lib/url"
import VideoCard from "./Videocard"
import { useEffect } from "react"
import { currentVideos, setCurrentVideos } from "@/lib/videosSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentCategory } from "@/lib/CategorySlice"







export const VideoGrid = ()=>{
    const dispatch = useDispatch()
    const Videos = useSelector(currentVideos)
    const Category = useSelector(selectCurrentCategory)

    useEffect(()=>{
        console.log(Category)
    },[Category])

    useEffect(()=>{
            const getVideos=async()=>{
                let url
                if(Category &&Category!=="All"){   
                    url = YOUTUBE_RESULTS_API+Category
                    console.log(YOUTUBE_RESULTS_API+Category) 
                }else{
                    url = YOUTUBE_VIDEOS_API
                    console.log(url)
                }
                const response = await fetch(url)
                const data = await response.json()
                
                dispatch(setCurrentVideos(data.items))
                console.log(data.items)               
        }
        getVideos()
    },[Category,dispatch])

    return(
        !Videos?(<div>loading</div>):
        (<div className="mt-7 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 hover:transition-all ">
            {Videos.map((video:any)=> 
            
             <div key={video.id.videoId?video.id.videoId:video.id}  >
                <VideoCard 
                video={video} 
            />
            </div>

           
            )}
        </div>)
    )
}

import { HorizontalCard } from "@/components/HorizontalCard";
import { currentVideos } from "@/lib/videosSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function VideoPage (){
    const params = useParams()
    const Videos = useSelector(currentVideos)
    console.log( `${params.id}`)
    
    
     const filterVideos = Videos?.filter((video:any)=>video.id!=params.id)
     const currentVideo = Videos?.filter((video:any)=>video.id===params.id)
     
    return <div>
        
        <div className="mt-5 flex flex-col lg:flex-row px-5 gap-3">
            <div className=" lg:w-8/12">
            <iframe
            height="100%"
            // width="100%"
            className=" left-0 w-full sm:h-96 rounded-xl"
            src={"https://www.youtube.com/embed/" + `${params.id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
            </iframe>
            { Videos&&<div className="text-white mt-2 text-xl font-bold
            ">
               {currentVideo[0]?.snippet?.title}
            </div>}
            </div>

            {filterVideos?<div className="lg:w-4/12">
                {filterVideos.map((video:any)=> 
                <HorizontalCard 
                video = {video}/>
                )}
            </div>:"loading..."}

        

        </div>
    </div>
}
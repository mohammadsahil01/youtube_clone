
import { Appbar } from "@/components/Appbar";
import { HorizontalCard } from "@/components/HorizontalCard";
import { currentVideos } from "@/lib/videosSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import prf from "@/assets/profile.svg"

export default function VideoPage (){
    const params = useParams()
    const Videos = useSelector(currentVideos)
    console.log( `${params.id}`)
    
    
     const filterVideos = Videos?.filter((video:any)=>(video.id.videoId?video.id.videoId:video.id)!=params.id)
     const currentVideo = Videos?.filter((video:any)=>(video.id.videoId?video.id.videoId:video.id)===params.id)
     console.log(currentVideo[0])
     
    return <div>
        <Appbar/>
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
            <div className="text-white mt-2 text-xl font-bold
            ">
               {currentVideo[0]?.snippet?.title}
            </div>
                <div className="">
                   <div className="text-white text-xl pt-3">
                    {currentVideo[0]?.snippet?.channelTitle}
                    <button className="text-black bg-white ml-7 text-base p-2
                     px-4 rounded-3xl hover:bg-slate-300">Subscribe</button>
                    </div> 
                </div>

                <div className="">
                   <CommentContainer video={currentVideo[0]}/>
                </div>
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

const CommentContainer = (video:any) => {
    
    return ( 
    <div>
        <div>
        <span>{video?.statistics?.commentCount} Comments</span>
        </div>

        <div className="flex gap-5 py-6">
            <img className="bg-white rounded-3xl px-1 overflow-hidden" src={prf} alt="" />
            
            <input className="bg-black text-white border border-black border-b-white w-full" type="text" placeholder="Add a comment" />
        </div>

    </div>
     );
}
 

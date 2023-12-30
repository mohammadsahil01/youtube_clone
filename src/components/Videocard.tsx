import { useNavigate } from "react-router-dom";


interface VideoCardProps {
    Img: string;
    logo: string;
    title: string;
    author: string;
    views: string;
    timestamp: string;
  }


function VideoCard({video}:any){
    const {
        id,
        snippet: { channelTitle, title, thumbnails, publishedAt },
      } = video;


    const navigate = useNavigate()
    return <div className="hover:cursor-pointer" onClick={()=>navigate("/videos/2")}>
        <img src={thumbnails?.medium.url} className=" h-3/4 rounded-lg"></img>
        <div className="grid grid-cols-12 ">
            <div className="col-span-10 space-y-1 pl-1">
                <div className=" mt-3 text-sm">
                {title.length > 50 ? title.substring(0, 50) + "..." : title}
                </div>
                <div className="col-span-10 text-gray-400 text-xs">
                    {channelTitle}
                </div>
                {/* <div className="col-span-10 text-xs text-gray-400" >
                    {props.views} | {props.timestamp}
                </div> */}
            </div>
            
            
        </div>
    </div>
}



export default VideoCard;
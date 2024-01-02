import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";


// interface VideoCardProps {
//     Img: string;
//     logo: string;
//     title: string;
//     author: string;
//     views: string;
//     timestamp: string;
//   }


function VideoCard({video}:any){
    const navigate = useNavigate()
    const { channelTitle, title, thumbnails, publishedAt }
       = video.snippet;
    const id = video.id
    
    const seconds = moment.duration(video.contentDetails?.duration).asSeconds();
    const duration = moment.utc(seconds*1000).format("mm:ss")
    
    const views = video.statistics?.viewCount;


    return <div className="hover:cursor-pointer hover:bg-slate-950 rounded-xl p-4 grid-cols-12 " onClick={()=>navigate(`/video/${id}`)}>
      <div className=" pt-3 relative col-span-10 ">
        <LazyLoadImage src={thumbnails?.medium.url} className="rounded-xl" alt="Thumbnail" />
      
        
        <div className="absolute bottom-1 px-1 opacity-90 right-2 bg-black text-white rounded">
          <span className="text-sm">{duration}</span>
      </div>
      </div>
        <div className="grid grid-cols-12 ">
            <div className="col-span-10 space-y-1 pl-1">
                <div className=" mt-3 font-bold text-sm lg:text-base">
                {title.length > 50 ? title.substring(0, 50) + "..." : title}
                </div>
                <div className="col-span-10 text-gray-400 text-sm hover:text-gray-200">
                    {channelTitle}
                </div>
                <div className=" text-sm text-gray-400" >
                {numeral(views).format("0.a").toUpperCase()} • {moment(publishedAt).fromNow()}
            </div>
            </div>
            <div>

            </div>
            
            
        </div>
    </div>
}



export default VideoCard;
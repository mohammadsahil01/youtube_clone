import moment from "moment";
import { useNavigate } from "react-router-dom"
import numeral from "numeral";
import {LazyLoadImage} from "react-lazy-load-image-component"
export const HorizontalCard = ({video}:any)=>{
    const { channelTitle, title, thumbnails, publishedAt }
       = video.snippet;
    const id = video.id
    
    const seconds = moment.duration(video.contentDetails.duration).asSeconds();
    const duration = moment.utc(seconds*1000).format("mm:ss")
    const navigate = useNavigate()
    const views = video.statistics?.viewCount;
    return <>
    <div className="hover:cursor-pointer hover:bg-slate-950 pl-4 p-2 rounded-2xl" onClick={()=>navigate(`/video/${id}`)}>
    
        {video? <div className="grid grid-cols-12 gap-2 ">
        <div className=" col-span-4 relative">
            <LazyLoadImage src={thumbnails?.medium.url} className="rounded-xl" alt="Thumbnail" />
            <div className="absolute bottom-1 px-1 opacity-90 right-1 bg-black text-white rounded">
               <span className="text-sm">{duration}</span>
            </div>
        </div>

        <div className="col-span-8 space-y-1 pl-1">
            <div className=" text-sm">
            {title.length > 35 ? title.substring(0, 35) + "..." : title}
            </div>
            <div className=" text-gray-400 text-xs">
                {channelTitle}
            </div>
            <div className=" text-xs text-gray-400" >
                {numeral(views).format("0.a").toUpperCase()} | {moment(publishedAt).fromNow()}
            </div>
        </div>   
    </div>:"loading"}
</div>
</>
}

import { useNavigate } from "react-router-dom"
import { VIDEOS } from "./VideoGrid"

export const HorizontalCard = (props:any)=>{
    const navigate = useNavigate()
    return <div className="hover:cursor-pointer pl-4 pt-4" onClick={()=>navigate("/videos/1")}>
    
    <div className="grid grid-cols-12 gap-2 ">
        <div  className="col-span-4 pt-3">
        <img src={props.Img} className=" rounded-lg"></img>
        </div>
        <div className="col-span-8 space-y-1 pl-1">
            <div className=" mt-3 text-sm">
                {props.title} 
            </div>
            <div className=" text-gray-400 text-xs">
                {props.author}
            </div>
            <div className=" text-xs text-gray-400" >
                {props.views} | {props.timestamp}
            </div>
        </div>   
    </div>
</div>
}
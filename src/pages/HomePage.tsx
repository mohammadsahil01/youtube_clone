
import { Appbar } from "@/components/Appbar";
import { Sidebar } from "@/components/Sidebar";
import { VideoGrid } from "@/components/VideoGrid";


export default function HomePage() {
  return (
   <div>
    <Appbar/>
      <div className='flex '>
        <Sidebar/>
        <VideoGrid/>
      </div>
   </div>
  )
}

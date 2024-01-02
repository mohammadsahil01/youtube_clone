

import CategoryList from "@/components/CategoryList";
import { Sidebar } from "@/components/Sidebar";
import { VideoGrid } from "@/components/VideoGrid";


export default function HomePage() {
  return (
   <div>
   
      <div className='flex'>
        <Sidebar/>
        <div>
        <CategoryList/>
        <VideoGrid/>
        </div>
        
      </div>
   </div>
  )
}

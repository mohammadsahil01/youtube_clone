import { useEffect } from "react";

import { YOUTUBE_RESULTS_API, YOUTUBE_VIDEOS_API } from "@/lib/url";
import VideoCard from "./Videocard";
import { currentVideos, setCurrentVideos } from "@/lib/videosSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCategory } from "@/lib/CategorySlice";

export const VideoGrid = () => {
  const dispatch = useDispatch();
  const Videos = useSelector(currentVideos);
  const Category = useSelector(selectCurrentCategory);

  useEffect(() => {
    console.log(Category);
  }, [Category]);

  useEffect(() => {
    const getVideos = async () => {
      let url;
      if (Category && Category !== "All") {
        url = YOUTUBE_RESULTS_API + Category;
      } else {
        url = YOUTUBE_VIDEOS_API;
        console.log(url);
      }

      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch(setCurrentVideos(data.items));
        console.log(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
        // Handle error fetching videos
      }
    };
    getVideos();
  }, [Category, dispatch]);

  return (
    !Videos ? <div className="mt-7 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 hover:transition-all">
    {[...Array(12)].map((_, index) => (
      <div key={index} className=" shadow rounded-md p-4 max-w-lg w-full mx-auto animate-pulse">
       <div className="flex justify-center items-center mb-4">
        <div className=" rounded-xl bg-slate-700 h-28 w-full"></div>
      </div>
        <div className="flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
     : (
      <div className="mt-7 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 hover:transition-all">
        {Videos.map((video:any) => (
          <div key={video.id.videoId ? video.id.videoId : video.id}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    )
  )}
;




import React from "react";
import { useMetaData } from "@/lib/useMetaData";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

function VideoCard({ video }: any) {
  const navigate = useNavigate();
  const { channelTitle, title, thumbnails, publishedAt } = video.snippet;
  const id = video.id;

  const { _duration, views } = useMetaData(id, video);

  return (
    <div className="hover:cursor-pointer hover:bg-slate-950 rounded-xl p-4" onClick={() => navigate("/video/" + (video.id.videoId ? video.id.videoId : video.id))}>
      <div className="pt-3 relative">
        {thumbnails && <LazyLoadImage src={thumbnails.medium.url} className="rounded-xl" alt="Thumbnail" />}

        <div className="absolute bottom-1 px-1 opacity-90 right-2 bg-black text-white rounded">
          <span className="text-sm">{_duration}</span>
        </div>
      </div>
      <div>
        <div className=" space-y-1 pl-1">
          {title && (
            <div className="mt-3 font-bold text-sm lg:text-base">
              {title.length > 50 ? title.substring(0, 50) + "..." : title}
            </div>
          )}
          {channelTitle && (
            <div className=" text-gray-400 text-sm hover:text-gray-200">
              {channelTitle}
            </div>
          )}
          {publishedAt && (
            <div className="text-sm text-gray-400">
              {numeral(views).format("0.a").toUpperCase()} • {moment(publishedAt).fromNow()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

import React from "react";
import formatNumber from '../utils/ViewsKMB';
import youtubeDurationToUseful from '../utils/DurationInMins';


const VideoCard = ({ info }) => {

  const videoDurationSec = youtubeDurationToUseful(info.contentDetails.duration);

  return (
    <div className="p-2 w-72 mb-2">
      <div className='relative'>
        <img
        className="rounded-xl hover:opacity-60 transition-opacity duration-300"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumbnails"
        />
        <div className = 'text-bold absolute bottom-1 right-1 w-10 h-5 bg-black text-white'>
        {videoDurationSec}
        </div>
      </div>

      <ul>
        <li className="font-bold py-2 text-gray text-ellipsis overflow-hidden">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{formatNumber(info?.statistics?.viewCount)} Views</li>
      </ul>
    </div>
  );
};



export const AddVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900 m-1 p-1">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;

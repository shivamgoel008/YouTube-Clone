import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  }
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {videos?.map((video) => (
        <Link to={"/watch?v="+video.id}>
          <VideoCard key={video.id} videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

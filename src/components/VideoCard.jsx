import React from "react";

const VideoCard = ({ videoInfo }) => {
  
  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
      : Math.abs(Number(labelValue));
  }

  const timeAgo = (rawDate) => {
    let date = "";
    for (let i = 0; i < rawDate?.length; i++) {
      if (rawDate[i] === "T") date += " ";
      else if (rawDate[i] === "Z") {
      } else date += rawDate[i];
    }
    date = Date.parse(date);

    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      if (interval === 1) return interval + " year ago";
      return interval + " years ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      if (interval === 1) return interval + " month ago";
      return interval + " months ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      if (interval === 1) return interval + " day ago";
      return interval + " days ago";
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      if (interval === 1) return interval + " hour ago";
      return interval + " hours ago";
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      if (interval === 1) return interval + " minute ago";
      return interval + " minutes ago";
    }

    if (seconds < 10) return "just now";

    return Math.floor(seconds) + " seconds ago";
  };

  return (
    <div className="w-72  m-8">
      <img
        className="rounded-xl shadow-2xl"
        src={videoInfo?.snippet?.thumbnails?.high?.url}
        alt=""
      />
      <div className="">
        <p className="text-lg font-bold tracking-tight m-2">

          {videoInfo?.snippet?.title?.length>=50?videoInfo?.snippet?.title?.substring(0,50)+"...":videoInfo?.snippet?.title}
        </p>

        <p className="font-normal text-base text-gray-700 dark:text-gray-400 m-2">
          {videoInfo?.snippet?.channelTitle}
        </p>
        <p className="ont-normal text-gray-700 text-base dark:text-gray-400 m-2">
          {convertToInternationalCurrencySystem(
            videoInfo?.statistics?.viewCount
          )}{" "}
          views  · {timeAgo(videoInfo?.snippet?.publishedAt)}
        </p>
      </div>
    </div>
  );
};


export default VideoCard;

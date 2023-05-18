export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=28&chart=mostPopular&regionCode=US&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

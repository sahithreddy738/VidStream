export const YOUTUBE_KEY=process.env.REACT_APP_YOUTUBE_DATA_KEY;
export const YOUTUBE_SUGGESTIONS_URL="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_RESULTS_URL1="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";
export const YOUTUBE_SEARCH_RESULTS_URL2="&key="+YOUTUBE_KEY;
export const YOUTUBE_COMMENTS_URL1="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=6&videoId=";
export const YOUTUBE_COMMENTS_URL2="&key="+YOUTUBE_KEY;
export const YOUTUBE_VIDEO_ID_URL1="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
export const YOUTUBE_VIDEO_ID_URL2="&key="+YOUTUBE_KEY;

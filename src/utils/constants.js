export const YOUTUBE_KEY=process.env.REACT_APP_YOUTUBE_DATA_KEY;
export const YOUTUBE_SUGGESTIONS_URL="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_RESULTS_URL1="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";
export const YOUTUBE_SEARCH_RESULTS_URL2="&key="+YOUTUBE_KEY;
export const YOUTUBE_COMMENTS_URL1="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=6&videoId=";
export const YOUTUBE_COMMENTS_URL2="&key="+YOUTUBE_KEY;
export const YOUTUBE_VIDEO_ID_URL1="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
export const YOUTUBE_VIDEO_ID_URL2="&key="+YOUTUBE_KEY;
export const HOME_NAVLIST=[
    {
        imageSrc:"youtube-home.jpg",
        itemName:"Home"
    },
    {
        imageSrc:"youtube-shorts.png",
        itemName:"Shorts"
    },
    {
        imageSrc:"youtube-subscriptions.png",
        itemName:"Subscriptions"
    }
];
export const YOUR_NAVLIST=[
    {
        imageSrc:"youtube-shorts.png",
        itemName:"Your channel"
    },
    {
        imageSrc:"youtube-history.jpg",
        itemName:"History"
    },
    {
        imageSrc:"youtube-playlists.png",
        itemName:"Playlists"
    },
    {
        imageSrc:"youtube-shorts.png",
        itemName:"Your videos"
    },
    {
        imageSrc:"youtube-watchlater.png",
        itemName:"Watch later"
    },
    {
        imageSrc:"youtube-liked.png",
        itemName:"Liked videos"
    },
    {
        imageSrc:"youtube-downloads.jpg",
        itemName:"Downloads"
    },
]
export const EXPLORE_NAVLIST=[
    {
        imageSrc:"youtube-trending.png",
        itemName:"Trending"
    },
    {
        imageSrc:"youtube-shopping.png",
        itemName:"Shopping"
    },
    {
        imageSrc:"youtube-music.png",
        itemName:"Music"
    },
    {
        imageSrc:"youtube-movies.png",
        itemName:"Movies"
    },
    {
        imageSrc:"youtube-live.png",
        itemName:"Live"
    },
    {
        imageSrc:"youtube-gaming.jpg",
        itemName:"Gaming"
    },
    {
        imageSrc:"youtube-news.jpg",
        itemName:"News"
    },
    {
        imageSrc:"youtube-sports.png",
        itemName:"Sports"
    },
    {
        imageSrc:"youtube-courses.jpg",
        itemName:"Courses"
    },
    {
        imageSrc:"youtube-fashion.png",
        itemName:"Fashion & Beauty"
    },
    {
        imageSrc:"youtube-podcast.jpg",
        itemName:"Podcasts"
    },

]
export const MORE_NAVLIST=[
    {
        imageSrc:"youtube-shorts.png",
        itemName:"YouTube Premium"
    },
    {
        imageSrc:"youtube-studio-icon.png",
        itemName:"YouTube Studio"
    }, {
        imageSrc:"youtube-kids.png",
        itemName:"YouTube Kids"
    },
    {
        imageSrc:"youtube-music-icon.png",
        itemName:"YouTube Music"
    },
]
export const END_NAVLIST=[
    {
        imageSrc:"youtube-settings.png",
        itemName:"Settings"
    },
    {
        imageSrc:"youtube-report.jpg",
        itemName:"Report history"
    }, {
        imageSrc:"youtube-help.jpg",
        itemName:"Help"
    },
    {
        imageSrc:"youtube-sendfeedback.png",
        itemName:"Send feedback"
    },
]
export const NAV_COMPONENT_ITEMS=[
    {
        imageSrc:"youtube-settings.png",
        itemName:"Home"
    },
    {
        imageSrc:"youtube-report.jpg",
        itemName:"Shorts"
    }, {
        imageSrc:"youtube-help.jpg",
        itemName:"Subscriptions"
    },
    {
        imageSrc:"youtube-sendfeedback.png",
        itemName:"Downloads"
    },
]
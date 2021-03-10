// import { googleApiKey, youtubePlaylistId } from "../config";

// document.addEventListener("DOMContentLoaded", () => {
//     const getYouTubeVideos = async (playlistId, apiKey, numResults) => {
//         var url = new URL(
//                 "https://www.googleapis.com/youtube/v3/playlistItems"
//             ),
//             params = {
//                 key: apiKey,
//                 part: "snippet",
//                 playlistId: playlistId,
//                 maxResults: 10,
//             };
//         Object.keys(params).forEach((key) =>
//             url.searchParams.append(key, params[key])
//         );

//         const response = await fetch(url);
//         const data = await response.json();
//         const videos = await data.items;

//         return videos;
//     };

//     const buildYouTubeSplide = (playlistId, apiKey, numResults) => {
//         getYouTubeVideos(playlistId, apiKey, numResults)
//             .then((data) => {
//                 console.log(data);
//                 data.forEach((video) => {
//                     var thumbnail = video.snippet.thumbnails.high.url;

//                     if ("standard" in video.snippet.thumbnails) {
//                         thumbnail = video.snippet.thumbnails.standard.url;
//                     }
//                     if (
//                         "maxres" in video.snippet.thumbnails &&
//                         window.innerWidth > 1000
//                     ) {
//                         thumbnail = video.snippet.thumbnails.maxres.url;
//                     }
//                     var videoId = video.snippet.resourceId.videoId;
//                     var videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
//                     var youtubeSplide = document.querySelector(
//                         ".youtube .splide__list"
//                     );

//                     var slide = document.createElement("div");
//                     slide.classList.add("splide__slide");
//                     slide.setAttribute("data-splide-youtube", videoUrl);

//                     var thumbnailEl = document.createElement("img");
//                     thumbnailEl.setAttribute("src", thumbnail);

//                     slide.appendChild(thumbnailEl);
//                     youtubeSplide.appendChild(slide);
//                 });
//             })
//             .then(() => {
//                 new Splide("#video-splide", {
//                     type: "loop",
//                     perPage: 1,
//                     fixedWidth: "100%",
//                     focus: "center",
//                     heightRatio: 0.5625,
//                 }).mount(window.splide.Extensions);
//             });
//     };

//     buildYouTubeSplide(youtubePlaylistId, googleApiKey, 10);
// });

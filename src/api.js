// import axios from "axios";

// const api = axios.create({
//     baseURL:"https://api.themoviedb.org/3/",
//     params:{
//         api_key:"6ca50d943c5592c6ee27a57bd81355d7",
//         language: "en-US"
//     }

// });

// export const moviesApi = {
//     nowPlaying: () => api.get("movie/now_playing"),
//     upcoming: () => api.get("movie/upcoming"),
//     popular: () => api.get("movie/popular"),
//     movieDetail: id =>
//         api.get(`movie/${id}`, {
//             params: {
//                 append_to_response: "videos"
//             }
//         }),
//     search: term =>
//         api.get("search/movie", {
//             params: {
//                 query: encodeURIComponent(term)
//             }
//         })
// };

// export const tvApi = {
//     topRated: () => api.get("tv/top_rated"),
//     popular: () => api.get("tv/popular"),
//     airingToday: () => api.get("tv/airing_today"),
//     showDetail: id => 
//         api.get(`tv/${id}`, {
//             params:{
//                 append_to_response: "videos"
//             }
//         }),
//     search: term => 
//         api.get("search/tv", {
//             params: {
//                 query: encodeURIComponent(term)
//             }
//         })
// };

// export default api;
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        language: 'en-US'
    }
});

export const moviesApi = {
    nowPlaying: () =>
        api.get('movie/now_playing?api_key=ae61da0a1b03db56e103056851b7e551'),
    upcoming: () =>
        api.get('movie/upcoming?api_key=ae61da0a1b03db56e103056851b7e551'),
    popular: () =>
        api.get('movie/popular?api_key=ae61da0a1b03db56e103056851b7e551'),
    movieDetail: id =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: 'videos'
            }
        }),
    search: term =>
        api.get('search/movie', {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () =>
        api.get('tv/top_rated?api_key=ae61da0a1b03db56e103056851b7e551'),
    popular: () =>
        api.get('tv/popular?api_key=ae61da0a1b03db56e103056851b7e551'),
    airingToday: () =>
        api.get('tv/airing_today?api_key=ae61da0a1b03db56e103056851b7e551'),
    showDetail: id =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: 'videos'
            }
        }),
    search: term =>
        api.get('search/tv', {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export default api;
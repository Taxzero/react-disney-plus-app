import axios from "axios";

const tmdb_key = process.env.REACT_APP_TMDB_APP_KEY 


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: tmdb_key,
        languge: "ko-KR"
    }
})

export default instance;
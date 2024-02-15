import axios from "axios";
import raw from "../TMDB_API/api.txt"

let tmdb_key = fetch(raw).then(r => r.text()).then(text => {
 console.log('text decoded:', text);
});


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: tmdb_key,
        languge: "ko-KR"
    }
})

export default instance;
import React, {useEffect} from 'react'
import axios  from '../api/axios'
import requests from './../api/request';

const Banner = () => {

  const [movie, setMovie] = useEffect([]);

  useEffect(() => {
    fetchData();
  }, [])
       
  const fetchData = async() => {
    //현재 상영중인 영화 정보를 가져오기(여러영화)
    const reseponse = await axios.get(requests.fetchNowPlaying);
    console.log(reseponse);
    //여러 영화 중 영화 하나의 ID를 가져오기
    const movieId = requests.data.reselts[
      Math.floor(Math.random() * reseponse.data.results.length)
    ].id
    //특정 영화의 더 상세한 정보를 가져오기(비디오 정보 포함)
    const {data:movieDetail} = await axios.get(`movie/${movieId}`, {params: {append_to_response: "videos"}});
    setMovie(movieDetail);
  }
      
  return (
    <div>Banner</div>
  )
}

export default Banner
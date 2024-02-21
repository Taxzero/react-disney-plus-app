import React, {useEffect} from 'react'
import axios  from '../api/axios'
import requests from './../api/request';

const Banner = () => {

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = () => {
    const reseponse = axios.get(requests.fetchNowPlaying);
    console.log(reseponse);
  }

  return (
    <div>Banner</div>
  )
}

export default Banner
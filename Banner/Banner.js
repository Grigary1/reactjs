import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { API_KEY } from '../constants/constants'
import { imageUrl } from '../constants/constants'
function Banner() {
  const[movie,setMovie]=useState({})
  let index=Math.floor(Math.random()*21)
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[index])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'  >
      <div className='content'>
        <h1 className='title'>{movie?movie.title:""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      
      </div>
      <div className="fade_bottom">
      
      </div>
    </div>
    
  )
}

export default Banner


/*<div>
        <img src="https://wallpaperaccess.com/full/2703652.png" alt="" className='bg-cover w-screen h-[40rem] top-1'/>
      <h1 className='fixed top-[8.75rem] text-white text-7xl font-bold'>Movie Name</h1>
      <div className='text-white top-11'>
        {/* <button type='button' className='fixed top-[11.75rem] left-[2rem] text-white outline-none border-none rounded-sm bg-[#33333380] pl-2 pr-2 pt-0.5 pb-0.5 font-semibold hover:bg-[#e6e6e6]'>Play</button><br/> }
        <button type='button' className='myButton'>My List</button>
        <button type='button' className='fixed top-[11.75rem] left-[6rem] bg-red-400 outline-none border-none rounded-sm bg-[#33333380] pl-2 pr-2 pt-0.5 pb-0.5 font-semibold hover:bg-[#e6e6e6]'>My List</button>
      </div>
      <h1 className='fixed top-96 w-screen   leading-[1.5rem] text-white text-[1.3rem] font-normal'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</h1>
    </div> */
    //'https://api.themoviedb.org/3/trending/all/week?api_key={3b0247ef8b88d4f00b1aca07fa835cd3}&language=en-US'
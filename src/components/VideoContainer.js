import React, { useEffect, useState } from 'react'
import { youtubeapi ,searchapi} from './utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  
  const [videos,setvideos]=useState([]);



  
   const val =useSelector((store)=>store.app.value);
   
   useEffect(() =>{
    getVideos();
   },[val]);
  
const getVideos = async()=>{
  // const data= await fetch(youtubeapi);
  // const json= await data.json();
  const v=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+val+"&key=AIzaSyCABGB4cIz4ty5igmL4_wFMkGbLrvu23eo")
  const vdata=await v.json();
  // const com=await fetch("https://youtube.googleapis.com/youtube/v3/comments?id=ox1_0QHlLGk&&key=AIzaSyCABGB4cIz4ty5igmL4_wFMkGbLrvu23eo")
  // const jcom=await com.json();
  // console.log(jcom);
  setvideos(vdata.items)
  // console.log(json.items[0]);
}

//  if(videos.length===0) return null;
  return (
    <div className='flex flex-wrap'>   
      {videos.map((e)=> 
      <Link to={"/watch?v="+e.id.videoId}>
      <VideoCard key={e.id.videoId} info={e}/>
      </Link>
      )}
      
    </div>
  )
}

export default VideoContainer

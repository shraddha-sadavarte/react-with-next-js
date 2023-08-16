"use client"
import React, { useState } from 'react' ;
import './globals.css';
import axios from 'axios';

const page = () => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
   try {
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    setImages(data);
    console.log(data)

   } catch (error) {
    console.error("Error in Fetching Images");
   }
  }

  return (
    
    <>
      <h1>This is home page</h1>
      <button onClick={getImages} className='get'>Get Images</button>
      <div className='getImage'>
        {
          images.map((elem, i) => {
            return <img src={elem.download_url} key={i} height="200px" width="200px" className='image'/>
          })
        }
      </div>
    </>
  )
}

export default page

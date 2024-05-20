import React from 'react'
import '../Homepages/Homepagesecond.css'

export const Homepagesecond = () => {
  return (
    <div className='homepagesecond'>

<div className='video-section'>
    <div className='enjoydiv'>
    Enjoy on your TV
    <figcaption className='des'><span className='description'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</span></figcaption>
    </div>


    <video className='videofirst'autoPlay muted loop>
        
        <source src="https://videos.pexels.com/video-files/5082597/5082597-uhd_4096_2160_25fps.mp4" type="video/mp4" />

        </video>

        </div>

    <hr className='hrline'/>
</div>


  )
}

import React from 'react'
import './Homepagethird.css'
import imgstrange from './mobile-0819.jpg' 
import imgbox from './boxshot.png'
import loading from './ZKZg.gif'

export const Homepagethird = () => {
  return (
    <div className='homepagethird'>
<div className='container'>
    <div className='strangerthinging'>
    <img className='largeimage' src={imgstrange} alt="strangerthings" />



    <div className='container2'>

    <img className='smallimage' src={imgbox} alt="strangerthing" />

        <div className='strangerbox'>Stranger Things</div>
        <div className='downloadingbox'>
            Downloading... 
          <img className='loadinggif'  src={loading} alt="loading" />
        </div>
    </div>
    </div>
    <div className='descriptionsec'>
    Download your shows to watch offline
    <figcaption className='saveyourline'>
    Save your favorites easily and always have something to watch.
    </figcaption>
        </div>
    


</div>
<hr className='hrline2'/>


    </div>
  )
}

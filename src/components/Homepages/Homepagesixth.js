import React from 'react'
import './Homepagesixth.css'


export const Homepagesixth = () => {
  return (
    <div className='homepagesixth'> 
    <div className='freqentlyline'>Frequently Asked Questions</div>

    <div className='div1'>What is Netflix? <span className='plus'>+</span></div>
    
    <div className='div1'>How much does Netflix cost? <span className='plus'>+</span></div>
    <div className='div1'>Where can I watch? <span className='plus'>+</span></div>
    <div className='div1'>How do I cancel? <span className='plus'>+</span></div>
    <div className='div1'>What can I watch on Netflix? <span className='plus'>+</span></div>
    <div className='div1'>Is Netflix good for kids? <span className='plus'>+</span></div>


<div className='readytowathcline'>Ready to watch? Enter your email or mobile number to create or restart your membership.</div>
      
<form>
  <label>
    <input type="text" name="email" placeholder="Email or mobile number" />
  </label>
  <input type="submit" value="Get Started >" />
</form>
<hr className='hrline6'></hr>
    </div>
  )
}

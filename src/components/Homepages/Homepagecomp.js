import React from 'react'
import './Homepagecomp.css'

export const Homepagecomp = () => {
  return (
    <div>
      <div className='unlimitedline'>Unlimited movies, TV shows, and more</div> 
      <div className='watchanywhereline'>Watch anywhere. Cancel anytime.</div>
      <div className='readytowatchline'>Ready to watch? Enter your email or mobile number to create or restart your membership.</div>
      
      <form>
  <label>
    <input type="text" name="email" placeholder="Email or mobile number" />
  </label>
  <input type="submit" value="Get Started >" />
</form>
<hr className='hrline'/>
    </div>

  )
}

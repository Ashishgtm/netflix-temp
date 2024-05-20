import React from 'react'
import './Footer.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footcontainer'>
        <div className='divfirst'>
            
          <div className='divA'>  Questions? Contact us.</div>
          <div className='divB'>  FAQ</div>
          <div className='divB'>  Investor Relations</div>
          <div className='divB'>  Privacy</div>

          <div className='divB'> Speed Test</div>
         <div className='both'> <button className='englishbut'>English</button>
          <ArrowDropDownIcon className='dropdown-icon' /></div>


          {/* <input type="submits" value="English" />             */}
           <div className='divB nep'> Netflix Nepal</div>

            </div>
        <div className='divsecond'>
            <div className='divA'>Help center</div>
            <div className='divD'>Jobs</div>
            <div className='divD'>Cookie Preferences</div>
            <div className='divD'>Legal Notices</div>
            
            
            </div>
        
            <div className='divthird'>
            <div className='divA'>Account</div>
            <div className='divE'>Ways to Watch</div>
            <div className='divE'>Corporate Information</div>
            <div className='divE'>Only on Netflix</div>
            
            
            </div>
            <div className='divthird'>
            <div className='divA'>Media center</div>
            <div className='divE'>Terms of Use</div>
            <div className='divE'>Contact Us</div>
            
            
            </div>
       



        </div>
        
        </div>
  )
}
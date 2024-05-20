import React from 'react'
import { Header } from '../components/Header/Header'
import { Homepagecomp } from '../components/Homepages/Homepagecomp'
import '../assests/css/Home.css'
import { Homepagesecond } from '../components/Homepages/Homepagesecond'
import { Homepagethird } from '../components/Homepages/Homepagethird'
import { Homepagefourth } from '../components/Homepages/Homepagefourth'
import { Homepagefifth } from '../components/Homepages/Homepagefifth'
import { Homepagesixth } from '../components/Homepages/Homepagesixth'
import { Footer } from '../components/Footer/Footer'

export const Home = () => {
  return (
    <div  className="background">
      <Header />
      <Homepagecomp />
      <Homepagesecond/>
      <Homepagethird />
      <Homepagefourth />
      <Homepagefifth />
      <Homepagesixth />
      <Footer />
    </div>
  )
}

import React from 'react'
import Navbar from '../componants/Navbar'
import Banner from '../componants/Banner'
import Footer from '../componants/Footer'
import FreeBook from '../componants/FreeBook'

const Home = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar/>
      <Banner/>
      <FreeBook/>
      <Footer/>
    </div>
  )
}

export default Home

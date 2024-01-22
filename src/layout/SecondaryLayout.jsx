import React from 'react'

import { Navbar } from '../components'
import Footer from '../container/Footer/Footer'
import './SecondaryLayout.scss'

const SecondaryLayout = ({children}) => {
  return (
   <div>
    
   <Navbar/>
    <div className='app__bg app__wrappers section__padding'>{children}</div>
    <Footer/>
    </div>
  )
}

export default SecondaryLayout
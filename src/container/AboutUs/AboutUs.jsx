import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
 
import {images} from '../../constants'
import './AboutUs.scss';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'  id='about'> 
    <div className='app__aboutus-overlay flex__center'>

      <img src={images.G} alt='G letter'/>

    </div>

      <div className='app__aboutus-content flex__center'>
        <motion.div 
         initial={{opacity: 0, scale: 0.5, x:"-10%"}}
         whileInView={{opacity: 1, scale: 1, x:0}}
         viewport={{once:true, amount:0.25}}
         transition={{duration: 0.5}}
         
         className='app__aboutus-content_about'
         

         >
          <h1 className='headtext__cormorant' >About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <Link replace to='/Aboutsec'><button type='button' className='custom__button'> Know More</button> </Link>

        </motion.div>

        <div className='app__aboutus-content_knife flex__center '>
          <img src={images.knife} alt='about_knife'/>
        </div>

        <motion.div
         initial={{opacity: 0, scale: 0.5, x:"10%"}}
         whileInView={{opacity: 1, scale: 1, x:0}}
         viewport={{once:true, amount:0.25}}
         transition={{duration: 0.5}}
         className='app__aboutus-content_history'
         >
          <h1 className='headtext__cormorant' >Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button' >Know More</button>

        </motion.div>

      </div>
  </div>
);

export default AboutUs;

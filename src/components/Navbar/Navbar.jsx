import React from 'react';
import { GiHamburger   } from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {Link} from 'react-router-dom'

import images from '../../constants/images'
import './Navbar.scss';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState (false)


  return (
  <nav className = "app__navbar">
  <div className='app__navbar-logo'>
    <Link to='/'><img src ={images.gericht} alt ="app logo"></img></Link>
  </div>
  <ul className='app__navbar-links'>
    <li className='p__opensans'> <Link to="/">Home</Link></li>
    <li className='p__opensans'> <Link to="/Aboutsec">About</Link></li>
    <li className='p__opensans'> <Link to="/Menus">Menu</Link></li>
    <li className='p__opensans'> <Link to="/Contact">Contact</Link></li>
  </ul>
  <div className='app__navbar-login'>
    <a href="#login" className='p__opensans'> Log In / Register </a>
  <div/>
  <a href="/" className='p__opensans'>Book Table</a>
  </div>
  <div className='app__navbar-smallscreen'> 
    
    {!toggleMenu ? (<GiHamburger color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>) : (
    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom '> 
      <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
    <ul className='app__navbar-smallscreen-links'>
    <li className='p__opensans'> <Link to="/">Home</Link></li>
    <li className='p__opensans'> <Link to="/Aboutsec">About</Link></li>
    <li className='p__opensans'> <Link to="/Menus">Menu</Link></li>
    <li className='p__opensans'> <Link to="/Contact">Contact</Link></li>
    </ul>
    </div>
    )}
{/*  <li className='p__opensans'> <a href="#home">Home</a></li>
      <li className='p__opensans'> <a href="#about">About</a></li>
      <li className='p__opensans'> <a href="#menu">Menu</a></li>
      <li className='p__opensans'> <a href="#awards">Awards</a></li>
      <li className='p__opensans'> <a href="#contact">Contact</a></li> */}
  
  </div>
  </nav>
)

}
export default Navbar;

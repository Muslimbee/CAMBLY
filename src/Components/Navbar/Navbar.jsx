import React from 'react'
import './Navbar.scss'
import logo from '../../assets/Image/secondary_light.9d2bb836.svg'
import { useGlobalContext } from '../../context'
import '../Navbar/Navbar.css'

export default function Navbar() {
  const { scrolling } = useGlobalContext();
  return (
    <div>
      <div className="nav">
        <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
          <div className="navbar-left">
            <img className='logo' src={logo} alt="" />
            <ul className='navbar-ul'>
              <li className='navbar-li'><a className='navbar-li' href="#">Tutors</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">Courses</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">Group Lessons</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">Resources</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">Kids</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">Business</a></li>
            </ul>
          </div>
          <div className="navbar-right">
          <select id="cars">
          <option value="volvo">English</option>
          <option value="saab">Russia</option>
          <option value="opel">Polski</option>
          <option value="audi">Fransiya</option>
          </select>
          <a href='/login' className='navbar-button white'>Log in</a>
          <button className='navbar-button yellow'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

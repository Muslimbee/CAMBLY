import React from 'react'
import '../Footer/Footer.scss'

export default function Footer() {
  return (
    <div>
        <div className="footer">
           <div className="container">
           <ul>
                <p>ABAUT</p>
                <li>
                    <a href="#">Courses</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li> 
                <li>
                    <a href="#">Coreers</a>
                </li>
                 <li>
                    <a href="#">Press</a>
                </li>
            </ul>
            <ul>
                <p>JOIN</p>
                <li>
                    <a href="#">Cambly</a>
                </li>
                <li>
                    <a href="#">Cambly kids</a>
                </li> 
                <li>
                    <a href="#">Cambly or organizatons</a>
                </li>
                 <li>
                    <a href="#">Become a Tutor</a>
                </li>
                <li>
                    <a href="#">Become an Anbassodor</a>
                </li>
            </ul>
            <ul>
                <p>USEFUL LINKS</p>
                <li>
                    <a href="#">Cambly Help Center</a>
                </li>
                <li>
                    <a href="#">Cambly (IOS)</a>
                </li> 
                <li>
                    <a href="#">Cambly (Android)</a>
                </li>
                 <li>
                    <a href="#">Cambly kids (IOS)</a>
                </li>
                <li>
                    <a href="#">Cambly Kids (Android)</a>
                </li>
            </ul>
           </div>

           <div className="box">
            <div className="hero">
            <div className="box-ul">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS AND CONTIONONS</a>
            <a href="#">JOBS</a>
            <a href="#">CONTACT</a>
            <a href="#">PRESS</a>
            </div>
            <div className="box-ul">
                <a href="#"><i className='bx bxl-twitter' ></i></a>
                <a href="#"><i className='bx bxl-instagram' ></i></a>
                <a href="#"><i className='bx bxl-facebook-square' ></i></a>
                <a href="#"><i className='bx bxl-youtube' ></i></a>
            </div>
            <div className="box-ul">
                <p> CAMBLY INC. © COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
            </div>
            </div>

            

           </div>
        </div>
    </div>
  )
}

import React from 'react'
import '../Cambly/Cambly.scss'
import googleplay from '../../assets/Image/gogleplay.webp'
import doctor from '../../assets/Image/doctor.webp'
import bino from '../../assets/Image/bino.webp'
import tutiqush from '../../assets/Image/tutiqush.webp'
import operator from '../../assets/Image/operator.webp'

export default function Cambly() {
  return (
    <div>
        <div className="Cambly">
            <div className="container">
                <div className="cambly-on">
                <div className="vedio">
                <video className='vedio-org' autoPlay loop playsInline controls>
                <source src="https://camblycdnimages.camblycdn.com/classroom_teacher_student_mobile.mp4" controls type="video/mp4" onPlay={true}/>
                </video>
                </div>
                <div className="list">
                    <h1>Cambly on the go</h1>
                    <p>Start or schedule lessons anytime, anywhere with our Android and iPhone apps.</p>
                    <div className="social">
                      <a href="#">  <img src="	https://static.cambly.com/_next/static/media/Download_on_the_App_Store_Badge_EN_135x40.e5f849dd.svg" alt="" /></a>
                       <a href="#">   <img className='gogle' src={googleplay} alt="" /></a>
                    </div>
                </div>
                </div>
                <div className="cards-buttons">
                    <button className='b-1'>
                        <img src={doctor} alt="" />
                        <h3>New Group Lessons</h3>
                        <p>A fun way to practice English, guided by a native English-speaking Cambly tutor.</p>
                        <i class='bx bx-right-arrow-alt' ></i>
                    </button>
                    <button className='b-2'>
                    <img src={bino} alt="" />
                        <h3>For organations</h3>
                        <p>Empower your team with practical, real-world English skills they need to excel in global business.</p>
                        <i class='bx bx-right-arrow-alt' ></i>
                    </button>
                    <button className='b-3'>
                    <img src={tutiqush} alt="" />
                        <h3>For kids</h3>
                        <p>Unlock your child’s global future with lessons filled with fun and games that have them speaking English from day 1.</p>
                        <i class='bx bx-right-arrow-alt' ></i>
                    </button>
                </div>
                <div className="Become">
                    <div className="img">
                        <img src={operator} alt="" />
                    </div>
                    <div className="list">
                        <h1>Become a tutor</h1>
                        <p>Join our English tutoring community to enjoy flexible scheduling and rewarding conversations with people from all over the world.</p>
                        <button>
                            Get started
                            <i class='bx bx-right-arrow-alt' ></i>
                        </button>
                    </div>
                </div>
                <div className="box"></div>
            </div>
        </div>
    </div>
  )
}

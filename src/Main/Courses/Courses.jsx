import React from 'react'
import '../Courses/Courses.scss'
import shoji from '../../assets/Image/jashu.webp'
import liu from '../../assets/Image/liu.webp'
import khalid from '../../assets/Image/khalid.webp'

export default function Courses() {
  return (
    <div>
        <div className="Courses">
            <div className="container">
                <h1>Courses for every skill level and interest</h1>
                <p>Focus on your specific goals with our guided courses, including academic test prep, business English, conversation practice, and more.</p>
                <button className='container-button explore'>
                    Explore all courses
                    <i class='bx bx-right-arrow-alt' ></i>
                    </button>

                <div className="cards">
                    <div className="card">
                        <img src={shoji} alt="" />
                        <p>"What I like about Cambly is that all the tutors are native English speakers and their high teaching quality. My English has improved a lot and I am having fun studying it!"</p>
                        <h6>Shoji</h6>
                        <p className='p'>Japan</p>
                    </div>
                    <div className="card">
                    <img src={liu} alt="" />
                        <p>"After using Cambly, I seldom have a situation where I am so nervous that my hands shake when I speak English. I used to be afraid of speaking English, and I was always afraid that I wouldn't speak well enough for others to understand, but now I am much better!"</p>
                        <h6>Xinrui Liu</h6>
                        <p className='p'>China</p>
                    </div>
                    <div className="card">
                    <img src={khalid} alt="" />
                        <p>"I have experienced a growth in my confidence as an English-speaker, with a host of idioms now at my disposal. No matter where you come from or who you are, Cambly will be your best companion on journey toward better English"</p>
                        <h6>Khalid Al Ghareeb</h6>
                        <p className='p'>Kuwait</p>
                    </div>
                </div>
                <h1 className='Achieve'>Achieve your goals by learning English with Cambly</h1>
                <button className='learning'>
                    Start learning 
                    <i class='bx bx-right-arrow-alt' ></i>
                </button>
            </div>
        </div>
    </div>
  )
}

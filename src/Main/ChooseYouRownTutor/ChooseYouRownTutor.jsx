import React from 'react'
import '../ChooseYouRownTutor/ChooseYouRownTutor.scss'
import bird1 from '../../assets/Image/qush1.webp'
import bird2 from '../../assets/Image/qush2.webp'
import bird3 from '../../assets/Image/qush3.webp'
import qushqiz from '../../assets/Image/qush-qiz.webp'
import rasmla from '../../assets/Image/3talikrasm.webp'


export default function ChooseYouRownTutor() {
  return (
    <div>
        <div className="ChooseYouRownTutor">
            <div className="container">
              <h1 className='h1 custom'>Choose your own tutor</h1>
              <p>Choose the tutor that has the personality, professional experience, or focus area you need!</p>
              <button>Start learning <i class='bx bx-right-arrow-alt'></i></button>
              <h1 className='h1 big'>Pick the plan that works for you</h1>
              <div className="cards">
                <div className="card">
                  <div className="card-top">
                    <div className="name">
                      <img src={bird1} alt="" />
                      <h2 className='name-h2'>Complete</h2>
                    </div>
                    <p>Full access to all of Cambly</p>
                    <ul>
                      <li>
                      <i class='bx bx-check'></i>
                     <h6> Our most comprehensive experience</h6>
                      </li>
                      <li>
                      <i class='bx bx-check'></i>
                     <h6> Practice 1:1 or in a group</h6>
                      </li>
                      <li>
                      <i class='bx bx-check'></i>
                    <h6>  Schedule ahead or on demand</h6>
                      </li>

                    </ul>
                  </div>
                  <div className="card-buttom">
                    <p className='Starting from'>Starting from</p>
                    <div className="price">
                      <h1 className='price-h1'>$44</h1>
                      <p className='month'>/ month</p>
                    </div>
                  <button className='card-button yellow'>
                    Sign up 
                  <i class='bx bx-right-arrow-alt' ></i>
                  </button>
                  </div>
                </div>
                <div className="card">
                <div className="card-top">
                    <div className="name">
                      <img src={bird2} alt="" />
                      <h2 className='name-h2'>Complete</h2>
                    </div>
                    <p>Only group lessons</p>
                    <ul>
                      <li>
                      <i class='bx bx-check'></i>
                     <h6>Real-world conversation experience</h6>
                      </li>
                      <li>
                      <i class='bx bx-check'></i>
                     <h6>Work with a tutor and 1-2 other students</h6>
                      </li>
                      <li>
                      <i class='bx bx-check'></i>
                    <h6>For adults 21+</h6>
                      </li>
                    </ul>
                  </div>
                  <div className="card-buttom">
                    <p className='Starting from'>Starting from</p>
                    <div className="price">
                      <h1 className='price-h1'>$44</h1>
                      <p className='month'>/ month</p>
                    </div>
                  <button className='card-button yellow'>
                    Sign up 
                  <i class='bx bx-right-arrow-alt' ></i>
                  </button>
                  </div>
                </div>
                <div className="card">
                <div className="card-top">
                    <div className="name">
                      <img src={bird3} alt="" />
                      <h2 className='name-h2'>Complete</h2>
                    </div>
                    <p>For kids under 18</p>
                    <ul>
                      <li>
                      <i class='bx bx-check'></i>
                     <h6> 1:1 time with specialized tutors</h6>
                      </li>
                      <li>
                      <i class='bx bx-check'></i>
                     <h6> Beginner to advanced courses available</h6>
                      </li>
                      <li>
                      <i class='bx bx-check'></i>
                    <h6>Fun games and activities</h6>
                      </li>

                    </ul>
                  </div>
                  <div className="card-buttom">
                    <p className='Starting from'>Starting from</p>
                    <div className="price">
                      <h1 className='price-h1'>$44</h1>
                      <p className='month'>/ month</p>
                    </div>
                  <button className='card-button yellow'>
                    Sign up 
                  <i class='bx bx-right-arrow-alt' ></i>
                  </button>
                  </div>
                </div>
              </div>
              <div className="hero">
                <div className="hero-img">
                  <img src={qushqiz}alt="" />
                </div>
                <div className="hero-name">
                  <h2>Cambly MiniLesson</h2>
                  <p>Practice speaking English with Cambly AI for free today!</p>
                </div>
                <button className='hero-button yellow'>
                  Sign up
                  <i class='bx bx-right-arrow-alt' ></i>
                </button>
              </div>
              <div className="resources">
                <div className="resources-left">
                  <h2 className='resources-h2'>Try our free resources</h2>
                  <p className='resources-p'>Get a taste of Cambly with our most popular tools and guides. No subscription required.</p>
                  <button className='resources-button yellow'>
                    Join now 
                    <i class='bx bx-right-arrow-alt' ></i>
                  </button>
                </div>
                <div className="resources-right">
                  <img src={rasmla} alt="" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './App.css'
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CourseCard from './components/CourseCard';
import civil from './assets/images/civil.jpg'
import communication from './assets/images/communication.jpg'
import management from './assets/images/management.jpg'
import marketing from './assets/images/marketing.jpg'
import software from './assets/images/software.jpg'
import robotics from './assets/images/robotics.jpg'
import reco1 from './assets/images/reco1.jpg'
import reco2 from './assets/images/reco2.jpg'
import reco3 from './assets/images/reco3.jpg'
import reco4 from './assets/images/reco4.jpg'
import teacher from './assets/images/teacher.jpg'
import tution from './assets/images/tution.jpg'
import alltime from './assets/images/alltime.jpg'
import qltvideo from './assets/images/qltvideo.jpg'
import JoinCard from './components/JoinCard';
import { RiLoginBoxFill } from 'react-icons/ri';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { SiBookstack } from 'react-icons/si';
import ServiceCard from './components/ServiceCard';


const App = () => {
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" to="#home">E-learners</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" to="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#services">How to Join</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#mission">Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className='signin'>
            <a>Sign in</a>
            <button className='outline_button1'>Enroll</button>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Home Section Start */}
      <section id="home">
        <div className="container-fluid">
          <div className="container">
            <h1>E-learners Institute Build Your Career Low-Cost, Easy And Safe.</h1>
            <p>Engineering, Management, Social Working & more.</p>
            <div>
              <a className='skyblue_button'>Enroll Now</a>
              <a href="#courses" className='orange_button px-5'>Courses</a>
            </div>
          </div>
        </div>
      </section>
      {/* Home Section End */}

      {/* Courses Section Start */}
      <section id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading">
              <h1>Courses For You</h1>
              <p>our high recomended courses for you</p>
            </div>
          </div>
          <Swiper
            rewind={true}
            navigation={true}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CourseCard img={civil} title='Civil Engineering' teacher='By- Kunal Mehta Sir' rating='4.8' review='8754' reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart='1342' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard img={management} title='Hotel Management' teacher='By- Dileep Sir' rating='4.7' review='6354' reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart='874' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard img={software} title='Software Development' teacher='By- Anirudh Sir' rating='5.0' review='2354' reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart='1523' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard img={marketing} title='Business Marketing' teacher='By- Ojha Sir' rating='3.8' review='6754' reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart='1634' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard img={communication} title='Communication Skills' teacher='By- Akash Sir' rating='3.9' review='2354' reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart='962' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard img={robotics} title='Robotics' teacher='By- Nishant Sir' rating='4.8' review='3984' reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart='1454' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Courses Section End */}

      {/* Join Section Start */}
      <section id="join">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 heading">
                <h1>How To Join</h1>
                <p>join us with some easy steps</p>
              </div>
            </div>
            <div className="row">
              <JoinCard icon={<RiLoginBoxFill />} signin='1. Sign In' p='signin our website if you are not signin.' />
              <JoinCard icon={<AiOutlineUsergroupAdd />} signin='2. Enroll' p='enroll to ensure you want to join with us.' />
              <JoinCard icon={<SiBookstack />} signin='3. Course' p='select your favorite dream course now.' />
            </div>
          </div>
        </div>
      </section>
      {/* Join Section End */}

      {/* Services Section Start */}
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading">
              <h1>Services We Are Provide</h1>
              <p>our all services which is benificial for you</p>
            </div>
            <ServiceCard img={teacher} enrollment={5735} heading='Professional Teachers' p='all teachers are professionally trained.' />
            <ServiceCard img={tution} enrollment={3464} heading='Home Tution' p='we also provide home tution.' />
            <ServiceCard img={alltime} enrollment={7863} heading='Any time' p='you can study any time when you are free.' />
            <ServiceCard img={qltvideo} enrollment={9564} heading='Quality Videos' p='all videos are quality control.' />
          </div>
        </div>
      </section>
      {/* Services Section End */}


    </>
  )
}

export default App
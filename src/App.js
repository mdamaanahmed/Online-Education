import React from 'react'
import './App.css'
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CourseCard from './components/CourseCard';

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
                <a className="nav-link" to="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#services">How to Join</a>
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
          <Swiper
            rewind={true}
            navigation={true}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CourseCard  title='Funkey T-Shirt' company='Calvin Klein' rating='3.8' review='3354' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard  title='Funkey T-Shirt' company='Calvin Klein' rating='3.8' review='3354' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard  title='Funkey T-Shirt' company='Calvin Klein' rating='3.8' review='3354' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard  title='Funkey T-Shirt' company='Calvin Klein' rating='3.8' review='3354' />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard  title='Funkey T-Shirt' company='Calvin Klein' rating='3.8' review='3354' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>



      {/* Courses Section End */}





    </>
  )
}

export default App
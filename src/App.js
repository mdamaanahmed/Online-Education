import React, { useState, useEffect } from 'react'
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
import mission from './assets/images/mission_bg.jpg'
import JoinCard from './components/JoinCard';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { SiBookstack } from 'react-icons/si';
import ServiceCard from './components/ServiceCard';
import Faq from 'react-faq-component';
import { RiLoginBoxFill } from 'react-icons/ri';
import { RiPhoneFill } from 'react-icons/ri';
import { IoMailSharp } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterLine } from 'react-icons/ri';
import { SiInstagram } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { BsSlack } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { BsPlusLg } from "react-icons/bs";
import { FiTriangle } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { BiBody } from 'react-icons/bi';


const App = () => {
  // const [mediaWidth, setMediaWidth] = useState()
  const [currentWidth, setCurrentWidth] = useState()

  const handleWidth =  () => {
    console.log(window.innerWidth)
    //  setMediaWidth(window.innerWidth)
    // console.log(mediaWidth)
    if (window.innerWidth >= 1200) {
      setCurrentWidth(4)
    }
    else if (window.innerWidth >= 992) {
      setCurrentWidth(3)
    }
    else if (window.innerWidth >= 768) {
      setCurrentWidth(2)
    }
    else if (window.innerWidth < 768) {
      setCurrentWidth(1)
    }
  }

  useEffect(() => {
    // handleWidth()
    window.addEventListener('resize', handleWidth)
    // setMediaWidth(window.innerWidth)
    // console.log('useEffect');
    // return () => { window.removeEventListener('resize', handleWidth) }
  })

  const toggleHamburger = () =>{
    let hamburger = document.getElementById('hamburger')
    hamburger.classList.toggle('add_width')
  }

  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "How do I enroll and register.",
        content: "Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem  ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem  ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem  ipsum dolor sit amet, consectetur "
      },
      {
        title: "What are the technical requirements for an online course.",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur "
      },
      {
        title: "How much does an online class cost.",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem  ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem  ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem  nunc"
      },
      {
        title: "What methods will be used to teach my online class",
        content: "Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur "
      },
      {
        title: "How much time will I spend in my virtual classroom.",
        content: "Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem  ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur "
      }]
  }

  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#home">E-learners</a>
          <div className="hamburger">
            <a onClick={toggleHamburger}><HiMenu /></a>
            <ul id='hamburger' className=''>
                <p><CgClose onClick={toggleHamburger}/></p>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#join">How to Join</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mission">Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse d-flex justify-content-center align-items-center">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#join">How to Join</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mission">Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
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
          <span><FiTriangle className='design_icon' /></span>
          <span><BsPlusLg className='design_icon' /></span>
          <span><FiTriangle className='design_icon' /></span>
          <span><BsPlusLg className='design_icon' /></span>
          <span><BsPlusLg className='design_icon' /></span>
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
            modules={[Navigation]}
            breakpoints={{
              200:{
                slidesPerView:1
              },
              576:{
                slidesPerView:2
              },
              768:{
                slidesPerView:2
              },
              992:{
                slidesPerView:3
              },
              1200:{
                slidesPerView:4
              },

            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <CourseCard img={civil} title='Civil Engineering' teacher='By- Kunal Sir' rating='4.8' review='8754' reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart='1342' />
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
              <JoinCard icon={<SiBookstack />} signin='3. Course' p='select your favorite dream course with us now.' />
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

      {/* Mission Section Start */}
      <section id="mission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 heading">
              <h1>Our Mission Is</h1>
              <p>by our online institute we want to express more and more education</p>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h3>Improvement In Education System</h3>
                <p>The Institute offers a wide course catalog throughout the year. Short professional development courses or online classes fit into a working professional’s schedule. The Master’s degree allows full-time students to gain foundational knowledge for a future career. Areas of expertise span contemporary art to curating, luxury to logistics, art law to valuation, and much more. This makes Sotheby’s Institute of Art the premier educational choice for individuals who wish to excel in any area of the art world.
                  the largest and most powerful course catalog throughout the course catalog throughout the course catalog throughout the alumni network of its kind.
                </p>
                <div class="points">
                  <p><span></span> Lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <p><span></span> Lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <p><span></span> Lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="img">
                <img src={mission} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section End */}

      {/* FAQ Section Start */}
      <section id="faq">
        <div className="container">
          <Faq data={data} />
        </div>
      </section>
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading">
              <h1>Contact Us</h1>
              <p>any question or remarks? just write us a message!</p>
            </div>
            <div className="col-lg-12 main_box">
              <div className="row">
                <div className="col-lg-5">
                  <div className="left_content">
                    <div className="content_heading">
                      <h3>Contact Information</h3>
                      <p>Fill up The form and our Team will get back to you within 24 hours.</p>
                    </div>
                    <div className="info">
                      <p><RiPhoneFill className='info_icon' />+91 8603485082</p>
                      <p><IoMailSharp className='info_icon' />info@elearners.com</p>
                      <p><MdLocationOn className='info_icon' />543/d Street 4656 Delhi</p>
                    </div>
                    <div className="social_midea">
                      <div>
                        <FaFacebookF className='social_icon' />
                      </div>
                      <div>
                        <RiTwitterLine className='social_icon' />
                      </div>
                      <div>
                        <SiInstagram className='social_icon' />
                      </div>
                      <div>
                        <FaLinkedinIn className='social_icon' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="right_content">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="">First Name</label>
                        <input type="text" name='firstname' placeholder='your first name' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name='lastname' placeholder='your last name' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='email address' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Phone</label>
                        <input type="number" name='phone' placeholder='phone number' />
                      </div>
                      <div className="col-lg-12">
                        <label htmlFor="">Message</label>
                        <textarea name="msg" rows="4" placeholder='write your message here...'></textarea>
                      </div>
                      <div className="col-lg-12 send_button">
                        <button className='orange_button_bg'>Send Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer Start */}
      <div className="footer container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <h1>E-commerce</h1>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Explore more</h5>
              <a href='#'>Home</a>
              <a href='#'>Shop</a>
              <a href='#'>About</a>
              <a href='#'>Contact Us</a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Policies</h5>
              <a href='#'>Terms & Conditions</a>
              <a href='#'>Privacy Policy</a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Find Us on Social Media</h5>
              <div className="Social_icons">
                <SiInstagram className='icon' />
                <BsSlack className='icon' />
                <FaFacebook className='icon' />
                <RiTwitterLine className='icon' />
                <BsLinkedin className='icon' />
              </div>
              <div className="whatsup">
                <SiWhatsapp className='icon' />
                <p>Message Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 copyright">
            <p>	&#169; 2022 All Right Reserved. </p>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}

export default App
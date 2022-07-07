import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';

const ServiceCard = ({ img, enrollment, heading, p }) => {
    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className="box">
                    <div className='image_bg'>
                    </div>
                    <BiDotsVerticalRounded className='menu_icon' />
                    <img src={img} alt="" />
                    <div className="content">
                        <p>Enrollments- {enrollment}</p>
                        <div>
                            <h3>{heading}</h3>
                            <p>{p}</p>
                        </div>
                    </div>
                    <div className='button'>
                    <a href="#contact" className='orange_button_bg'> Contact us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
import React from 'react'

const ServiceCard = ({ img, enrollment, heading, p }) => {
    return (
        <>
            <div className="col-lg-3">
                <div className="box">
                    <div className='image_bg'>
                    </div>
                    <img src={img} alt="" />
                    <div className="content">
                        <p>Enrollments- {enrollment}</p>
                        <div>
                            <h3>{heading}</h3>
                            <p>{p}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
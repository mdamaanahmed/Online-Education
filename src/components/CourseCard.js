import React from 'react'
import { GiRoundStar } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
// import '../App.css'
// import '../bootstrap.min.css'

const CourseCard = ({ img, title, teacher, rating, review, reco1, reco2, reco3, reco4, heart }) => {
    return (
        <>
            <div className="box">
                <div className="img">
                    <img src={img} alt="" height="100%" />
                </div>
                <div className="content">
                    <p>{teacher}</p>
                    <h2>{title}</h2>
                    <div className="price">
                        <h5>{review} reviews</h5>
                        <p>{rating} <GiRoundStar /></p>
                    </div>
                    <div className="recomend">
                            <p><BsFillHeartFill className='heart_icon' /> {heart}</p>
                            <div>
                                <img src={reco1} alt="" />
                                <img src={reco2} alt="" />
                                <img src={reco3} alt="" />
                                <img src={reco4} alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard
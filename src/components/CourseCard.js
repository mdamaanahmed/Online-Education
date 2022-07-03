import React from 'react'
import { GiRoundStar } from "react-icons/gi";

const CourseCard = ({  title, company, rating, review }) => {
    return (
        <>
            <div className="box">
                <div className="img">
                    <img src="{img}" alt="" height="100%" />
                </div>
                <div className="content">
                    <p>{company}</p>
                    <h2>{title}</h2>
                    <div className="price">
                        <h5>{review} reviews</h5>
                        <p>{rating} <GiRoundStar /></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard
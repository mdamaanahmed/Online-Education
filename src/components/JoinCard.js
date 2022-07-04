import React from 'react'

const JoinCard = ({ icon, signin, p }) => {
    return (
        <>
            <div className="col-lg-4">
                <div className="box">
                    <div className='icon'>
                        {icon}
                    </div>
                    <div className="content">
                        <h3>{signin}</h3>
                        <p>{p}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinCard
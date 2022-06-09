import React from 'react';

function Hero(props) {
    return (
        <div className="wrapper">
            <img src={process.env.PUBLIC_URL + "/pfp.png"} alt="Hello From Noah"></img>
            <div className="nameType">
                <h1>Hi! I'm Noah!</h1>
            </div>
            <button type="button" className="btn scroll-btn btn-outline-success"><a href="#aboutLink">Learn More</a></button>
        </div>
    )
}

export default Hero;
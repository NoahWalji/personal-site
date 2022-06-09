import React from 'react';

function Portfolio(props) {
    return (
        <div className="container fullPage-white" id="portfolioLink">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-lg-6 align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src="/amiibotrackerIcon.png" alt="Amiibo Tracker"/>
                        <div className="card-body">
                            <h5 className="card-title">Amiibo Tracker</h5>
                            <p className="card-text">Web application that allows users to explore, save and display their amiibo collections. Users can sign-up, login and save figures to their wishlist and collection!</p>
                            <p className="card-text">Frontend: React Native</p>
                            <p className="card-text">Backend: Node.js and MySQL to create a REST API for the amiibo data</p>
                            <a href="https://github.com/NoahWalji/amiibo-tracker" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src="/personalSiteIcon.png" alt="Amiibo Tracker"/>
                        <div className="card-body">
                            <h5 className="card-title">Personal Website</h5>
                            <p className="card-text">A single paged web application that you're viewing right now! The site outlines my portfolio and accomplishments</p>
                            <p className="card-text">Frontend: React Native</p>
                            <p className="card-text"></p>
                            <a href="/" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="technologies">
                <h3>Frontend Technologies</h3>
                <img className="frontEndimg" src="/html.png" alt="HTML"></img>
                <img className="frontEndimg" src="/css.png" alt="CSS"></img>
                <img className="frontEndimg" src="/javascript.png" alt="Javascript"></img>
                <img className="frontEndimg" src="/reactjs.png" alt="ReactJS"></img>
            </div>
            <div className="technologies">
                <h3>Backend Technologies</h3>
                <img className="frontEndimg" src="/php.png" alt="PHP"></img>
                <img className="frontEndimg" src="/nodejs.png" alt="NodeJS"></img>
                <img className="frontEndimg" src="/csharp.png" alt="C#"></img>
                <img className="frontEndimg" src="/c.png" alt="C"></img>
                <img className="frontEndimg" src="/java.png" alt="Java"></img>
                <img className="frontEndimg" src="/python.png" alt="Python"></img>
                <img className="frontEndimg" src="/mysql.png" alt="MySQL"></img>
            </div>
        </div>
    )
}

export default Portfolio;
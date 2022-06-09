import React from 'react';

function Exeperience(props) {
    return (
        <div className="fullPage-blue" id="experienceLink">
            <h1>Exeperience</h1>
            <div id="timeline">
                <div className="timeline-container timeline-left">
                    <div className="container-content">
                        <h2>Scotiabank: Tech Analyst (Web Developer)</h2>
                        <h5>September 2021 - December 2021</h5>
                        <ul>
                            <li>Used frontend and backend knowledge in HTML/CSS, Javascript, React JS and C# to build web technologies for traders</li>
                            <li>Implemented REST APIs using C# and MySQL to be used department wide</li>
                            <li>Planned, built and tested a web application to merge, sort, filter and export Excel and CSV spreadsheets</li>
                            <li>Implemented front end designs and utilties for existing queries to simplify development and testing across the team</li>
                            <li>Partcipated in daily SCRUMs and code reviews</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-container timeline-right">
                    <div className="container-content">
                        <h2>SoCast Digital: Junior Developer</h2>
                        <h5>May 2020 - August 2020 & January 2021 - April 2021</h5>
                        <ul>
                            <li>Used knowledge in languages such as PHP, HTML/CSS, JavaScript, React JS, Swift and MySQL to fix platform and mobile bugs</li>
                            <li>Created and fixed Wordpress themes, widgets and shortcodes </li>
                            <li>Worked on long term enhancement projects for both the main and mobile platform</li>
                            <li>Reduced company bug backlog by 90% over the span of 4 months</li>
                            <li>Worked with the QA Team to test and release several platform bugs and enhancements </li>
                            <li>Participate in agile methodologies like sprint and SCRUM</li>
                            <li>Worked with JIRA, Bitbucket and Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exeperience;
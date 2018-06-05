import React from 'react';
import './MeetUs.css';
import MeetUsMap from './MeetUs_Map';



function MeetUs() {
    return(
<div>
        <div className="spacerDiv" id="Meet" >
                    </div>
        <div className="meetUs">
            {/* <img src={arrow} className="arrow" alt="arrow animation"/>
            <br /> */}
            <h2>Nashville Software School Cohort 24</h2>
            <MeetUsMap />
        </div>
        </div>
    )
}

export default MeetUs;

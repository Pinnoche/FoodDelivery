import React from 'react';
import '../Styles/AboutCard.css'

function AboutCard(props) {
    return (
        <div className='about-card'>
            <div style={{backgroundColor:props.bgcolor}} className="card-number">
                {props.number}
            </div>
            <p className="aboutcard-content">
                {props.content}
            </p>
        </div>
    );
}

export default AboutCard;
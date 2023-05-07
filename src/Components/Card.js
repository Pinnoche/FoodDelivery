import React from 'react';
import '../Styles/Card.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Card({ bgcolor, title, content, classes, clickFunction}) {
    return (
        <div style={{ backgroundColor: bgcolor }}  className={classes} >
                <h3 className='header-card-title'>{ title }</h3>
                    <p className='header-card-content'>{content}</p>
                <div className='header-card-button' onClick={clickFunction}>
                <p>Check now</p>
                <KeyboardArrowRightIcon className='arrow'/>
                </div>
            </div>
    );
}

export default Card;
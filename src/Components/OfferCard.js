import React from 'react';
import '../Styles/OfferCard.css'

function OfferCard(props) {
    return (
        <div className='offercard'>
            <div className="menu-name">
                {props.name}
            </div>
            <img src={props.image} alt="" className='menu-img'/>
        </div>
    );
}

export default OfferCard;
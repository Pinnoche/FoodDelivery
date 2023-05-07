import React from 'react';
import AboutCard from './AboutCard';
import '../Styles/About.css'
import OfferCard from './OfferCard';
import offer1 from '../Resources/images/bestoffer1.jpg'
import offer2 from '../Resources/images/bestoffer2.jpg'
import offer3 from '../Resources/images/bestoffer3.jpg'


const AboutCard_data = [
    {
        number: 1,
        content: "We strive to deliver your orders in a timely manner",
        bgcolor:'#F9561E'
    },
    {
        number: 2,
        content: "We add new special recipes in our menu, every week",
        bgcolor:'#FF9820'
    },
    {
        number: 3,
        content: "We guarantee the use of natural & chemical-free food",
        bgcolor:'#F9561E'
    }
]


const bestoffer = [
    {
        name: 'Tomato Pizza $8',
        img: offer1
    },
    {
        name: 'Mini Burger $5',
        img: offer2
    },
    {
        name: 'Maki Roll $13',
        img: offer3
    }
]



function About(props) {
    return (
        <>
            <div className="About">
                <h1 className="choose">
                    Why customers choose us
                </h1>
                <div className="offer-cont">
                    {AboutCard_data.map((data) => 
                        <AboutCard key={ data.number } number={data.number} content ={data.content} bgcolor = {data.bgcolor} />
                    )}
                </div>
                
            </div>
            <div className="offer">
                <h1 className="offer-heading">
                    Best offers
                </h1>
                <h3 className="offer-subheading">
                    Daily offers special for you!
                </h3>
                <p className="offer-paragraph">                 
                    Hurry up to take advantage of today's best offers 
                    at the cheapest price. The offer is available for 24 hours. 
                </p>
                <div className='bestoffer'>
                    {bestoffer.map((offer, index) =>
                        <OfferCard key={index} name={ offer.name } image={offer.img} />
                    )}
                </div>
            </div>
        </>
    );
}

export default About;
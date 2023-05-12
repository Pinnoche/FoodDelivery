import React from 'react';
import Card from './Card';
import deliveryman from '../Resources/images/deliveryman.jpg';
import { Navigate, useNavigate } from "react-router-dom";
import '../Styles/Intro.css';



export const Offerview = () => {
    let menubar = document.querySelector(".menuitem_cont");
    menubar.style.display = "none"
    let offerview = document.querySelector('.offer');
    offerview.scrollIntoView({
        behavior: 'smooth'
    })
}

export const Dealview = () => {
    let menubar = document.querySelector(".menuitem_cont");
    menubar.style.display = "none"
    let dealview = document.querySelector('.today-deal');
    dealview.scrollIntoView({
        behavior: 'smooth'
    })
}



function Intro(props) {
    const navigate = useNavigate();
    const MenuLocation = () => navigate('/menu');

    const cardData = [
    {
        title: "Menu",
        content: 'Over 200 meals including healthy and fast food.',
        bgcolor: '#F77548',
        class: "deskbg1 header-card",
        clickFunction: MenuLocation
    },
    {
        title: "Best Offers",
        content: 'Daily special offers at low prices for our  customers.',
        bgcolor: '#FCAA4A',
        class: "deskbg2 header-card",
        clickFunction: Offerview
    },
    {
        title: "Today's Deal",
        content: 'Hot deals for popular meals with 24 hours availability.',
        bgcolor: '#F77548',
        class: "deskbg1 header-card",
        clickFunction: Dealview
    }
]
    

    return (
        <>
            <div className='intro'>
            <div className='header'></div>
            <div className="intro-content">
                <h1 className='intro_content'>Food delivery services in over 70 cities across the United States. </h1>
            </div>
            <div className="header-card-cont">
                {cardData.map((card, index) =>
                    <Card key={index} title={card.title} content={card.content} bgcolor={card.bgcolor} classes={card.class} clickFunction={card.clickFunction} />
                )}
            </div>
            
            </div>
            <div className="foodintro">
                <div className="foodintro-content-cont">
                    <h1 className="foodintro-title">
                        FOOD DELIVERY
                    </h1>
                    <p className="foodintro-content1">
                        Food Delivery is an online food ordering and delivery
                        marketplace platform founded by chef A. Hemingway back in 2014.
                        The platform is a reliable source of healthy and fresh food for anyone
                        at any time. Check the special menu, select the meal, order online, or
                        by call and expect fast free delivery.
                    </p>
                    <p className="foodintro-content2">
                        In 2019, we have been awarded as the 'Best Online Food Delivery Platform
                        of the Year' according to Ghana eCommerce Awards.
                    </p>
                </div>
                <div className="deliveryman-cont">
                    <p className="deliveryman-title">
                        Stay home, stay safe
                    </p>
                    <p className="deliveryman-subhead">
                        We'll deliver to you.  
                    </p>
                    <img src={deliveryman} alt="deliveryman" className="deliveryman" />
                </div>
            </div>
        </>
        
    );
}

export default Intro;
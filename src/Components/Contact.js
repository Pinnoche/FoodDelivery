import React from 'react';
import '../Styles/Contact.css';
import todayDeal from '../Resources/images/deal.jpg';



const daily_deal =  {
        head: 'Today\'s deal 30% OFF',
        content1: 'Any vegans here? We have great news for you! ',
        content2:'Order this meat-free Vegan Salad at a 30% discounted price only today. This can be served at any time of the day with hot dishes.',
        today_img: todayDeal
    }


function Contact(props) {
    return (
        <div>
            <div className="order-contact">
                <h1 className='contact-num'>Call at +234-9158-585-190 or order online</h1>
                <p className='contact-content'>We've made it easier to get your desired
                    meal on time. Check the menu to order now!</p>
                <div className="buttons">
                    <p className="order-button">Order online</p>
                    <p className="menu-button">Menu</p>
                </div>
                
            </div>
            <div className="today-deal">
                <div className="today-cont">
                    <h1 className="today-deal-header">{daily_deal.head}</h1>
                    <p className="today-deal-item">{daily_deal.content1}</p>
                    <p className="today-deal-item content2">{ daily_deal.content2 }</p>
                </div>
                <img src={daily_deal.today_img} alt="" className="today-deal-img" />  
            </div>
        </div>
    );
}

export default Contact;
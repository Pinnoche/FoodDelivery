import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';
import '../Styles/OrderPage.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from '../Resources/images/deliveryman2.jpg'

function OrderPage(props) {

    const { setHome } = useContext(UserContext);
    
    useEffect(() =>{
        setHome(false)
    },
    )

    return (
        <div>
            <div className="order-header">
                ORDER
            </div> 
            <div className="order-cont">
                <div className="order-msg-cont">
                    <h2 className="order-msg-head">Order online</h2>
                    <p className="order-msg">Please send a message with your order details and we will get back in touch shortly. You will receive a short form to process the order.
                        <br />
                        <br/>
                        +2349-158-585-190
                        <br />
                        <br />
                        malikolalekana4@gmail.com
                    </p>
                    <div className="follow-cont">
                        <p className="follow-us">Follow us:</p>
                        <div className="follow-social">
                            <FacebookRoundedIcon className=' folow-social_item' />
                            <InstagramIcon className='folow-social_item' />
                            <YouTubeIcon className='folow-social_item' />
                            <PinterestIcon className='folow-social_item' />
                        </div>
                    </div>
                </div>
                <div className="order-form-cont">
                    <form action="" method="post">
                        <input type="text" name="name" id="name" placeholder='Name*' required/>
                        <input type="email" name="emali" id="email" placeholder='Email*' required/>
                        <textarea name="order" id="order" cols="30" rows="10" placeholder='Type your order here....' required></textarea>
                        <button type="submit" className="order-form-but">Send</button>
                    </form>
                </div>
            </div>
            <div className="order-contact">
                <h1 className="order-contact-header">
                    Call us at +382-2742-293 for order
                </h1>
            </div>
            <div className="deliveryman-cont2">
               <div className="deliveryman-word-cont">
                    <h1 className="deliveryman-word-title">Free delivery on orders above $30</h1>
                    <p className="deliveryman-word">
                        Exclusive offer for exclusive customers!
                        <br />
                        Enjoy your food delivered to your door for free in case of orders above $30. 
                    </p>
                </div>
                <img src={logo} alt="" className="deliveryman-img1" /> 
            </div>
            <div className="our-contact-cont">
                <div className="our-contact">
                    <h1 className="contact-heading">
                        Contact
                    </h1>
                    <p className="contant-info">
                        malikolalekana4@gmail.com
                    </p>
                    <p className="contant-info">
                        +234-9158-585-190
                    </p>
                </div>
                <div className="working-hour">
                    <h1 className="working-heading">
                        Working hours
                    </h1>
                    <p className="working-info">
                        Monday to Sunday 
                        
                    </p>
                    <p className="working-info">
                        7:00 am - 22:00 pm
                        
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
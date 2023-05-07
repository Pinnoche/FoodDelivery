import React from 'react';
import '../Styles/Footer.css';
import logo from '../Resources/images/footerlogo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';


function Footer(props) {
    console.log('Footer rendered');
    return (
        <div className='footer'>
            <div className="footer-nav">
                <Link to='/' className="navitem">Home</Link>
                <Link to='menu' className="navitem">Menu</Link>
                <Link to='order' className="navitem">Order</Link>
            </div>  
            <div className="footer-other">
                <div className="footer-social">
                    <FacebookRoundedIcon className=' social_item' />
                    <InstagramIcon className='social_item' />
                    <YouTubeIcon className='social_item' />
                    <PinterestIcon className='social_item' />
                </div>
                <img src={logo} alt="" className="footer-logo" />
                <p className="copyright">Food Delivery © 2023</p>
                <div className="footer-social-desk">
                    <FacebookRoundedIcon className=' social_item' fontSize='large'/>
                    <InstagramIcon className='social_item' fontSize='large'/>
                    <YouTubeIcon className='social_item' fontSize='large'/>
                    <PinterestIcon className='social_item' fontSize='large'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;

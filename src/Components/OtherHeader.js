import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from '../Resources/images/footerlogo.png';
import '../Styles/OtherHeader.css';
import { Link } from 'react-router-dom';

function OtherHeader(props) {

    window.onscroll = () => {
        let container = document.querySelector(".home-header1");
        let logo = document.querySelector(":root");
              let backtotop = document.querySelector(".backtotop");
        

        if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 || window.scrollY >= 500) {
            backtotop.style.display = "block"; 
        } else {
            backtotop.style.display = "none";
            }

        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 || window.scrollY >= 50) {
            container.style.background = "#252525"; 
            if (window.scrollY >= 50) {
                logo.style.setProperty('--percphone', '18%');
                logo.style.setProperty('--perctab', '8%');
                logo.style.setProperty('--percdesk', '6%');
            }
            }     
        else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50 || window.scrollY < 50) {
            container.style.background = "none"
            if (window.scrollY <= 5) {
                logo.style.setProperty('--percphone', '26%');
                logo.style.setProperty('--perctab', '14%');
                logo.style.setProperty('--percdesk', '13%');
            }
            else if (window.scrollY <= 10) {
                logo.style.setProperty('--percphone', '24%');
                logo.style.setProperty('--perctab', '13%');
                logo.style.setProperty('--percdesk', '11%');
            }
            else if (window.scrollY <= 20) {
                logo.style.setProperty('--percphone', '23%');
                logo.style.setProperty('--perctab', '12%');
                logo.style.setProperty('--percdesk', '10%');
            }
            else if (window.scrollY <= 30) {
                logo.style.setProperty('--percphone', '21%');
                logo.style.setProperty('--perctab', '11%');
                logo.style.setProperty('--percdesk', '8%');
            }
            else if (window.scrollY <= 40) {
                logo.style.setProperty('--percphone', '19%');
                logo.style.setProperty('--perctab', '10%');
                logo.style.setProperty('--percdesk', '6%');
            }
            }
     }



    const displayMenu = () => {
        let menubar = document.querySelector(".menuitem_cont1");
        if (menubar.style.display === "block") {
            menubar.style.display = "none"
        } else {
           menubar.style.display = "block" 
        }

    }



    return (
        <div className='home-header1'>
            <div className="logo-container1">
                <img src={logo} alt="fooddelivery" className='logo1'/>
                <MenuIcon onClick={displayMenu}  className='icon1' />
                 <div className="menuitem_contpc1">
                    <p  >
                        <Link to='/' className="menuitem1">Home</Link>
                    </p>
                    <p  >
                        <Link to='menu' onClick={displayMenu} className="menuitem1">Menu</Link>
                    </p>
                    <p  >
                        <Link to='order' onClick={displayMenu} className="menuitem1">Order</Link>
                    </p>
                    <div className='social-icon1'>
                         <FacebookRoundedIcon className=' social_icon1' fontSize='large'/>
                        <InstagramIcon className='social_icon1' fontSize='large'/>
                        <YouTubeIcon className='social_icon1' fontSize='large'/>
                        <PinterestIcon className='social_icon1' fontSize='large'/>
                    </div>
                </div>
            </div>
            <div className="menuitem_cont1">
                <CloseIcon onClick={displayMenu} className='close_icon1' />
                    <p  >
                        <Link to='/' className="menuitem1">Home</Link>
                    </p>
                    <p  >
                        <Link to='menu' className="menuitem1">Menu</Link>
                    </p>
                    <p  >
                        <Link to='order' className="menuitem1">Order</Link>
                    </p>
                    <div className='social-icon1'>
                        <FacebookRoundedIcon className=' social_icon1' fontSize='large'/>
                        <InstagramIcon className='social_icon1' fontSize='large'/>
                        <YouTubeIcon className='social_icon1' fontSize='large'/>
                        <PinterestIcon className='social_icon1' fontSize='large'/>
                    </div>
            </div>
            
        </div>
    );
}

export default OtherHeader;
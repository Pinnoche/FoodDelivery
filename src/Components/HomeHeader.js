import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from '../Resources/images/homelogo1.png';
import '../Styles/HomeHeader.css';
import { Link } from 'react-router-dom';

function HomeHeader(props) {

    window.onscroll = () => {
        let backtotop = document.querySelector(".backtotop");
        

        if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 || window.scrollY >= 500) {
            backtotop.style.display = "block";
        } else {
            backtotop.style.display = "none";
        }
    }

    const displayMenu = () => {
        let menubar = document.querySelector(".menuitem_cont");
        if (menubar.style.display === "block") {
            menubar.style.display = "none"
        } else {
           menubar.style.display = "block" 
        }

    }



    return (
        <div className='home_header'>
            <div className="logo_container">
                <img src={logo} alt="fooddelivery" className='logo'/>
                <MenuIcon onClick={displayMenu}  className='icon' />
                 <div className="menuitem_contpc">
                    <p  >
                        <Link to='/' className="menuitem">Home</Link>
                    </p>
                    <p  >
                        <Link to='menu' className="menuitem">Menu</Link>
                    </p>
                    <p  >
                        <Link to='order' className="menuitem">Order</Link>
                    </p>
                    <div className='socialicon'>
                         <FacebookRoundedIcon className=' social_icon' fontSize='large'/>
                        <InstagramIcon className='social_icon' fontSize='large'/>
                        <YouTubeIcon className='social_icon' fontSize='large'/>
                        <PinterestIcon className='social_icon' fontSize='large'/>
                    </div>
                </div>
            </div>
            <div className="menuitem_cont">
                <CloseIcon onClick={displayMenu} className='close_icon' />
                     <p >
                        <Link to='/'  className="menuitem">Home</Link>
                    </p>
                    <p  >
                        <Link to='menu' className="menuitem">Menu</Link>
                    </p>
                    <p  >
                        <Link to='order' className="menuitem">Order</Link>
                    </p>
                    <div className='socialicon'>
                        <FacebookRoundedIcon className=' social_icon'fontSize='large'/>
                        <InstagramIcon className='social_icon' fontSize='large'/>
                        <YouTubeIcon className='social_icon' fontSize='large'/>
                        <PinterestIcon className='social_icon' fontSize='large'/>
                    </div>
            </div>
            
        </div>
    );
}

export default HomeHeader;
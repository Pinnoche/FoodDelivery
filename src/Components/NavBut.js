import React from 'react';
import { useSwiper } from 'swiper/react';
import '../Styles/MenuPage.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function NavBut(props) {
    const swiper = useSwiper();

    return (
      <>
      <button onClick={() => swiper.slidePrev()} className='navbut_cont prev phonebut'>
          <NavigateBeforeIcon onClick={() => swiper.slidePrev()}  className='navbut'/>
        </button>
        
      <button onClick={() => swiper.slideNext()} className='navbut_cont next phonebut'>
          <NavigateNextIcon onClick={() => swiper.slideNext()}  className='navbut'/>
        </button>
   
      </>
      
  );
}

export default NavBut;
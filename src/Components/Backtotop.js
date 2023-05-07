import React from 'react';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import '../Styles/Backtotop.css';

function Backtotop(props) {


    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
   }


    return (
        <div onClick={ScrollTop} className='backtotop'>
            <KeyboardArrowUpSharpIcon  fontSize='large'/>
        </div>
    );
}

export default Backtotop;
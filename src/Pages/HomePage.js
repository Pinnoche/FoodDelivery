import React, { useContext, useEffect } from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Intro from '../Components/Intro';
import '../Styles/HomePage.css'
import { UserContext } from '../App';



function HomePage(props) {


     const { setHome } = useContext(UserContext);
    
    useEffect(() =>
        setHome(true)
    ,
    )

    return (
        <div className='homepage'>
            <Intro />
            <About />
            <Contact />
           
        </div>
    );
}

export default HomePage;
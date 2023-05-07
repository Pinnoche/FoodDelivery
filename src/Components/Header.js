import React, { useContext, useMemo } from 'react';
import HomeHeader from './HomeHeader';
import OtherHeader from './OtherHeader';
import '../Styles/Header.css';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../App';
import Backtotop from './Backtotop';
import Footer from './Footer';

function Header(props) {

    const {home} = useContext(UserContext);

    return (
        <>
            {home?<HomeHeader />:<OtherHeader />}
            
            
            <Outlet />
            {
          useMemo(() =>
          (<>
            <Backtotop />
            <Footer />
          </>
          ), [])
        }
        </>
    );
}

export default Header;
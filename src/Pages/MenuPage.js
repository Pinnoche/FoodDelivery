import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';


function MenuPage(props) {

    const { setHome } = useContext(UserContext);
    
    useEffect(() =>{
        setHome(false)
    },
    )


    return (
        <div>
            Menuklk
        </div>
    );
}

export default MenuPage;
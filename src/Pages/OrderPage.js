import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';

function OrderPage(props) {

    const { setHome } = useContext(UserContext);
    
    useEffect(() =>{
        setHome(false)
    },
    )

    return (
        <div>
            <p>
                OrderPAge kjkjnj
            </p> 
        </div>
    );
}

export default OrderPage;
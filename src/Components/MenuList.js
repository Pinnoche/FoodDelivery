import React from 'react';
import '../Styles/MenuPage.css';
import NavBut from './NavBut';

function MenuList(props) {
    return (
        <>
            <div className="menu">
                <div className="menu-list">
                    <div className="menu-border"></div>
                    <p className="list-id">{ props.list_id }</p>
                    <h3 className="menu-title">{props.menu_title}</h3>
                    {props.list.map((food, index)  => 
                    <div key={index}  className="menu-item">
                        <div className="menu-name-price">
                            <div className="name-lab">
                                <p className="mname">{ food.name}</p>
                                { food.label  && <p style={{backgroundColor:food.label_type}} className="label">{food.label_name}</p>}
                            </div>
                            <p className="price">{ food.price}</p>
                        </div>
                        <div className="menu-ing-cal">
                            <p className="ingr">{ food.ingredients}</p>
                            <p className="calo">{ food.calorie}</p>                                
                        </div>
                    </div>
                    )}
                  <NavBut />  
                </div>
                 
                <img src={ props.menu_img } alt="" className="menut-img" />
            </div>
        </>
    );
}

export default MenuList;
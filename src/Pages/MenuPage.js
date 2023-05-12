import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';
import logo from '../Resources/images/Chef.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import Menu from '../Menu';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../Styles/MenuPage.css';
import MenuList from '../Components/MenuList';



function MenuPage(props) {

    const { setHome } = useContext(UserContext);


    useEffect(() =>{
        setHome(false)
    },
    )


    return (
        <div>
            <div className="menu-header">
                MENU
            </div>
            <div className="chef">
               <div className="chef-word-cont">
                    <h1 className="chef-word-title">Cooked with pleasure</h1>
                    <p className="chef-word">
                        Selected spices and natural food for real gourmets!
                        <br />
                        With a deep passion and love, all meals are being cooked
                        by the team of professionals lead by chef A. Hemingway.
                        Find your taste among hundreds of meals listed in the menu below.
                    </p>
                </div>
                <img src={logo} alt="" className="chef-img" /> 
            </div>
            <div className="menu-cont">
                
                <Swiper className='slider_contain'
                    modules={[EffectFade]}
                    effect='fade'
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                >
                
                    {Menu.map((use,index) => (
                        <SwiperSlide key={index} className='slider_contain'>
                            <MenuList key={index} list_id={use.id} menu_title={use.menu_title} list={use.list} menu_img={use.img} />
                        </SwiperSlide>
                        )
                        
                    )}
                    
                </Swiper>
                        </div>
                        <div className="review">
                                        <Swiper
                // install Swiper modules
                            modules={[Pagination, Autoplay]}
                                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}        
                // spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
                            <SwiperSlide>
                                <div className="reviewer">
                                    <h4 className="reviewer_name">Ajani Malik</h4>
                                    <h1 className='reviewer_review'>
                                        I've been ordering food from this platform for over two years now.
                                        The daily offers and deals are real lifesavers. Highly recommended!
                                    </h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviewer">
                                    <h4 className="reviewer_name">Luminous Abubakr</h4>
                                    <h1 className='reviewer_review'>
                                        I can't thank enough for the amazing services the Food Delivery provides. What 
                                        I love most about them is the punctuality. Delicious food and polite staff!
                                    </h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="menu-order">
                <h1 className="menu-order-header">
                    Call us at +382-2742-293 or order online
                </h1>
                <p className="menu-order-but">
                    Order now
                </p>
            </div>
            
        </div>
    );
}

export default MenuPage;
import React, { useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import Cat1 from '../../assets/images/cat1.png'


const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ])
    return(
        <section className="homeCat">
            <div className="container">
            <h3 className="mb-4 hd">Featured Categories</h3>
            <Swiper
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
            slidesPerGroup={1}
            pagination={{
            clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
            >
            {
                itemBg?.map((item, index) => {
                    return(
                        <SwiperSlide>
                            <div className="item text-center" style={{background: item}}>
                                <img src={Cat1} alt="cat"/>

                                <h4 style={{fontSize: 16}}>Apples</h4>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
                
                
            </Swiper>
            </div>
        </section>
    )
}
export default HomeCat
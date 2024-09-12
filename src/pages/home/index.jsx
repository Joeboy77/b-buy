import HomeBanner from "../../components/homeBanner"
import Product1 from '../../assets/images/product1.jpeg'
import Product2 from'../../assets/images/product2.png'
import { Button } from "@mui/material"
import { IoArrowForward } from "react-icons/io5";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import Rating from '@mui/material/Rating';





const Home = () => {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <>
            <HomeBanner />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={Product1} alt="product-image" className="cursor" />
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Best offers made for you</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All <IoArrowForward /></Button>
                            </div>

                            <div className="product_row w-100" style={{marginTop: 20}}>
                            <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src={Product2} alt="poduct" className="w-100"/>
                                        </div>
                                        <div className="info">
                                            <h4>Nivea Nourrisant Body Lotion</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src={Product2} alt="poduct" className="w-100"/>
                                        </div>
                                        <div className="info">
                                            <h4>Nivea Nourrisant Body Lotion</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src={Product2} alt="poduct" className="w-100"/>
                                        </div>
                                        <div className="info">
                                            <h4>Nivea Nourrisant Body Lotion</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src={Product2} alt="poduct" className="w-100"/>
                                        </div>
                                        <div className="info">
                                            <h4>Nivea Nourrisant Body Lotion</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src={Product2} alt="poduct" className="w-100"/>
                                        </div>
                                        <div className="info">
                                            <h4>Nivea Nourrisant Body Lotion</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src={Product2} alt="poduct" className="w-100"/>
                                        </div>
                                        <div className="info">
                                            <h4>Nivea Nourrisant Body Lotion</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src={Product2} alt="poduct" className="w-100"/>
                                        </div>
                                        <div className="info">
                                            <h4>Nivea Nourrisant Body Lotion</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home
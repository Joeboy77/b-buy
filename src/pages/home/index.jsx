import HomeBanner from "../../components/homeBanner"
import Product1 from '../../assets/images/sideBan.jpg'
import Product2 from '../../assets/images/sideBan2.jpg'
import { Button } from "@mui/material"
import { IoArrowForward } from "react-icons/io5";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import ProductItem from "../../components/productItem/ProductItem";
import HomeCat from "../../components/homeCat";
import Banner1 from '../../assets/images/nextBan1.jpg'
import Banner2 from '../../assets/images/nextBan.jpg'






const Home = () => {


    return(
        <>
            <HomeBanner />

            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={Product1} alt="product-image" className="cursor w-100" />
                            </div>

                            <div className="banner mt-4">
                                <img src={Product2} alt="product-image" className="cursor w-100" />
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
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stock</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All <IoArrowForward /></Button>
                            </div>

                            <div className="product_row w-100" style={{marginTop: 20}}>
                            <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            >
                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
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
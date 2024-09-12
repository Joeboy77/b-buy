import React from "react";
import Slider from "react-slick";
import Banner1 from '../../assets/images/newban.jpg'
import Banner2 from '../../assets/images/ban2.jpg'
import Banner3 from '../../assets/images/ban3.jpg'



const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      };

    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src={Banner1} className="w-100 " alt="banner" style={{height: 400, objectFit: 'cover'}}/>
                </div>
                <div className="item">
                    <img src={Banner2} className="w-100 " alt="banner" style={{height: 400, objectFit: 'cover'}}/>
                </div>
                <div className="item">
                    <img src={Banner3} className="w-100 " alt="banner" style={{height: 400, objectFit: 'cover'}}/>
                </div>
            </Slider>
        </div>
    )
}
export default HomeBanner
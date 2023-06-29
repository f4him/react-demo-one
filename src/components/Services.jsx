import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
const Services = () => {
  return (
    <>
    <div className="wrapper">
    <div className="services">
        <Carousel infiniteLoop autoPlay interval={1000}>
            <div>
                <img className='leg' src={img3} alt='random text'/>
                <p className='legend'>Legend one</p>
            </div>
            <div>
                <img className='leg' src={img4} alt='random text'/>
                <p className='legend'>Legend two</p>
            </div>
            <div>
                <img className='leg' src={img5} alt='random text'/>
                <p className='legend'>Legend three</p>
            </div>
            <div>
                <img className='leg' src={img6} alt='random text'/>
                <p className='legend'>Legend four</p>
            </div>
        </Carousel>
    </div>
    </div>
    </>
    )
}

export default Services
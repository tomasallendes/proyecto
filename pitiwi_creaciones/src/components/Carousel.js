import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import car1 from '../img/imagen1.jpg';
import car2 from '../img/imagen2.jpg';
import car3 from '../img/imagen3.jpg';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '60%' }}> {/* Ajusta el ancho según sea necesario */} 
        <Slider {...settings}>
          <div>
            <img src={car1} alt="Slide 1" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={car2} alt="Slide 2" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={car3} alt="Slide 3" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

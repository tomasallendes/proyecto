import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ width = '60%', images = [] }) => {
  // Filtra las imágenes no nulas
  const validImages = images.filter(image => image !== null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Muestra una imagen por slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width }}>
        <Slider {...settings}>
          {validImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

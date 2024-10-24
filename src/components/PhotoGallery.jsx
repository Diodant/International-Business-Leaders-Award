import React from 'react';
import img1 from '../images/gallery/img1.jpg';
import img2 from '../images/gallery/img2.jpg';
import img3 from '../images/gallery/img3.jpg';
import img4 from '../images/gallery/img4.jpg';
import img5 from '../images/gallery/img5.jpg';
import img6 from '../images/gallery/img6.jpg';
import img7 from '../images/gallery/img7.jpg';
import img8 from '../images/gallery/img8.jpg';
import img9 from '../images/gallery/img9.jpg';
import img10 from '../images/gallery/img10.jpg';
import img11 from '../images/gallery/img11.jpg';
import img12 from '../images/gallery/img12.jpg';
import img13 from '../images/gallery/img13.jpg';
import img14 from '../images/gallery/img14.jpg';
import img15 from '../images/gallery/img15.jpg';
import img16 from '../images/gallery/img16.jpg';

const PhotoGallery = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16
  ];

  return (

    <>
            <div className="gallery-container">
      <div className="overlay">
        <div className="text-content">
          <h3>Фотогалерея</h3>
          <h1>Международной Премии Лидеров бизнеса</h1>
        </div>
      </div>
    </div>
    <div className="gallery-section">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PhotoGallery;

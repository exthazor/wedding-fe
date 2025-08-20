
import { useState, useEffect } from 'react';

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    {
      src: '/photos/photo_2.jpg', // Traditional outfit
      position: 'center 40%'
    },
    {
      src: '/photos/photo_3.jpg', // Resort photo
      position: 'center 65%'
    },
    {
      src: '/photos/photo_4.jpg', // Comic Con outfit
      position: 'center 75%'
    },
    {
      src: '/photos/photo_1.jpg', // Motorcycle photo
      position: 'center 30%'
    },
    {
      src: '/photos/photo_5.jpg', // Birthday outfit
      position: 'center 43%'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel">
      <div 
        className="carousel-container"
        style={{
          // Safari-specific fixes
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          willChange: 'auto',
          backgroundColor: '#000', // Ensure consistent background
          overflow: 'hidden'
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={`Rhitam & Rojika ${index + 1}`}
            className={`carousel-photo ${index === currentPhoto ? 'active' : ''}`}
            style={{ 
              objectPosition: photo.position,
              // Safari-specific image fixes
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              willChange: index === currentPhoto ? 'opacity' : 'auto',
              // Ensure images fill completely
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            // Preload next image to prevent flashing
            loading={index <= currentPhoto + 1 ? 'eager' : 'lazy'}
          />
        ))}
        <div className="carousel-overlay">
          <h1>Rhitam & Rojika</h1>
          <p>January 25th, 2026</p>
        </div>
      </div>
      <div className="carousel-dots">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentPhoto ? 'active' : ''}`}
            onClick={() => setCurrentPhoto(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
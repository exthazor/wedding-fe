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
    },
    {
      src: '/photos/photo_6.jpg',
      position: 'center 52%'
    },
    {
      src: '/photos/photo_7.jpg',
      position: 'center 58%'
    },
    {
      src: '/photos/photo_8.jpg',
      position: 'center 45%'
    },
    {
      src: '/photos/photo_9.jpg',
      position: 'center 55%'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const goToNext = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Handle click/touch on image
  const handleImageClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const imageWidth = rect.width;
    
    // If clicked on right half, go next. If left half, go previous
    if (clickX > imageWidth / 2) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

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
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer' // Show it's clickable
        }}
        onClick={handleImageClick}
      >
        {/* Navigation zones (invisible) */}
        <div 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '50%',
            height: '100%',
            zIndex: 10,
            cursor: 'w-resize' // Left arrow cursor
          }}
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
        />
        <div 
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            height: '100%',
            zIndex: 10,
            cursor: 'e-resize' // Right arrow cursor
          }}
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
        />

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
              objectFit: 'cover',
              userSelect: 'none' // Prevent image selection
            }}
            // Preload next image to prevent flashing
            loading={index <= currentPhoto + 1 ? 'eager' : 'lazy'}
            draggable={false} // Prevent image dragging
          />
        ))}
        
        {/* Optional: Visual indicators for navigation zones */}
        <div 
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '2rem',
            color: 'rgba(255,255,255,0.7)',
            pointerEvents: 'none',
            zIndex: 5,
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
          className="nav-indicator-left"
        >
          ←
        </div>
        <div 
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '2rem',
            color: 'rgba(255,255,255,0.7)',
            pointerEvents: 'none',
            zIndex: 5,
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
          className="nav-indicator-right"
        >
          →
        </div>

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

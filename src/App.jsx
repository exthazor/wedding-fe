import React, { useState, useEffect, useRef } from 'react';
import BackgroundAnimation from './components/effects/BackgroundAnimation';
import ParticleSystem from './components/effects/ParticleSystem';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import ModalSystem from './components/ModalSystem';
import GhibliCard from './components/cards/GhibliCard';
import WitcherCard from './components/cards/WitcherCard';
import CyberpunkCard from './components/cards/CyberpunkCard';
import PixelCard from './components/cards/PixelCard';
import PhotoCarousel from './components/carousel/PhotoCarousel';
import './styles/main.css';

const App = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [stars, setStars] = useState([]);
  const [petals, setPetals] = useState([]);
  const [particles, setParticles] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const particleIdRef = useRef(0);

  // Initialize stars on mount
  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 100; i++) {
      starArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3
      });
    }
    setStars(starArray);
    
    // Show Ghibli card by default after a delay
    setTimeout(() => setActiveCard('ghibli'), 1500);
  }, []);

  // Create petals for Ghibli theme
  useEffect(() => {
    if (activeCard === 'ghibli') {
      const petalArray = [];
      const petalEmojis = ['🌸', '🌺', '🍃', '✨', '🌙'];
      for (let i = 0; i < 15; i++) {
        petalArray.push({
          id: i,
          emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
          left: Math.random() * 100,
          duration: Math.random() * 5 + 7,
          delay: Math.random() * 5
        });
      }
      setPetals(petalArray);
    }
  }, [activeCard]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleModalClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showCard = (theme) => {
  setActiveCard(theme);
  
  setTimeout(() => {
    const cardElement = document.getElementById(`${theme}-card`);
    if (cardElement) {
      // Get card position
      const rect = cardElement.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top;
      
      // Adjust offset based on screen size
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 10 : 20;
      
      window.scrollTo({
        top: offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }, 200); // Slightly longer delay for card animation
};

  const handleModalOpen = (theme) => {
    setOpenModal(theme);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setFormData({ firstName: '', lastName: '', phone: '', email: '' });
  };

  const handleModalClose = () => {
    setOpenModal(null);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setFormData({ firstName: '', lastName: '', phone: '', email: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare the data for the API
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        theme: openModal
      };

      const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://wedding-two-rust.vercel.app';
      const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });


      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('User saved successfully:', result);
      
      setIsSubmitted(true);
      setTimeout(() => {
        handleModalClose();
      }, 4000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const createMagicalParticle = (emoji, theme) => {
    const newParticle = {
      id: particleIdRef.current++,
      emoji,
      theme,
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 20,
      angle: Math.random() * 360,
      distance: Math.random() * 300 + 100,
      duration: Math.random() * 2000 + 1500
    };

    setParticles(prev => [...prev, newParticle]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, newParticle.duration);
  };

  const triggerSpecialEffect = (theme, event) => {
    let effects = [];
    let count = 30;

    switch (theme) {
      case 'ghibli':
        effects = ['🌸', '🌺', '✨', '🌙', '🍃', '💖', '🦋', '🌟'];
        break;
      case 'witcher':
        effects = ['⚔️', '🐺', '🔥', '⚡', '🛡️', '🌀', '💀', '🏰', '🍷', '💎'];
        break;
      case 'cyberpunk':
        effects = ['⚡', '💾', '🔥', '⚠️', '💻', '🤖', '🔴', '🟢'];
        count = 25;
        break;
      case 'pixel':
        effects = ['🎮', '👾', '🕹️', '⭐', '💥', '🎯', '🔸', '🔹'];
        count = 40;
        break;
    }

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        createMagicalParticle(effects[Math.floor(Math.random() * effects.length)], theme);
      }, i * (theme === 'pixel' ? 60 : theme === 'cyberpunk' ? 80 : 100));
    }

    // Update button text temporarily
    const btn = event.target;
    const original = btn.innerHTML;
    let newText = '';
    
    switch (theme) {
      case 'ghibli': newText = '🌟 Magic Cast Successfully!'; break;
      case 'witcher': newText = '🐺 CONTRACT ACCEPTED!'; break;
      case 'cyberpunk': newText = '💀 SYSTEM HACKED!'; break;
      case 'pixel': newText = '🎊 PLAYER JOINED!'; break;
    }
    
    btn.innerHTML = newText;
    setTimeout(() => btn.innerHTML = original, 3000);
  };

  const getSuccessMessage = (theme, firstName) => {
    switch (theme) {
      case 'ghibli':
        return `Thank you, ${firstName}! ✨\nThe forest spirits have received your message!`;
      case 'witcher':
        return `Well met, ${firstName}.\nYour name is on the guest list. Destiny awaits. 🐺`;
      case 'cyberpunk':
        return `> AUTHENTICATION COMPLETE.\n> USER: ${firstName.toUpperCase()} ADDED.\n> WELCOME TO THE CREW.`;
      case 'pixel':
        return `LEVEL UP!\n${firstName.toUpperCase()} has joined the party!`;
      default:
        return `Thank you, ${firstName}!`;
    }
  };

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Cinzel:wght@400;600;700&family=Press+Start+2P&family=Kalam:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="wedding-app">
      
      <BackgroundAnimation stars={stars} />
      <ParticleSystem particles={particles} />
      <PhotoCarousel />
      <ThemeSelector onThemeSelect={showCard} />
      
      <GhibliCard 
        isActive={activeCard === 'ghibli'}
        petals={petals}
        onModalOpen={handleModalOpen}
        onSpecialEffect={triggerSpecialEffect}
      />
      
      <WitcherCard 
        isActive={activeCard === 'witcher'}
        onModalOpen={handleModalOpen}
        onSpecialEffect={triggerSpecialEffect}
      />
      
      <CyberpunkCard 
        isActive={activeCard === 'cyberpunk'}
        onModalOpen={handleModalOpen}
        onSpecialEffect={triggerSpecialEffect}
      />
      
      <PixelCard 
        isActive={activeCard === 'pixel'}
        onModalOpen={handleModalOpen}
        onSpecialEffect={triggerSpecialEffect}
      />
      
      <ModalSystem
        openModal={openModal}
        onClose={handleModalClose}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        submitError={submitError}
        getSuccessMessage={getSuccessMessage}
      />
    </div>
  );
};

export default App;
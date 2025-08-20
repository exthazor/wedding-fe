import { useState, useRef } from 'react';

const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const currentThemeRef = useRef(null);

  const playThemeMusic = (theme) => {
    // Stop current music if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Don't replay same theme
    if (currentThemeRef.current === theme && isPlaying) {
      return;
    }

    const audioFiles = {
      ghibli: '/audio/ghibli-music.mp3',
      witcher: '/audio/witcher-music.mp3',
      cyberpunk: '/audio/cyberpunk-music.mp3',
      pixel: '/audio/pixel-music.mp3'
    };

    if (audioFiles[theme]) {
      audioRef.current = new Audio(audioFiles[theme]);
      audioRef.current.volume = 0.3; // 30% volume
      audioRef.current.loop = true;
      
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          currentThemeRef.current = theme;
        })
        .catch(error => {
          console.log('Audio play failed:', error);
        });
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      currentThemeRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return { playThemeMusic, stopMusic, toggleMusic, isPlaying };
};

export default useAudio;
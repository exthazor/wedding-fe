const ThemeSelector = ({ onThemeSelect }) => {
  return (
    <div className="theme-selector">
      <h1>✨ CHOOSE YOUR WEDDING ADVENTURE ✨</h1>
      <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px' }}>
        Select a theme that matches your love story!
      </p>
      
      <div className="theme-buttons">
        <button 
          className="theme-btn btn-ghibli" 
          onClick={() => onThemeSelect('ghibli')}
        >
          🌸 Studio Ghibli Magic
        </button>
        <button 
          className="theme-btn btn-witcher" 
          onClick={() => onThemeSelect('witcher')}
        >
          🐺 The Witcher Saga
        </button>
        <button 
          className="theme-btn btn-cyberpunk" 
          onClick={() => onThemeSelect('cyberpunk')}
        >
          🤖 Cyberpunk 2077
        </button>
        <button 
          className="theme-btn btn-pixel" 
          onClick={() => onThemeSelect('pixel')}
        >
          🎮 Retro Pixel Art
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
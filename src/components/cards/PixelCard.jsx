const PixelCard = ({ isActive, onModalOpen, onSpecialEffect }) => {
  return (
    <div className="card-wrapper">
      <div 
        className={`card pixel-card ${isActive ? 'active' : ''}`} 
        id="pixel-card"
      >
        <div className="pixel-header">
          <div className="pixel-title">GAME START!</div>
          <p style={{ 
            fontSize: '0.7rem', 
            color: 'white', 
            marginTop: '10px', 
            fontFamily: "'Press Start 2P', cursive" 
          }}>
            CO-OP MODE: ETERNAL LOVE EDITION
          </p>
        </div>
        
        <div className="card-content">
          {/* Game UI Panel */}
          <div style={{ 
            background: '#2c3e50', 
            border: '4px solid #ecf0f1', 
            borderRadius: '0', // Pure pixel style
            padding: '15px', 
            margin: '15px 0',
            boxShadow: '4px 4px 0px #000'
          }}>
            {/* Player Stats */}
            <div style={{ marginBottom: '15px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                margin: '8px 0', 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.6rem' 
              }}>
                <span style={{ minWidth: '40px' }}>HP:</span>
                <div style={{ 
                  width: '80px', 
                  height: '8px', 
                  background: '#000', 
                  border: '2px solid #fff', 
                  margin: '0 8px', 
                  position: 'relative',
                  imageRendering: 'pixelated'
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: '#e74c3c',
                    imageRendering: 'pixelated'
                  }}></div>
                </div>
                <span style={{ color: '#e74c3c' }}>♥♥♥♥♥</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                margin: '8px 0', 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.6rem' 
              }}>
                <span style={{ minWidth: '40px' }}>LVL:</span>
                <div style={{ 
                  width: '80px', 
                  height: '8px', 
                  background: '#000', 
                  border: '2px solid #fff', 
                  margin: '0 8px',
                  imageRendering: 'pixelated'
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: '#f1c40f',
                    imageRendering: 'pixelated'
                  }}></div>
                </div>
                <span style={{ color: '#f1c40f' }}>MAX</span>
              </div>
            </div>
            
            {/* Character Sprites */}
            <div style={{ textAlign: 'center', margin: '15px 0' }}>
              <div style={{ 
                display: 'inline-block', 
                background: '#34495e', 
                border: '2px solid #fff',
                padding: '10px',
                margin: '5px',
                imageRendering: 'pixelated'
              }}>
                <div style={{ fontSize: '1.5rem', filter: 'contrast(1.2)' }}>🤵</div>
                <div style={{ 
                  color: '#3498db', 
                  fontSize: '0.5rem', 
                  fontFamily: "'Press Start 2P', cursive",
                  marginTop: '5px'
                }}>RHITAM</div>
              </div>
              
              <span style={{ 
                color: '#e74c3c', 
                fontSize: '1.2rem', 
                margin: '0 10px',
                filter: 'contrast(1.5)'
              }}>💖</span>
              
              <div style={{ 
                display: 'inline-block', 
                background: '#34495e', 
                border: '2px solid #fff',
                padding: '10px',
                margin: '5px',
                imageRendering: 'pixelated'
              }}>
                <div style={{ fontSize: '1.5rem', filter: 'contrast(1.2)' }}>👰</div>
                <div style={{ 
                  color: '#e91e63', 
                  fontSize: '0.5rem', 
                  fontFamily: "'Press Start 2P', cursive",
                  marginTop: '5px'
                }}>ROJIKA</div>
              </div>
            </div>
            
            {/* Achievement Unlocked */}
            <div style={{
              background: '#27ae60',
              border: '2px solid #fff',
              padding: '8px',
              textAlign: 'center',
              animation: 'pixelGlow 2s infinite'
            }}>
              <div style={{ 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.6rem' 
              }}>
                🏆 ACHIEVEMENT UNLOCKED!
              </div>
              <div style={{ 
                color: '#f1c40f', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.5rem',
                marginTop: '3px'
              }}>
                "SOULMATE FOUND"
              </div>
            </div>
          </div>
          
          {/* Quest Log Window */}
          <div style={{ 
            background: '#34495e', 
            border: '4px solid #ecf0f1', 
            borderRadius: '0',
            padding: '15px', 
            margin: '15px 0',
            boxShadow: '4px 4px 0px #000'
          }}>
            {/* Window header */}
            <div style={{
              background: '#2c3e50',
              margin: '-15px -15px 10px -15px',
              padding: '8px 15px',
              borderBottom: '2px solid #ecf0f1',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{ 
                color: '#f39c12', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.7rem', 
                margin: 0
              }}>
                📖 QUEST LOG
              </h3>
              <div style={{ color: '#e74c3c', fontSize: '0.8rem' }}>×</div>
            </div>
            
            <p style={{ 
              color: '#ecf0f1', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.6rem', 
              lineHeight: '1.4' 
            }}>
              MAIN QUEST: Two players discovered the ultimate cheat code - 
              INFINITE LOVE! Now they're hosting the final boss battle: 
              THE WEDDING CEREMONY!
            </p>
            
            <div style={{
              background: '#2c3e50',
              padding: '8px',
              margin: '10px 0',
              border: '1px solid #7f8c8d'
            }}>
              <div style={{ 
                color: '#27ae60', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.5rem' 
              }}>
                ✓ FIND PLAYER 2: COMPLETE
              </div>
              <div style={{ 
                color: '#f39c12', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.5rem',
                marginTop: '3px'
              }}>
                ▶ JOIN WEDDING PARTY: IN PROGRESS
              </div>
            </div>
          </div>
          
          {/* Mission Parameters */}
          <div style={{ 
            background: '#2c3e50', 
            border: '4px solid #3498db', 
            borderRadius: '0',
            padding: '15px', 
            margin: '15px 0',
            boxShadow: '4px 4px 0px #000'
          }}>
            <h3 style={{ 
              color: '#3498db', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.7rem', 
              marginBottom: '10px',
              textAlign: 'center'
            }}>
              🎮 MISSION BRIEFING
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ 
                background: '#34495e', 
                padding: '8px', 
                border: '1px solid #7f8c8d',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem'
                }}>DATE:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem' 
                }}>25 JAN 2026</span>
              </div>
              
              <div style={{ 
                background: '#34495e', 
                padding: '8px', 
                border: '1px solid #7f8c8d',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem'
                }}>TIME:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem' 
                }}>7:00 PM</span>
              </div>
              
              <div style={{ 
                background: '#34495e', 
                padding: '8px', 
                border: '1px solid #7f8c8d',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem'
                }}>LOCATION:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem' 
                }}>BLUE PARADISE</span>
              </div>
              
              <div style={{ 
                background: '#34495e', 
                padding: '8px', 
                border: '1px solid #7f8c8d',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem'
                }}>AREA:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.5rem' 
                }}>GUWAHATI</span>
              </div>
            </div>
          </div>
          
          {/* Action Panel */}
          <div style={{ 
            background: '#e74c3c', 
            border: '4px solid #fff', 
            borderRadius: '0',
            padding: '15px', 
            margin: '15px 0', 
            textAlign: 'center',
            boxShadow: '4px 4px 0px #000'
          }}>
            <h3 style={{ 
              color: 'white', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.6rem', 
              marginBottom: '10px',
              textShadow: '2px 2px 0px #000'
            }}>
              🕹️ SELECT ACTION
            </h3>
            
            <div style={{ 
              background: '#2c3e50',
              padding: '10px',
              margin: '10px 0',
              border: '2px solid #fff'
            }}>
              <p style={{ 
                color: '#f1c40f', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.5rem', 
                marginBottom: '10px' 
              }}>
                JOIN THE PARTY?
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <button 
                  className="special-effects-btn" 
                  onClick={() => onModalOpen('pixel')} 
                  style={{ 
                    background: '#27ae60', 
                    color: 'white', 
                    fontFamily: "'Press Start 2P', cursive", 
                    fontSize: '0.6rem',
                    padding: '10px 15px',
                    border: '3px solid #fff',
                    borderRadius: '0',
                    boxShadow: '3px 3px 0px #000',
                    width: '100%',
                    maxWidth: '200px',
                    imageRendering: 'pixelated'
                  }}
                >
                  ▶ YES - JOIN PARTY!
                </button>
                
                <button 
                  className="special-effects-btn" 
                  onClick={(e) => onSpecialEffect('pixel', e)} 
                  style={{ 
                    background: '#3498db', 
                    color: 'white', 
                    fontFamily: "'Press Start 2P', cursive", 
                    fontSize: '0.6rem',
                    padding: '10px 15px',
                    border: '3px solid #fff',
                    borderRadius: '0',
                    boxShadow: '3px 3px 0px #000',
                    width: '100%',
                    maxWidth: '200px',
                    imageRendering: 'pixelated'
                  }}
                >
                  📱 SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          
          {/* Game Info Footer */}
          <div style={{ 
            background: '#2c3e50', 
            border: '2px solid #95a5a6', 
            borderRadius: '0',
            padding: '10px', 
            margin: '15px 0', 
            textAlign: 'center',
            boxShadow: '2px 2px 0px #000'
          }}>
            <p style={{ 
              color: '#bdc3c7', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.4rem', 
              lineHeight: '1.3' 
            }}>
              PLAYERS: 2/∞ | DIFFICULTY: WHOLESOME<br />
              GENRE: ROMANCE/ADVENTURE | RATING: E FOR EVERYONE<br />
              DEVELOPED BY: DESTINY STUDIOS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelCard;
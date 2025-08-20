const GhibliCard = ({ isActive, petals, onModalOpen, onSpecialEffect }) => {
  return (
    <div className="card-wrapper">
      <div 
        className={`card ghibli-card ${isActive ? 'active' : ''}`} 
        id="ghibli-card"
      >
<div className="ghibli-header" style={{ 
  background: 'linear-gradient(180deg, #87CEEB 0%, #E6E6FA 60%, #F0F8FF 100%)',
  position: 'relative',
  overflow: 'hidden',
  padding: '30px',
  textAlign: 'center',
  borderBottom: '4px solid rgba(255, 255, 255, 0.5)' // Added a subtle border for effect
}}>
  {/* Gentle floating petals remain in the background */}
  <div className="floating-petals">
    {petals.map(petal => (
      <div
        key={petal.id}
        className="petal"
        style={{
          left: `${petal.left}%`,
          animationDuration: `${petal.duration}s`,
          animationDelay: `${petal.delay}s`,
          fontSize: '18px',
          opacity: 0.7
        }}
      >
        {petal.emoji}
      </div>
    ))}
  </div>
  
  {/* NEW: Container for the logo elements */}
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Ensures it's on top of petals
    zIndex: 1
  }}>
    {/* NEW: Totoro Icon */}
    {/* For best results, replace the text character '⚫' with a real Totoro silhouette SVG or transparent PNG */}
    <img 
      src="totoro.svg" // Example path, use your own icon
      alt="Totoro silhouette" 
      style={{ 
        width: '250px', 
        height: 'auto', 
        marginBottom: '5px',
        // Optional filter to force the blue color onto an SVG
        filter: 'invert(26%) sepia(99%) saturate(1313%) hue-rotate(187deg) brightness(93%) contrast(101%)'
      }} 
    />

    {/* UPDATED: The Main Title */}
    <div style={{ 
      fontSize: '2.2rem', // Adjusted for boldness
      fontFamily: "'Crete Round', serif",
      color: '#005A9C',
      fontWeight: 'bold',
      letterSpacing: '1px' 
      // REMOVED: textShadow and animation for a solid, static logo feel
    }}>
      Rhitam & Rojika 
    </div>
  </div>
  
  {/* UPDATED: Subtitle */}
  <p style={{ 
    fontSize: '1rem', 
    color: '#2c3e50', 
    fontStyle: 'italic',
    fontFamily: "'Kalam', cursive",
    marginTop: '15px',
    position: 'relative',
    zIndex: 1
  }}>
    Invite you to their magical beginning
  </p>
</div>
        
        <div className="card-content" style={{ padding: '25px' }}>
          {/* Kiki's Delivery Banner */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(142, 68, 173, 0.1) 0%, rgba(255, 182, 193, 0.15) 50%, rgba(135, 206, 235, 0.1) 100%)',
            border: '3px solid transparent',
            borderRadius: '25px',
            padding: '20px',
            margin: '20px 0',
            position: 'relative',
            overflow: 'hidden',
            backgroundClip: 'padding-box'
          }}>
            {/* Animated border */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(45deg, #98FB98, #87CEEB, #DDA0DD, #FFB6C1, #98FB98)',
              backgroundSize: '400% 400%',
              animation: 'borderFlow 6s ease infinite',
              borderRadius: '25px',
              zIndex: -1
            }}></div>
            
            {/* Content */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              <span style={{ 
                fontSize: '2.5rem',
                animation: 'magicPulse 2s ease-in-out infinite'
              }}>🧙‍♀️</span>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontFamily: "'Kalam', cursive", 
                  color: '#8e44ad', 
                  fontWeight: 'bold', 
                  fontSize: '1.3rem',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                }}>
                  Special Delivery from the Heart
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: '#7f8c8d',
                  fontStyle: 'italic',
                  marginTop: '5px'
                }}>
                  "Every invitation carries a piece of our soul"
                </div>
              </div>
              
              <span style={{ 
                fontSize: '2rem',
                animation: 'magicPulse 2s ease-in-out infinite 0.5s'
              }}>🐱</span>
            </div>
          </div>
        

{/* Ghibli Photo Gallery */}
<div style={{
  margin: '35px 0',
  background: 'linear-gradient(135deg, rgba(152,251,152,0.1) 0%, rgba(135,206,235,0.1) 50%, rgba(240,248,255,0.2) 100%)',
  borderRadius: '25px',
  padding: '25px',
  border: '3px solid rgba(152,251,152,0.3)',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(152,251,152,0.2)'
}}>
  {/* Floating elements */}
  <div style={{
    position: 'absolute',
    top: '10px', left: '10px',
    fontSize: '1.5rem',
    animation: 'gentleFloat 4s ease-in-out infinite'
  }}>🌸</div>
  
  <div style={{
    position: 'absolute',
    top: '15px', right: '15px',
    fontSize: '1.3rem',
    animation: 'gentleFloat 5s ease-in-out infinite 1s'
  }}>🍃</div>

  <h3 style={{
    textAlign: 'center',
    fontFamily: "'Kalam', cursive",
    color: '#27ae60',
    fontSize: '1.5rem',
    marginBottom: '25px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(255,255,255,0.8)'
  }}>
    🌿 Our Ghibli-Inspired Journey 🌿
  </h3>

  {/* Photo Container */}
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  }}>
    <div style={{
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '4px solid transparent',
      background: 'linear-gradient(45deg, #98FB98, #87CEEB, #DDA0DD, #98FB98)',
      backgroundSize: '400% 400%',
      animation: 'borderFlow 6s ease infinite',
      padding: '4px',
      maxWidth: '350px',
      width: '100%'
    }}>
      <div style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'white'
      }}>
        <img 
          src="/photos/ghibli.png"
          alt="Rhitam & Rojika - Ghibli Style"
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
          }}
        />
        
        {/* Photo overlay effects */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(45deg, transparent 30%, rgba(152,251,152,0.1) 50%, transparent 70%)',
          animation: 'photoShimmer 8s ease-in-out infinite'
        }}></div>
        
        {/* Floating sparkles over photo */}
        <div style={{
          position: 'absolute',
          top: '15px', left: '15px',
          fontSize: '1.2rem',
          animation: 'twinkle 2s ease-in-out infinite',
          color: 'rgba(255,255,255,0.9)',
          filter: 'drop-shadow(0 0 3px rgba(152,251,152,0.8))'
        }}>✨</div>
        
        <div style={{
          position: 'absolute',
          top: '20px', right: '20px',
          fontSize: '1rem',
          animation: 'twinkle 2.5s ease-in-out infinite 1s',
          color: 'rgba(255,255,255,0.9)',
          filter: 'drop-shadow(0 0 3px rgba(135,206,235,0.8))'
        }}>🌟</div>
        
        <div style={{
          position: 'absolute',
          bottom: '15px', left: '20px',
          fontSize: '1.1rem',
          animation: 'twinkle 3s ease-in-out infinite 0.5s',
          color: 'rgba(255,255,255,0.9)',
          filter: 'drop-shadow(0 0 3px rgba(221,160,221,0.8))'
        }}>💫</div>
      </div>
    </div>
  </div>

  {/* Photo caption */}
  <div style={{
    textAlign: 'center',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '15px',
    padding: '15px',
    margin: '15px 20px 0 20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    border: '2px solid rgba(152,251,152,0.3)'
  }}>
    <p style={{
      color: '#2c3e50',
      fontFamily: "'Kalam', cursive",
      fontSize: '1rem',
      fontStyle: 'italic',
      margin: 0
    }}>
      "In a world of endless green meadows and gentle breezes, 
      where every moment feels like a scene from our favorite Ghibli film..."
    </p>
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '10px',
      fontSize: '1.2rem'
    }}>
      <span style={{ animation: 'gentleFloat 3s ease-in-out infinite' }}>🌸</span>
      <span style={{ animation: 'gentleFloat 3s ease-in-out infinite 0.5s' }}>💕</span>
      <span style={{ animation: 'gentleFloat 3s ease-in-out infinite 1s' }}>🌸</span>
    </div>
  </div>
</div>
          {/* Enchanted Story Scroll */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.9) 100%)',
            border: '3px solid #98FB98',
            borderRadius: '25px',
            padding: '30px',
            margin: '25px 0',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(152,251,152,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
            overflow: 'hidden'
          }}>
            {/* Parchment texture */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(152,251,152,0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(135,206,235,0.1) 0%, transparent 50%)
              `,
              animation: 'parchmentShimmer 8s ease-in-out infinite'
            }}></div>

            {/* Corner decorations */}
            <div style={{
              position: 'absolute',
              top: '10px', left: '10px',
              fontSize: '2rem',
              animation: 'twinkle 3s ease-in-out infinite'
            }}>🌟</div>
            
            <div style={{
              position: 'absolute',
              top: '10px', right: '10px',
              fontSize: '2rem',
              animation: 'twinkle 3s ease-in-out infinite 1s'
            }}>🌟</div>
            
            <div style={{
              position: 'absolute',
              bottom: '10px', left: '10px',
              fontSize: '2rem',
              animation: 'twinkle 3s ease-in-out infinite 2s'
            }}>🌟</div>
            
            <div style={{
              position: 'absolute',
              bottom: '10px', right: '10px',
              fontSize: '2rem',
              animation: 'twinkle 3s ease-in-out infinite 0.5s'
            }}>🌟</div>

            <p style={{
              color: '#2c3e50',
              fontSize: '1.15rem',
              lineHeight: '1.8',
              textAlign: 'center',
              fontFamily: "'Kalam', cursive",
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
              position: 'relative',
              zIndex: 1,
              margin: '20px 0'
            }}>
              In a world where <strong style={{ color: '#27ae60' }}>ancient forest spirits</strong> whisper 
              secrets to the wind, where <strong style={{ color: '#8e44ad' }}>young witches deliver dreams</strong> on 
              broomsticks, and <strong style={{ color: '#e91e63' }}>celestial princesses</strong> dance among 
              the stars...
              <br /><br />
              <span style={{
                fontSize: '1.3rem',
                background: 'linear-gradient(45deg, #27ae60, #3498db, #e91e63)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                display: 'block',
                margin: '15px 0'
              }}>
                Two souls found their eternal magic ✨
              </span>
              <br />
              <em style={{ color: '#7f8c8d' }}>
                Come witness the beginning of our greatest adventure, 
                where every moment will be painted with the colors of pure joy!
              </em>
            </p>
          </div>
          
          {/* Magical Timeline */}
          <div style={{ margin: '35px 0' }}>
            <h3 style={{
              textAlign: 'center',
              fontFamily: "'Kalam', cursive",
              fontSize: '1.6rem',
              color: '#27ae60',
              marginBottom: '30px',
              textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: '-40px',
                animation: 'leafDance 4s ease-in-out infinite'
              }}>🍃</span>
              Our Enchanted Journey
              <span style={{
                position: 'absolute',
                right: '-40px',
                animation: 'leafDance 4s ease-in-out infinite 2s'
              }}>🍃</span>
            </h3>
            
            {/* Chapter 1 - Enhanced */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(39,174,96,0.15) 0%, rgba(152,251,152,0.1) 100%)',
              border: '3px solid #27ae60',
              borderRadius: '20px',
              padding: '25px',
              margin: '20px 0',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(39,174,96,0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px', right: '-10px',
                fontSize: '2rem',
                animation: 'sparkle 2s ease-in-out infinite'
              }}>🌳</div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  fontSize: '4rem',
                  animation: 'treeSway 4s ease-in-out infinite'
                }}>🏛️</div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: '#27ae60',
                    fontFamily: "'Kalam', cursive",
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>🌸 The Sacred Ceremony 🌸</h4>
                  
                  <p style={{
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    margin: '5px 0'
                  }}>
                    <span style={{ color: '#27ae60' }}>When the magic begins:</span> 25th January, 2026 at 7pm
                  </p>
                  
                  <p style={{
                    color: '#7f8c8d',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    marginTop: '10px',
                    fontFamily: "'Kalam', cursive"
                  }}>
                    "Where ancient vows echo through the sacred grove..."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chapter 2 - Enhanced */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(142,68,173,0.15) 0%, rgba(221,160,221,0.1) 100%)',
              border: '3px solid #8e44ad',
              borderRadius: '20px',
              padding: '25px',
              margin: '20px 0',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(142,68,173,0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px', right: '-10px',
                fontSize: '2rem',
                animation: 'sparkle 2s ease-in-out infinite 0.5s'
              }}>🧙‍♀️</div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  fontSize: '4rem',
                  animation: 'broomFly 3s ease-in-out infinite'
                }}>🏰</div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: '#8e44ad',
                    fontFamily: "'Kalam', cursive",
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>✨ The Magical Realm ✨</h4>
                  
                  <p style={{
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    margin: '5px 0'
                  }}>
                    <span style={{ color: '#8e44ad' }}>Enchanted Location:</span> Guwahati, Assam
                  </p>
                  
                  <p style={{ color: '#2c3e50', fontSize: '1rem', margin: '5px 0' }}>
                    <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>Portal Address:</span>
                    <a href="https://maps.app.goo.gl/hQZGJ8mh1VZRqJob7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#e91e63', 
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          marginLeft: '5px',
                          borderBottom: '2px solid #e91e63'
                        }}>
                        Blue Paradise, Guwahati 🗺️
                    </a>
                  </p>
                  
                  <p style={{
                    color: '#7f8c8d',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    marginTop: '10px',
                    fontFamily: "'Kalam', cursive"
                  }}>
                    "Where our new life takes flight on wings of love..."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chapter 3 - Enhanced */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(233,30,99,0.15) 0%, rgba(255,182,193,0.1) 100%)',
              border: '3px solid #e91e63',
              borderRadius: '20px',
              padding: '25px',
              margin: '20px 0',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(233,30,99,0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px', right: '-10px',
                fontSize: '2rem',
                animation: 'sparkle 2s ease-in-out infinite 1s'
              }}>🌸</div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  fontSize: '4rem',
                  animation: 'petalDance 4s ease-in-out infinite'
                }}>🎭</div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: '#e91e63',
                    fontFamily: "'Kalam', cursive",
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>💫 The Grand Celebration 💫</h4>
                  
                  <p style={{
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    margin: '5px 0'
                  }}>
                    <span style={{ color: '#e91e63' }}>Royal Festivities:</span> Dinner, Dancing & Dreams
                  </p>
                  
                  <p style={{
                    color: '#7f8c8d',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    marginTop: '10px',
                    fontFamily: "'Kalam', cursive"
                  }}>
                    "A celebration as beautiful as Princess Kaguya's celestial court..."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bus Stop of Love */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(135,206,235,0.3) 0%, rgba(152,251,152,0.2) 100%)',
            border: '3px dashed #87CEEB',
            borderRadius: '25px',
            padding: '30px',
            margin: '30px 0',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(135,206,235,0.3)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px', left: '20px',
              fontSize: '3rem',
              animation: 'umbrellaSwing 4s ease-in-out infinite'
            }}>🌂</div>
            
            <div style={{
              position: 'absolute',
              top: '-15px', right: '20px',
              fontSize: '2.5rem',
              animation: 'catbusDrive 8s ease-in-out infinite'
            }}>🚌</div>
            
            <p style={{
              color: '#27ae60',
              fontFamily: "'Kalam', cursive",
              fontSize: '1.4rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
              margin: '15px 0'
            }}>
              "Will you wait with us at the bus stop of eternal love?"
            </p>
            
            <p style={{
              color: '#7f8c8d',
              fontStyle: 'italic',
              fontSize: '1rem',
              marginTop: '10px'
            }}>
              Where every moment becomes a cherished memory...
            </p>
          </div>
          
          {/* RSVP Portal */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(152,251,152,0.1) 50%, rgba(135,206,235,0.1) 100%)',
            border: '4px solid transparent',
            borderRadius: '30px',
            padding: '35px',
            textAlign: 'center',
            margin: '30px 0',
            position: 'relative',
            overflow: 'hidden',
            backgroundClip: 'padding-box'
          }}>
            {/* Magical border */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(45deg, #98FB98, #87CEEB, #DDA0DD, #FFB6C1, #F0E68C, #98FB98)',
              backgroundSize: '400% 400%',
              animation: 'borderFlow 8s ease infinite',
              borderRadius: '30px',
              zIndex: -1
            }}></div>

            {/* Floating soot sprites */}
            <div style={{
              position: 'absolute',
              top: '15px', left: '15%',
              fontSize: '1.5rem',
              animation: 'sootFloat 6s ease-in-out infinite'
            }}>●</div>
            
            <div style={{
              position: 'absolute',
              top: '25px', right: '15%',
              fontSize: '1.2rem',
              animation: 'sootFloat 6s ease-in-out infinite 2s'
            }}>●</div>
            
            <div style={{
              position: 'absolute',
              bottom: '15px', left: '20%',
              fontSize: '1.3rem',
              animation: 'sootFloat 6s ease-in-out infinite 4s'
            }}>●</div>
            
            <div style={{
              position: 'absolute',
              bottom: '25px', right: '20%',
              fontSize: '1.1rem',
              animation: 'sootFloat 6s ease-in-out infinite 1s'
            }}>●</div>

            <h3 style={{
              color: '#27ae60',
              fontFamily: "'Kalam', cursive",
              fontSize: '1.6rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
              margin: '20px 0',
              position: 'relative',
              zIndex: 1
            }}>
              🌟 The Forest Spirits Await Your Response! 🌟
            </h3>
            
            <p style={{
              color: '#7f8c8d',
              fontFamily: "'Kalam', cursive",
              fontSize: '1rem',
              fontStyle: 'italic',
              marginBottom: '25px',
              position: 'relative',
              zIndex: 1
            }}>
              "Every RSVP carries the magic of friendship..."
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              <button 
                className="special-effects-btn" 
                onClick={() => onModalOpen('ghibli')} 
                style={{
                  background: 'linear-gradient(45deg, #98FB98, #87CEEB, #DDA0DD)',
                  color: '#2c3e50',
                  fontFamily: "'Kalam', cursive",
                  fontSize: '1.2rem',
                 fontWeight: 'bold',
                 padding: '18px 35px',
                 border: '3px solid rgba(255,255,255,0.9)',
                 borderRadius: '30px',
                 boxShadow: '0 8px 25px rgba(152,251,152,0.4), inset 0 2px 0 rgba(255,255,255,0.8)',
                 maxWidth: '320px',
                 width: '100%',
                 position: 'relative',
                 overflow: 'hidden',
                 transition: 'all 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.target.style.transform = 'translateY(-3px) scale(1.02)';
                 e.target.style.boxShadow = '0 12px 35px rgba(152,251,152,0.6)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.transform = 'translateY(0) scale(1)';
                 e.target.style.boxShadow = '0 8px 25px rgba(152,251,152,0.4)';
               }}
             >
               🌸 Yes! I'll join your magical story! 🌸
             </button>
             
             <button 
               className="special-effects-btn" 
               onClick={(e) => onSpecialEffect('ghibli', e)} 
               style={{
                 background: 'linear-gradient(45deg, #DDA0DD, #F0E68C, #FFB6C1)',
                 color: '#2c3e50',
                 fontFamily: "'Kalam', cursive",
                 fontSize: '1.2rem',
                 fontWeight: 'bold',
                 padding: '18px 35px',
                 border: '3px solid rgba(255,255,255,0.9)',
                 borderRadius: '30px',
                 boxShadow: '0 8px 25px rgba(221,160,221,0.4), inset 0 2px 0 rgba(255,255,255,0.8)',
                 maxWidth: '320px',
                 width: '100%',
                 transition: 'all 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.target.style.transform = 'translateY(-3px) scale(1.02)';
                 e.target.style.boxShadow = '0 12px 35px rgba(221,160,221,0.6)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.transform = 'translateY(0) scale(1)';
                 e.target.style.boxShadow = '0 8px 25px rgba(221,160,221,0.4)';
               }}
             >
               📱 Send via Howl's Moving Castle 🏰
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default GhibliCard;
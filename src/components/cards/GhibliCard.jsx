const GhibliCard = ({ isActive, petals, onModalOpen, onSpecialEffect }) => {
  return (
    <div className="card-wrapper">
      <div 
        className={`card ghibli-card ${isActive ? 'active' : ''}`} 
        id="ghibli-card"
      >
        {/* Header with Totoro SVG */}
        <div className="ghibli-header" style={{ 
          background: 'linear-gradient(180deg, #87CEEB 0%, #B6D8F2 70%, #F0F8FF 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: '25px',
          textAlign: 'center',
          borderBottom: '4px solid rgba(255, 255, 255, 0.6)'
        }}>
          {/* Floating petals */}
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
          
          {/* Totoro SVG Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <img 
              src="totoro.svg" 
              alt="Totoro silhouette" 
              style={{ 
                width: '140px', 
                height: 'auto', 
                marginBottom: '15px',
                filter: 'invert(26%) sepia(99%) saturate(1313%) hue-rotate(187deg) brightness(93%) contrast(101%)'
              }} 
            />

            {/* Title with Amatic SC font */}
            <div style={{ 
              fontSize: '3.5rem',
              fontFamily: "'Amatic SC', cursive",
              color: '#005A9C',
              fontWeight: '700',
              lineHeight: '1',
              letterSpacing: '2px',
              textShadow: '2px 2px 4px rgba(255,255,255,0.5)'
            }}>
              Rhitam & Rojika 
            </div>
          </div>
          
          {/* Subtitle */}
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#2c3e50', 
            fontFamily: "'Amatic SC', cursive",
            marginTop: '15px',
            position: 'relative',
            zIndex: 1
          }}>
            Invite you to their magical beginning
          </p>
        </div>
        
        <div className="card-content" style={{ padding: '25px' }}>
          {/* Kiki's Delivery Banner with SVGs */}
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
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(45deg, #98FB98, #87CEEB, #DDA0DD, #FFB6C1, #98FB98)',
              backgroundSize: '400% 400%',
              animation: 'borderFlow 6s ease infinite',
              borderRadius: '25px',
              zIndex: -1
            }}></div>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              <img 
                src="/icons/witch_kiki.svg" 
                alt="Witch icon" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  animation: 'magicPulse 2s ease-in-out infinite' 
                }}
              />
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontFamily: "'Amatic SC', cursive", 
                  color: '#8e44ad', 
                  fontWeight: 'bold', 
                  fontSize: '2rem',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                }}>
                  Special Delivery from the Heart
                </div>
                <div style={{ 
                  fontSize: '1.2rem',
                  fontFamily: "'Amatic SC', cursive",
                  color: '#7f8c8d',
                  marginTop: '5px'
                }}>
                  "Every invitation carries a piece of our soul"
                </div>
              </div>
              
              <img 
                src="/icons/cat_jiji.svg" 
                alt="Cat icon" 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  animation: 'magicPulse 2s ease-in-out infinite 0.5s' 
                }}
              />
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
              fontFamily: "'Amatic SC', cursive",
              color: '#27ae60',
              fontSize: '2.5rem',
              marginBottom: '25px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(255,255,255,0.8)'
            }}>
              🌿 Our Ghibli-Inspired Journey 🌿
            </h3>

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
                  
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(45deg, transparent 30%, rgba(152,251,152,0.1) 50%, transparent 70%)',
                    animation: 'photoShimmer 8s ease-in-out infinite'
                  }}></div>
                  
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
          </div>
          
          {/* Magical Timeline with SVGs */}
          <div style={{ margin: '35px 0' }}>
            <h3 style={{
              textAlign: 'center',
              fontFamily: "'Amatic SC', cursive",
              fontSize: '2.5rem',
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
            
            {/* Chapter 1 with SVG */}
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
                  flexShrink: 0,
                  width: '6rem',
                  height: '6rem',
                  animation: 'treeSway 4s ease-in-out infinite'
                }}>
                  <img src="/icons/shrine.svg" alt="Shrine" style={{width: '100%', height: '100%'}} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: '#27ae60',
                    fontFamily: "'Amatic SC', cursive",
                    fontSize: '2rem',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>🌸 The Sacred Ceremony 🌸</h4>
                  
                  <p style={{
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    fontFamily: "'Amatic SC', cursive",
                    margin: '5px 0'
                  }}>
                    <span style={{ color: '#27ae60' }}>When the magic begins:</span> 25th January, 2026 at 7pm
                  </p>
                  
                  <p style={{
                    color: '#7f8c8d',
                    fontSize: '1.5rem',
                    marginTop: '10px',
                    fontFamily: "'Amatic SC', cursive"
                  }}>
                    "Where ancient vows echo through the sacred grove..."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chapter 2 with SVGs */}
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
              }}>
                <img src="/icons/witch_kiki.svg" alt="Witch icon" style={{width: '32px', height: '32px'}} />
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  flexShrink: 0,
                  width: '6rem',
                  height: '6rem',
                  animation: 'broomFly 3s ease-in-out infinite'
                }}>
                  <img src="/icons/castle.svg" alt="Castle" style={{width: '100%', height: '100%'}} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: '#8e44ad',
                    fontFamily: "'Amatic SC', cursive",
                    fontSize: '2rem',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>✨ The Magical Realm ✨</h4>
                  
                  <p style={{
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    fontFamily: "'Amatic SC', cursive",
                    margin: '5px 0'
                  }}>
                    <span style={{ color: '#8e44ad' }}>Enchanted Location:</span> Guwahati, Assam
                  </p>
                  
                  <p style={{ color: '#2c3e50', fontSize: '1.2rem', fontFamily: "'Amatic SC', cursive", margin: '5px 0' }}>
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
                    fontSize: '1.5rem',
                    marginTop: '10px',
                    fontFamily: "'Amatic SC', cursive"
                  }}>
                    "Where our new life takes flight on wings of love..."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chapter 3 with SVG */}
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
                  flexShrink: 0,
                  width: '6rem',
                  height: '6rem',
                  animation: 'petalDance 4s ease-in-out infinite'
                }}>
                  <img src="/icons/celebration.svg" alt="Celebration" style={{width: '100%', height: '100%'}} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: '#e91e63',
                    fontFamily: "'Amatic SC', cursive",
                    fontSize: '2rem',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>💫 The Grand Celebration 💫</h4>
                  
                  <p style={{
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    fontFamily: "'Amatic SC', cursive",
                    margin: '5px 0'
                  }}>
                    <span style={{ color: '#e91e63' }}>Royal Festivities:</span> Dinner, Dancing & Dreams
                  </p>
                  
                  <p style={{
                    color: '#7f8c8d',
                    fontSize: '1.5rem',
                    marginTop: '10px',
                    fontFamily: "'Amatic SC', cursive"
                  }}>
                    "A celebration as beautiful as Princess Kaguya's celestial court..."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bus Stop of Love with SVGs */}
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
            }}>
              <img src="/icons/umbrella.svg" alt="Umbrella" style={{width: '48px', height: '48px'}} />
            </div>
            
            <div style={{
              position: 'absolute',
              top: '-15px', right: '20px',
              fontSize: '2.5rem',
              animation: 'catbusDrive 8s ease-in-out infinite'
            }}>
              <img src="/icons/catbus.svg" alt="Catbus" style={{width: '40px', height: '40px'}} />
            </div>
            
            <p style={{
              color: '#27ae60',
              fontFamily: "'Amatic SC', cursive",
              fontSize: '2rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
              margin: '15px 0'
            }}>
              "Will you wait with us at the bus stop of eternal love?"
            </p>
            
            <p style={{
              color: '#7f8c8d',
              fontSize: '1.5rem',
              fontFamily: "'Amatic SC', cursive",
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
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(45deg, #98FB98, #87CEEB, #DDA0DD, #FFB6C1, #F0E68C, #98FB98)',
              backgroundSize: '400% 400%',
              animation: 'borderFlow 8s ease infinite',
              borderRadius: '30px',
              zIndex: -1
            }}></div>

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

            <            h3 style={{
              color: '#27ae60',
              fontFamily: "'Amatic SC', cursive",
              fontSize: '2.5rem',
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
              fontFamily: "'Amatic SC', cursive",
              fontSize: '1.5rem',
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
                  fontFamily: "'Amatic SC', cursive",
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  padding: '18px 35px',
                  border: '3px solid rgba(255,255,255,0.9)',
                  borderRadius: '30px',
                  boxShadow: '0 8px 25px rgba(152,251,152,0.4), inset 0 2px 0 rgba(255,255,255,0.8)',
                  maxWidth: '320px',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
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
                  fontFamily: "'Amatic SC', cursive",
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  padding: '18px 35px',
                  border: '3px solid rgba(255,255,255,0.9)',
                  borderRadius: '30px',
                  boxShadow: '0 8px 25px rgba(221,160,221,0.4), inset 0 2px 0 rgba(255,255,255,0.8)',
                  maxWidth: '320px',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
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
                <img 
                  src="/icons/witch_kiki.svg" 
                  alt="Witch icon" 
                  style={{ 
                    width: '30px', 
                    height: '30px'
                  }}
                />
                <span>Send via Kiki's Delivery Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sootBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes magicPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes photoShimmer {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes parchmentShimmer {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes leafDance {
          0%, 100% { transform: rotate(-5deg) translateY(0px); }
          50% { transform: rotate(5deg) translateY(-5px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: rotate(0deg) scale(1); }
          25% { opacity: 1; transform: rotate(90deg) scale(1.1); }
          50% { opacity: 0.8; transform: rotate(180deg) scale(1.2); }
          75% { opacity: 1; transform: rotate(270deg) scale(1.1); }
        }
        
        @keyframes treeSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes broomFly {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        
        @keyframes petalDance {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(5deg); }
          66% { transform: translateY(-3px) rotate(-3deg); }
        }
        
        @keyframes umbrellaSwing {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes catbusDrive {
          0% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(-20px); }
        }
        
        @keyframes sootFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
        }
        
        @keyframes gentleSway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        
        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .petal {
          position: absolute;
          animation: petalFall linear infinite;
        }
        
        @keyframes petalFall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GhibliCard;
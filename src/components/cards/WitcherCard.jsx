const WitcherCard = ({ isActive, onModalOpen, onSpecialEffect }) => {
  return (
    <div className="card-wrapper">
      <div 
        className={`card witcher-card ${isActive ? 'active' : ''}`} 
        id="witcher-card"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
          border: '3px solid #8B4513',
          borderRadius: '15px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
          color: '#E8E8E8',
          fontFamily: "'Cinzel', serif"
        }}
      >
        {/* Witcher Header */}
        <div style={{
          background: 'linear-gradient(180deg, #2d1810 0%, #1a1a1a 100%)',
          padding: '30px',
          textAlign: 'center',
          position: 'relative',
          borderBottom: '2px solid #8B4513'
        }}>
          {/* Wolf Medallion */}
          <div style={{
            fontSize: '4rem',
            marginBottom: '15px',
            filter: 'drop-shadow(0 0 20px #D4AF37)',
            animation: 'pulse 3s ease-in-out infinite'
          }}>🐺</div>
          
          {/* Title */}
          <div style={{
            fontSize: '2rem',
            color: '#D4AF37',
            fontFamily: "'Cinzel', serif",
            fontWeight: 'bold',
            textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
            marginBottom: '10px',
            letterSpacing: '2px'
          }}>
            THE CONJUNCTION OF HEARTS
          </div>
          
          {/* Subtitle */}
          <p style={{
            fontSize: '1rem',
            color: '#C0C0C0',
            fontStyle: 'italic',
            textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
            marginBottom: '20px'
          }}>
            "Destiny is a strange thing... and ours has led us here."
          </p>
          
          {/* Witcher Signs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '15px'
          }}>
            <span style={{ fontSize: '1.5rem', filter: 'sepia(1) hue-rotate(30deg) brightness(1.2)' }}>🔥</span>
            <span style={{ fontSize: '1.5rem', filter: 'sepia(1) hue-rotate(200deg) brightness(1.2)' }}>💨</span>
            <span style={{ fontSize: '1.5rem', filter: 'sepia(1) hue-rotate(60deg) brightness(1.2)' }}>⚡</span>
            <span style={{ fontSize: '1.5rem', filter: 'sepia(1) brightness(1.2)' }}>🛡️</span>
            <span style={{ fontSize: '1.5rem', filter: 'sepia(1) hue-rotate(250deg) brightness(1.2)' }}>🌀</span>
          </div>
        </div>

        <div style={{ padding: '25px' }}>
          {/* Gwent Wedding Cards Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 30, 20, 0.9), rgba(40, 50, 30, 0.8))',
            border: '3px solid #8B4513',
            borderRadius: '12px',
            padding: '25px',
            margin: '20px 0',
            boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            {/* Gwent Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '20px',
              position: 'relative'
            }}>
              <h3 style={{
                color: '#D4AF37',
                fontFamily: "'Cinzel', serif",
                fontSize: '1.4rem',
                marginBottom: '10px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                letterSpacing: '1px'
              }}>
                🃏 GWENT: WEDDING EDITION 🃏
              </h3>
              <div style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                margin: '10px auto',
                width: '60%'
              }}></div>
            </div>

            {/* Gwent Board */}
            <div style={{
              background: 'rgba(139, 69, 19, 0.2)',
              borderRadius: '10px',
              padding: '20px',
              border: '2px solid #8B4513'
            }}>
              {/* Cards Row */}
              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                {/* Rhitam Hero Card */}
                <div style={{
                  background: 'linear-gradient(135deg, #2F1B14, #4A3429)',
                  border: '3px solid #D4AF37',
                  borderRadius: '10px',
                  padding: '15px',
                  width: '140px',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.6)',
                  position: 'relative',
                  transform: 'rotate(-2deg)'
                }}>
                  {/* Power Value */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#8B0000',
                    color: '#FFF',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    border: '2px solid #FFD700'
                  }}>∞</div>
                  
                  {/* Card Type Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: '#D4AF37',
                    color: '#000',
                    borderRadius: '4px',
                    padding: '2px 6px',
                    fontSize: '0.6rem',
                    fontWeight: 'bold'
                  }}>HERO</div>
                  
                  <img src ="/photos/rhitam_witcher.png" alt="Rhitam Hero Card" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
                  
                  <div style={{
                    color: '#D4AF37',
                    fontSize: '1rem',
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 'bold',
                    marginBottom: '5px'
                  }}>RHITAM</div>
                  
                  <div style={{
                    color: '#C0C0C0',
                    fontSize: '0.7rem',
                    fontStyle: 'italic',
                    marginBottom: '8px'
                  }}>The Destined Groom</div>
                  
                  <div style={{
                    background: 'rgba(212, 175, 55, 0.2)',
                    borderRadius: '4px',
                    padding: '4px',
                    fontSize: '0.6rem',
                    color: '#FFD700'
                  }}>
                    <strong>Ability:</strong> Eternal Bond
                  </div>
                </div>

                {/* Love Special Card */}
                <div style={{
                  background: 'linear-gradient(135deg, #4A1A1A, #6B2C2C)',
                  border: '3px solid #FF69B4',
                  borderRadius: '10px',
                  padding: '15px',
                  width: '100px',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(255,105,180,0.4)',
                  alignSelf: 'center',
                  animation: 'glow 2s ease-in-out infinite alternate'
                }}>
                  <div style={{ fontSize: '3.5rem', margin: '10px 0' }}>💕</div>
                  <div style={{
                    color: '#FF69B4',
                    fontSize: '0.9rem',
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 'bold'
                  }}>LOVE</div>
                  <div style={{
                    color: '#FFB6C1',
                    fontSize: '0.6rem',
                    fontStyle: 'italic'
                  }}>Special Card</div>
                </div>

                {/* Rojika Hero Card */}
                <div style={{
                  background: 'linear-gradient(135deg, #2F1B14, #4A3429)',
                  border: '3px solid #D4AF37',
                  borderRadius: '10px',
                  padding: '15px',
                  width: '140px',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.6)',
                  position: 'relative',
                  transform: 'rotate(2deg)'
                }}>
                  {/* Power Value */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#8B0000',
                    color: '#FFF',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    border: '2px solid #FFD700'
                  }}>∞</div>
                  
                  {/* Card Type Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: '#D4AF37',
                    color: '#000',
                    borderRadius: '4px',
                    padding: '2px 6px',
                    fontSize: '0.6rem',
                    fontWeight: 'bold'
                  }}>HERO</div>
                  
                  <img src="/photos/rojika_witcher.png" alt="Rojika Hero Card" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
                  
                  <div style={{
                    color: '#D4AF37',
                    fontSize: '1rem',
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 'bold',
                    marginBottom: '5px'
                  }}>ROJIKA</div>
                  
                  <div style={{
                    color: '#C0C0C0',
                    fontSize: '0.7rem',
                    fontStyle: 'italic',
                    marginBottom: '8px'
                  }}>The Destined Bride</div>
                  
                  <div style={{
                    background: 'rgba(212, 175, 55, 0.2)',
                    borderRadius: '4px',
                    padding: '4px',
                    fontSize: '0.6rem',
                    color: '#FFD700'
                  }}>
                    <strong>Ability:</strong> Eternal Bond
                  </div>
                </div>
              </div>

              {/* Combo Effect */}
              <div style={{
                background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.2), rgba(255, 105, 180, 0.2))',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                border: '2px solid #D4AF37',
                boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3)'
              }}>
                <div style={{
                  color: '#D4AF37',
                  fontSize: '1rem',
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 'bold',
                  marginBottom: '8px'
                }}>
                  ⚡ LEGENDARY COMBO ACTIVATED ⚡
                </div>
                <div style={{
                  color: '#E8E8E8',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  lineHeight: '1.4'
                }}>
                  "When Rhitam and Rojika are played together, both gain <strong style={{color: '#FFD700'}}>Resilience</strong> and cannot be removed from the board. Their combined power creates an unbreakable bond that transcends all magic."
                </div>
              </div>
            </div>
          </div>

          {/* Wedding Contract */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(40, 20, 10, 0.9), rgba(60, 30, 15, 0.8))',
            border: '2px solid #8B4513',
            borderRadius: '12px',
            padding: '25px',
            margin: '20px 0',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.4)',
            position: 'relative'
          }}>
            {/* Parchment texture */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(139, 69, 19, 0.1) 2px,
                rgba(139, 69, 19, 0.1) 4px
              )`,
              borderRadius: '12px'
            }}></div>

            <h3 style={{
              color: '#D4AF37',
              fontFamily: "'Cinzel', serif",
              textAlign: 'center',
              marginBottom: '20px',
              fontSize: '1.5rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              position: 'relative',
              zIndex: 1
            }}>
              ⚔️ THE WEDDING CONTRACT ⚔️
            </h3>

            {/* Contract Details */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Ceremony */}
              <div style={{
                margin: '20px 0',
                padding: '15px',
                background: 'rgba(139, 69, 19, 0.3)',
                borderRadius: '8px',
                borderLeft: '4px solid #D4AF37'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>🏰</div>
                  <div>
                    <h4 style={{
                      color: '#D4AF37',
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.2rem',
                      marginBottom: '8px'
                    }}>
                      The Sacred Ceremony
                    </h4>
                    <p style={{ color: '#E8E8E8', fontSize: '0.9rem', margin: '3px 0' }}>
                      <strong>Date of Destiny:</strong> 25th January, 2026
                    </p>
                    <p style={{ color: '#E8E8E8', fontSize: '0.9rem', margin: '3px 0' }}>
                      <strong>Hour of Power:</strong> 7:00 PM
                    </p>
                    <p style={{
                      color: '#B0B0B0',
                      fontStyle: 'italic',
                      fontSize: '0.8rem',
                      marginTop: '8px'
                    }}>
                      "When vows are spoken under ancient blessings"
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              {/* Location */}
<div style={{
  margin: '20px 0',
  padding: '15px',
  background: 'rgba(139, 69, 19, 0.3)',
  borderRadius: '8px',
  borderLeft: '4px solid #D4AF37'
}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>🗡️</div>
    <div style={{ width: '100%' }}>
      <h4 style={{
        color: '#D4AF37',
        fontFamily: "'Cinzel', serif",
        fontSize: '1.2rem',
        marginBottom: '8px'
      }}>
        The Grand Celebration
      </h4>
      <p style={{ color: '#E8E8E8', fontSize: '0.9rem', margin: '3px 0' }}>
        <strong>Location:</strong> Blue Paradise, Guwahati, Assam
      </p>
      
      {/* Add the clickable map link */}
      <div style={{ marginTop: '10px' }}>
        <a 
          href="https://maps.app.goo.gl/hQZGJ8mh1VZRqJob7" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#D4AF37', 
            fontFamily: "'Cinzel', serif", 
            fontSize: '0.9rem',
            textDecoration: 'none',
            padding: '8px 15px',
            background: 'rgba(212, 175, 55, 0.2)',
            border: '2px solid #D4AF37',
            borderRadius: '6px',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(212, 175, 55, 0.4)';
            e.target.style.color = '#FFD700';
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(212, 175, 55, 0.2)';
            e.target.style.color = '#D4AF37';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          🗺️ Open Map purchased from merchant
        </a>
      </div>
      
      <p style={{
        color: '#B0B0B0',
        fontStyle: 'italic',
        fontSize: '0.8rem',
        marginTop: '8px'
      }}>
        "Where songs will be sung of this legendary union"
      </p>
    </div>
  </div>
</div>
            </div>

            {/* Couple Names */}
            <div style={{
              textAlign: 'center',
              margin: '25px 0',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                color: '#D4AF37',
                fontFamily: "'Cinzel', serif",
                fontSize: '2rem',
                margin: '15px 0',
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
              }}>
                ⚔️ Rhitam & Rojika ⚔️
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#C0C0C0',
                fontStyle: 'italic',
                letterSpacing: '2px'
              }}>
                ~ Bound by Destiny ~
              </div>
            </div>
          </div>

          {/* Witcher Schools Blessing */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(40, 0, 0, 0.8), rgba(60, 10, 10, 0.7))',
            border: '2px solid #8B0000',
            borderRadius: '12px',
            padding: '25px',
            margin: '20px 0',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(139,0,0,0.4)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '2.5rem', filter: 'sepia(1) brightness(1.3)' }}>🐺</span>
              <span style={{ fontSize: '2.5rem', filter: 'sepia(1) hue-rotate(100deg) brightness(1.3)' }}>🐱</span>
              <span style={{ fontSize: '2.5rem', filter: 'sepia(1) hue-rotate(30deg) brightness(1.3)' }}>🦅</span>
              <span style={{ fontSize: '2.5rem', filter: 'sepia(1) hue-rotate(200deg) brightness(1.3)' }}>🐻</span>
            </div>
            <h4 style={{
              color: '#D4AF37',
              fontFamily: "'Cinzel', serif",
              margin: '15px 0',
              fontSize: '1.3rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '1px'
            }}>
              BLESSING OF THE WITCHER SCHOOLS
            </h4>
            <p style={{
              color: '#E8E8E8',
              fontStyle: 'italic',
              lineHeight: '1.6',
              fontSize: '1rem',
              fontFamily: "'Cinzel', serif"
            }}>
              "By Wolf, Cat, Griffin, and Bear - may your love be as enduring as a Witcher's oath, and as unbreakable as the strongest armor."
            </p>
          </div>

          {/* Contract Acceptance */}
          <div style={{
            textAlign: 'center',
            margin: '30px 0',
            padding: '20px',
            background: 'rgba(139, 69, 19, 0.1)',
            borderRadius: '12px',
            border: '2px solid #8B4513'
          }}>
            <h3 style={{
              color: '#D4AF37',
              fontFamily: "'Cinzel', serif",
              marginBottom: '20px',
              fontSize: '1.4rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}>
              ⚔️ ACCEPT THE CONTRACT ⚔️
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center'
            }}>
              <button
                onClick={() => onModalOpen('witcher')}
                style={{
                  background: 'linear-gradient(45deg, #8B4513, #D4AF37)',
                  color: '#000',
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  padding: '15px 30px',
                  border: '3px solid #D4AF37',
                  borderRadius: '8px',
                  maxWidth: '300px',
                  width: '100%',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(212,175,55,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                }}
              >
                ⚔️ I ACCEPT THIS CONTRACT ⚔️
              </button>

              <button
                onClick={(e) => onSpecialEffect('witcher', e)}
                style={{
                  background: 'linear-gradient(45deg, #2F2F2F, #5A5A5A)',
                  color: '#D4AF37',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1rem',
                  padding: '15px 30px',
                  border: '3px solid #5A5A5A',
                  borderRadius: '8px',
                  maxWidth: '300px',
                  width: '100%',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(90,90,90,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                }}
              >
                🔮 Send via Megascope 🔮
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px #D4AF37); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 30px #FFD700); }
        }
        
        @keyframes glow {
          from { box-shadow: 0 5px 15px rgba(255,105,180,0.4); }
          to { box-shadow: 0 5px 25px rgba(255,105,180,0.8); }
        }
      `}</style>
    </div>
  );
};

export default WitcherCard;
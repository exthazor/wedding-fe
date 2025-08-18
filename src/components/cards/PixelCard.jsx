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
            fontSize: '0.9rem', 
            color: 'white', 
            marginTop: '15px', 
            fontFamily: "'Press Start 2P', cursive" 
          }}>
            PLAYER 1 + PLAYER 2 = TRUE LOVE
          </p>
        </div>
        
        <div className="card-content">
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.8)', 
            border: '4px solid #ecf0f1', 
            borderRadius: '10px', 
            padding: '20px', 
            margin: '20px 0' 
          }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                margin: '10px 0', 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.7rem' 
              }}>
                <span>HP:</span>
                <div style={{ 
                  width: '100px', 
                  height: '10px', 
                  background: '#333', 
                  border: '2px solid #fff', 
                  margin: '0 10px', 
                  position: 'relative' 
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f)' 
                  }}></div>
                </div>
                <span>♥♥♥♥♥</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                margin: '10px 0', 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.7rem' 
              }}>
                <span>LOVE:</span>
                <span style={{ color: '#f1c40f', marginLeft: '10px' }}>★★★★★</span>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <div style={{ fontSize: '0.8rem', marginBottom: '15px' }}>☁️ ☁️ ☁️</div>
              <div className="couple-names" style={{ 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '1.3rem', 
                margin: '20px 0' 
              }}>
                👾 Rhitam & Rojika 👾
              </div>
              <div style={{ fontSize: '0.8rem', marginTop: '15px' }}>🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫</div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(52, 73, 94, 0.8)', 
            border: '3px solid #ecf0f1', 
            borderRadius: '10px', 
            padding: '20px', 
            margin: '25px 0', 
            textAlign: 'left' 
          }}>
            <h3 style={{ 
              color: '#f39c12', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '1rem', 
              marginBottom: '15px' 
            }}>
              📖 QUEST LOG
            </h3>
            <p style={{ 
              color: 'white', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.8rem', 
              lineHeight: '1.6' 
            }}>
              After countless adventures, grinding EXP, and collecting rare items, 
              our heroes have unlocked the ultimate achievement: ETERNAL LOVE! 
              Now they're hosting the most EPIC celebration in gaming history!
            </p>
          </div>
          
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.6)', 
            border: '2px solid #3498db', 
            borderRadius: '10px', 
            padding: '20px', 
            margin: '20px 0' 
          }}>
            <h3 style={{ 
              color: '#e74c3c', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.9rem', 
              marginBottom: '15px' 
            }}>
              🎮 MISSION PARAMETERS
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '10px', 
              marginTop: '15px' 
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '10px', 
                borderRadius: '5px' 
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.6rem', 
                  marginBottom: '5px' 
                }}>BOOT DATE:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.7rem' 
                }}>[Wedding Date]</span>
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '10px', 
                borderRadius: '5px' 
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.6rem', 
                  marginBottom: '5px' 
                }}>START TIME:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.7rem' 
                }}>[Time]</span>
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '10px', 
                borderRadius: '5px' 
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.6rem', 
                  marginBottom: '5px' 
                }}>MAP LOCATION:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.7rem' 
                }}>[Venue Name]</span>
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                background: 'rgba(255, 255, 255, 0.1)', 
                padding: '10px', 
                borderRadius: '5px' 
              }}>
                <span style={{ 
                  color: '#f39c12', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.6rem', 
                  marginBottom: '5px' 
                }}>COORDINATES:</span>
                <span style={{ 
                  color: '#ecf0f1', 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '0.7rem' 
                }}>[Address]</span>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(231, 76, 60, 0.3)', 
            border: '3px solid #e74c3c', 
            borderRadius: '10px', 
            padding: '25px', 
            margin: '25px 0', 
            textAlign: 'center' 
          }}>
            <h3 style={{ 
              color: '#e74c3c', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.9rem', 
              marginBottom: '15px' 
            }}>
              🕹️ PLAYER INPUT REQUIRED
            </h3>
            <p style={{ 
              color: 'white', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.7rem', 
              marginBottom: '20px' 
            }}>
              WILL YOU JOIN OUR GUILD FOR THIS EPIC RAID?
            </p>
            <button 
              className="special-effects-btn" 
              onClick={() => onModalOpen('pixel')} 
              style={{ 
                background: 'linear-gradient(45deg, #27ae60, #2ecc71)', 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.8rem', 
                margin: '10px' 
              }}
            >
              ▶ PRESS A - JOIN PARTY!
            </button>
            <button 
              className="special-effects-btn" 
              onClick={(e) => onSpecialEffect('pixel', e)} 
              style={{ 
                background: 'linear-gradient(45deg, #3498db, #2980b9)', 
                color: 'white', 
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: '0.8rem', 
                margin: '10px' 
              }}
            >
              📱 PRESS B - SEND MESSAGE
            </button>
          </div>
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.6)', 
            border: '2px solid #95a5a6', 
            borderRadius: '10px', 
            padding: '15px', 
            margin: '20px 0', 
            textAlign: 'center' 
          }}>
            <p style={{ 
              color: '#bdc3c7', 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '0.6rem', 
              lineHeight: '1.5' 
            }}>
              GAME MASTER: [Your Contact]<br />
              LOOT TABLE: [Registry Info]<br />
              DIFFICULTY: EASY & FUN<br />
              SAVE POINT: UNLIMITED MEMORIES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelCard;
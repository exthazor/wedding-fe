import React from 'react';

const CyberpunkCard = ({ isActive, onModalOpen, onSpecialEffect }) => {
  return (
    <div className="card-wrapper">
      <div 
        className={`card cyberpunk-card ${isActive ? 'active' : ''}`} 
        id="cyberpunk-card"
      >
        <div className="cyberpunk-header">
          <div className="cyberpunk-title">
            <span className="glitch-text" data-text="NEURAL LINK ESTABLISHED">
              NEURAL LINK ESTABLISHED
            </span>
          </div>
          <p style={{ 
            fontSize: '1rem', 
            color: '#00ffff', 
            marginTop: '15px', 
            textTransform: 'uppercase' 
          }}>
            Connection Status: LOVE.exe Running
          </p>
        </div>
        
        <div className="card-content">
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.8)', 
            border: '2px solid #00ffff', 
            borderRadius: '10px', 
            margin: '20px 0', 
            fontFamily: "'Orbitron', monospace" 
          }}>
            <div style={{ 
              background: 'rgba(0, 255, 255, 0.2)', 
              padding: '10px', 
              borderBottom: '1px solid #00ffff', 
              fontSize: '0.8rem', 
              color: '#00ffff' 
            }}>
              <span style={{ color: '#ff0080' }}>●</span>
              <span style={{ color: '#ffd700' }}>●</span>
              <span style={{ color: '#00ff00' }}>●</span>
              <span style={{ marginLeft: '10px' }}>WEDDING_PROTOCOL_2025.exe</span>
            </div>
            
            <div style={{ padding: '20px', textAlign: 'left' }}>
              <div style={{ margin: '5px 0', fontSize: '0.9rem', color: '#00ff00' }}>
                <span style={{ color: '#ff0080', marginRight: '5px' }}>
                    import love_module
                </span> 
              </div>
              <div style={{ margin: '5px 0', fontSize: '0.9rem', color: '#00ff00' }}>
                <span style={{ color: '#ff0080', marginRight: '5px' }}>
                    initialize_wedding_sequence()
                </span> 
              </div>
              <div style={{ margin: '5px 0', fontSize: '0.9rem', color: '#888' }}>
                // Scanning for compatible partners...
              </div>
              <div style={{ 
                margin: '5px 0', 
                fontSize: '0.9rem', 
                color: '#00ff00', 
                textShadow: '0 0 5px #00ff00' 
              }}>
                ✓ MATCH FOUND: 100% COMPATIBILITY
              </div>
              <div style={{ margin: '10px 0' }}></div>
              <div className="couple-names" style={{ 
                color: '#00ffff', 
                fontFamily: "'Orbitron', monospace", 
                textTransform: 'uppercase', 
                textAlign: 'center', 
                margin: '20px 0' 
              }}>
                &lt;USER_1&gt; Rhitam
                &lt;USER_2&gt; Rojika
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(255, 0, 128, 0.1)', 
            border: '2px solid #ff0080', 
            borderRadius: '10px', 
            padding: '20px', 
            margin: '20px 0' 
          }}>
            <h3 style={{ 
              color: '#ff0080', 
              fontFamily: "'Orbitron', monospace", 
              marginBottom: '15px' 
            }}>⚡ SYSTEM SPECIFICATIONS</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '15px', 
              marginTop: '15px' 
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '8px', 
                background: 'rgba(0, 0, 0, 0.3)', 
                borderRadius: '5px' 
              }}>
                <span style={{ color: '#ffd700', fontWeight: 'bold' }}>BOOT_DATE:</span>
                <span style={{ color: '#00ffff' }}>[Wedding Date]</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '8px', 
                background: 'rgba(0, 0, 0, 0.3)', 
                borderRadius: '5px' 
              }}>
                <span style={{ color: '#ffd700', fontWeight: 'bold' }}>RUNTIME:</span>
                <span style={{ color: '#00ffff' }}>[Time]</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '8px', 
                background: 'rgba(0, 0, 0, 0.3)', 
                borderRadius: '5px' 
              }}>
                <span style={{ color: '#ffd700', fontWeight: 'bold' }}>SERVER_LOC:</span>
                <span style={{ color: '#00ffff' }}>[Venue Name]</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '8px', 
                background: 'rgba(0, 0, 0, 0.3)', 
                borderRadius: '5px' 
              }}>
                <span style={{ color: '#ffd700', fontWeight: 'bold' }}>GPS_COORDS:</span>
                <span style={{ color: '#00ffff' }}>[Address]</span>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.8)', 
            border: '2px solid #ffd700', 
            borderRadius: '10px', 
            padding: '20px', 
            textAlign: 'center' 
          }}>
            <p style={{ 
              color: '#ffd700', 
              marginBottom: '15px', 
              fontFamily: "'Orbitron', monospace" 
            }}>
              CONFIRM YOUR PARTICIPATION IN THE RESISTANCE:
            </p>
            <button 
              className="special-effects-btn" 
              onClick={() => onModalOpen('cyberpunk')} 
              style={{ 
                background: 'linear-gradient(45deg, #00ff00, #00ffff)', 
                color: 'black', 
                fontFamily: "'Orbitron', monospace", 
                margin: '10px' 
              }}
            >
              ✓ CONFIRM_ATTENDANCE.exe
            </button>
            <button 
              className="special-effects-btn" 
              onClick={(e) => onSpecialEffect('cyberpunk', e)} 
              style={{ 
                background: 'linear-gradient(45deg, #ff0080, #ffd700)', 
                color: 'black', 
                fontFamily: "'Orbitron', monospace", 
                margin: '10px' 
              }}
            >
              📱 INITIATE_COMMS_LINK
            </button>
          </div>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <p style={{ 
              color: '#888', 
              fontStyle: 'italic', 
              fontFamily: "'Orbitron', monospace", 
              fontSize: '0.8rem' 
            }}>
              "In Night City, love is the ultimate upgrade" 💖<br />
              Contact: [Your Contact] | Encrypted Channel Only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberpunkCard;
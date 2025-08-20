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
                <span style={{ color: '#ff0080', marginRight: '5px' }}></span> 
                    <span>import love_module</span>
              </div>
              <div style={{ margin: '5px 0', fontSize: '0.9rem', color: '#00ff00' }}>
                <span style={{ color: '#ff0080', marginRight: '5px' }}></span> 
                <span>initialize_wedding_sequence()</span>
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
                margin: '20px 0',
                fontSize: '1.1rem',
                wordBreak: 'break-word'
            }}>
                &lt;USER_1&gt; Rhitam<br />
                &lt;USER_2&gt; Rojika
              </div>
            </div>
          </div>

          {/* Cyberpunk 2077 Style Wedding Interface */}
<div style={{ 
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)', 
  border: '2px solid #f0d000', 
  borderRadius: '8px', 
  padding: '20px', 
  margin: '20px 0',
  position: 'relative',
  boxShadow: '0 0 30px rgba(240, 208, 0, 0.3)'
}}>
  {/* Arasaka Corp Header */}
  <div style={{ 
    background: 'linear-gradient(45deg, #f0d000, #ff6600)', 
    padding: '8px', 
    borderRadius: '4px',
    fontSize: '0.7rem', 
    color: '#000',
    marginBottom: '15px',
    fontFamily: "'Orbitron', monospace",
    fontWeight: 'bold',
    textAlign: 'center'
  }}>
    ARASAKA WEDDING DIVISION - CORPO PLAZA BRANCH
  </div>

  {/* BD (Braindance) Memory Access */}
  <div style={{
    background: 'rgba(240, 208, 0, 0.1)',
    border: '1px solid #f0d000',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '15px'
  }}>
    <div style={{
      color: '#f0d000',
      fontFamily: "'Orbitron', monospace",
      fontSize: '0.7rem',
      marginBottom: '8px'
    }}>
      [BRAINDANCE ARCHIVE] - ACCESSING MEMORY SHARD...
    </div>
    <div style={{
      color: '#00ff41',
      fontFamily: "'Orbitron', monospace",
      fontSize: '0.6rem'
    }}>
      &gt; JACKING IN TO SHARED NEURAL PATHWAY...<br/>
      &gt; DECRYPTING LOVE.BD FILE...<br/>
      &gt; MEMORY INTEGRITY: 100% - NO ICE DETECTED<br/>
      <span style={{color: '#ff0080'}}>&gt; WARNING: EMOTIONAL CONTENT MAXED</span>
    </div>
  </div>

  {/* Photo with BD Interface */}
  <div style={{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px'
  }}>
    <div style={{
      position: 'relative',
      border: '2px solid #00ff41',
      borderRadius: '4px',
      overflow: 'hidden',
      maxWidth: '300px',
      background: '#000'
    }}>
      {/* BD Scanlines Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(0,255,65,0.1) 3px,
          rgba(0,255,65,0.1) 6px
        )`,
        zIndex: 2,
        pointerEvents: 'none'
      }}></div>

      <img 
        src="/photos/cyberpunk.png"
        alt="BD Memory - Night City Wedding"
        style={{
          width: '100%',
          height: 'auto',
          filter: 'contrast(1.3) saturate(1.4) brightness(0.9)',
          position: 'relative',
          zIndex: 1
        }}
      />
      
      {/* BD Interface Overlay */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        padding: '8px',
        zIndex: 3
      }}>
        <div style={{
          color: '#00ff41',
          fontFamily: "'Orbitron', monospace",
          fontSize: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span>TIMESTAMP: 2024.12.31</span>
          <span>NIGHT CITY</span>
        </div>
      </div>

      {/* Glitch Effect Corner */}
      <div style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        color: '#ff0080',
        fontSize: '0.6rem',
        fontFamily: "'Orbitron', monospace",
        animation: 'glitchFlicker 3s infinite',
        zIndex: 3
      }}>
        [BD_REC]
      </div>
    </div>
  </div>

  {/* Corp Analysis */}
  <div style={{
    background: 'rgba(0,0,0,0.7)',
    border: '1px solid #ff0080',
    borderRadius: '4px',
    padding: '10px',
    fontFamily: "'Orbitron', monospace",
    fontSize: '0.6rem'
  }}>
    <div style={{ color: '#ff0080', marginBottom: '5px' }}>
      [ARASAKA PSYCHOLOGICAL ANALYSIS]
    </div>
    <div style={{ color: '#00ff41' }}>
      &gt; SUBJECT_1: RHITAM.exe - NETRUNNER CLASS<br/>
      &gt; SUBJECT_2: ROJIKA.exe - TECHIE CLASS<br/>
      &gt; RELATIONSHIP_STATUS: NEURAL_LINK_PERMANENT<br/>
      &gt; THREAT_LEVEL: ZERO (LOVE OVERRIDES ALL ICE)<br/>
      <span style={{color: '#f0d000'}}>&gt; CORP_RECOMMENDATION: APPROVE MARRIAGE_CONTRACT.bat</span>
    </div>
  </div>
</div>

{/* Night City Wedding Details */}
<div style={{ 
  background: 'rgba(240, 208, 0, 0.1)', 
  border: '2px solid #f0d000', 
  borderRadius: '8px', 
  padding: '20px', 
  margin: '20px 0' 
}}>
  <h3 style={{ 
    color: '#f0d000', 
    fontFamily: "'Orbitron', monospace", 
    marginBottom: '15px',
    fontSize: '0.9rem'
  }}>⚡ WEDDING_CONTRACT.exe - NIGHT CITY EDITION</h3>
  
  <div style={{
    background: 'rgba(0,0,0,0.6)',
    border: '1px solid #ff0080',
    borderRadius: '4px',
    padding: '12px',
    marginBottom: '15px'
  }}>
    <div style={{
      color: '#ff0080',
      fontFamily: "'Orbitron', monospace",
      fontSize: '0.7rem',
      marginBottom: '8px'
    }}>
      [MILITECH WEDDING LOGISTICS]
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ 
        background: 'rgba(240,208,0,0.1)', 
        padding: '6px', 
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span style={{ 
          color: '#f0d000', 
          fontFamily: "'Orbitron', monospace", 
          fontSize: '0.6rem'
        }}>JACK_IN_DATE:</span>
        <span style={{ 
          color: '#00ff41', 
          fontFamily: "'Orbitron', monospace", 
          fontSize: '0.6rem' 
        }}>25.JAN.2026</span>
      </div>
      
      <div style={{ 
        background: 'rgba(240,208,0,0.1)', 
        padding: '6px', 
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span style={{ 
          color: '#f0d000', 
          fontFamily: "'Orbitron', monospace", 
          fontSize: '0.6rem'
        }}>SYNC_TIME:</span>
        <span style={{ 
          color: '#00ff41', 
          fontFamily: "'Orbitron', monospace", 
          fontSize: '0.6rem' 
        }}>19:00 NCT</span>
      </div>
      
      <div style={{ 
  background: 'rgba(240,208,0,0.1)', 
  padding: '6px', 
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'space-between'
}}>
  <span style={{ 
    color: '#f0d000', 
    fontFamily: "'Orbitron', monospace", 
    fontSize: '0.6rem'
  }}>LOCATION_NODE:</span>
  <a 
    href="https://share.google/Qw9CTMFEj35BTY7yH" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ 
      color: '#00ff41', 
      fontFamily: "'Orbitron', monospace", 
      fontSize: '0.6rem',
      textDecoration: 'none',
      textShadow: '0 0 5px #00ff41',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.target.style.color = '#ff0080';
      e.target.style.textShadow = '0 0 10px #ff0080';
    }}
    onMouseLeave={(e) => {
      e.target.style.color = '#00ff41';
      e.target.style.textShadow = '0 0 5px #00ff41';
    }}
  >
    BLUE_PARADISE.NET 🌐
  </a>
</div>

<div style={{ 
  background: 'rgba(240,208,0,0.1)', 
  padding: '6px', 
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'space-between'
}}>
  <span style={{ 
    color: '#f0d000', 
    fontFamily: "'Orbitron', monospace", 
    fontSize: '0.6rem'
  }}>REGION_CODE:</span>
  <span style={{ 
    color: '#00ff41', 
    fontFamily: "'Orbitron', monospace", 
    fontSize: '0.6rem' 
  }}>GUWAHATI_DISTRICT</span>
</div>

{/* Add GPS Navigation Section */}
<div style={{ 
  background: 'rgba(255,0,128,0.1)', 
  padding: '8px', 
  borderRadius: '3px',
  marginTop: '8px',
  textAlign: 'center',
  border: '1px solid #ff0080'
}}>
  <div style={{
    color: '#ff0080',
    fontFamily: "'Orbitron', monospace",
    fontSize: '0.6rem',
    marginBottom: '4px'
  }}>
    [GPS_NAVIGATION_ACTIVE]
  </div>
  <a 
    href="https://share.google/Qw9CTMFEj35BTY7yH" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      color: '#00ff41',
      fontFamily: "'Orbitron', monospace",
      fontSize: '0.6rem',
      textDecoration: 'none',
      background: 'rgba(0,0,0,0.5)',
      padding: '4px 8px',
      borderRadius: '2px',
      border: '1px solid #00ff41',
      display: 'inline-block',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'rgba(0,255,65,0.2)';
      e.target.style.boxShadow = '0 0 10px #00ff41';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'rgba(0,0,0,0.5)';
      e.target.style.boxShadow = 'none';
    }}
  >
    🎯 JACK INTO MAP_GRID.exe
  </a>
</div>
    </div>
  </div>

  {/* Moon Mission Reference */}
  <div style={{
    background: 'rgba(0,255,65,0.1)',
    border: '1px solid #00ff41',
    borderRadius: '4px',
    padding: '10px',
    textAlign: 'center'
  }}>
    <div style={{
      color: '#00ff41',
      fontFamily: "'Orbitron', monospace",
      fontSize: '0.7rem',
      fontWeight: 'bold'
    }}>
      🌙 SPECIAL CORPO PACKAGE 🌙
    </div>
    <div style={{
      color: '#f0d000',
      fontFamily: "'Orbitron', monospace",
      fontSize: '0.6rem',
      marginTop: '5px'
    }}>
      "HONEYMOON TO THE MOON" - ARASAKA EXCLUSIVE<br/>
      (ORBITAL AIR ACCESS REQUIRED)
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
                fontFamily: "'Orbitron', monospace",
                fontSize: '0.9rem' /* Add smaller font */
            }}>
                CONFIRM PARTICIPATION:
            </p>
            
            {/* Stack buttons vertically on mobile */}
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px',
                alignItems: 'center'
            }}>
                <button 
                className="special-effects-btn" 
                onClick={() => onModalOpen('cyberpunk')} 
                style={{ 
                    background: 'linear-gradient(45deg, #00ff00, #00ffff)', 
                    color: 'black', 
                    fontFamily: "'Orbitron', monospace", 
                    fontSize: '0.8rem', /* Smaller font */
                    padding: '12px 20px', /* Smaller padding */
                    margin: '0', /* Remove margin */
                    width: '100%',
                    maxWidth: '280px' /* Limit width */
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
                    fontSize: '0.8rem', /* Smaller font */
                    padding: '12px 20px', /* Smaller padding */
                    margin: '0', /* Remove margin */
                    width: '100%',
                    maxWidth: '280px' /* Limit width */
                }}
                >
                📱 INITIATE_COMMS_LINK
                </button>
            </div>
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
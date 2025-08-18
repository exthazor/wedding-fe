const WitcherCard = ({ isActive, onModalOpen, onSpecialEffect }) => {
  return (
    <div className="card-wrapper">
      <div 
        className={`card witcher-card ${isActive ? 'active' : ''}`} 
        id="witcher-card"
      >
        <div className="witcher-header">
          <div className="medallion-container">
            <div className="wolf-medallion">🐺</div>
          </div>
          <div className="witcher-title">THE CONJUNCTION OF HEARTS</div>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#E0E0E0', 
            marginTop: '15px', 
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)' 
          }}>
            "Destiny is a strange thing... and ours has led us here."
          </p>
          <div className="witcher-signs" style={{ marginTop: '15px' }}>
            <span className="sign" style={{ margin: '0 10px', fontSize: '1.5rem' }}>🔥</span>
            <span className="sign" style={{ margin: '0 10px', fontSize: '1.5rem' }}>💨</span>
            <span className="sign" style={{ margin: '0 10px', fontSize: '1.5rem' }}>⚡</span>
            <span className="sign" style={{ margin: '0 10px', fontSize: '1.5rem' }}>🛡️</span>
            <span className="sign" style={{ margin: '0 10px', fontSize: '1.5rem' }}>🌀</span>
          </div>
        </div>
        
        <div className="card-content">
          <div style={{ 
            background: 'rgba(139, 0, 0, 0.3)', 
            border: '3px solid #8B0000', 
            borderRadius: '15px', 
            padding: '25px', 
            margin: '20px 0' 
          }}>
            <h3 style={{ 
              color: '#FFD700', 
              fontFamily: "'Cinzel', serif", 
              textAlign: 'center', 
              marginBottom: '20px' 
            }}>
              📜 THE BALLAD OF TWO SOULS 📜
            </h3>
            
            <p style={{ 
              color: '#D3D3D3', 
              fontSize: '1.1rem', 
              lineHeight: '1.7', 
              textAlign: 'center', 
              fontStyle: 'italic' 
            }}>
              In the Northern Kingdoms, where destiny weaves its threads, 
              two souls found each other against all odds. Like Geralt and Yennefer, 
              their bond transcends magic itself. This is their story... their legend... their beginning.
            </p>
            
            <div className="couple-names" style={{ 
              color: '#FFD700', 
              fontFamily: "'Cinzel', serif", 
              textAlign: 'center', 
              fontSize: '2.3rem', 
              margin: '25px 0' 
            }}>
              <span style={{ margin: '0 15px' }}>🐺</span>
              Rhitam & Rojika
              <span style={{ margin: '0 15px' }}>🐺</span>
              <div style={{ 
                fontSize: '1.2rem', 
                color: '#D3D3D3', 
                fontStyle: 'italic', 
                marginTop: '10px' 
              }}>~ Bound by Destiny ~</div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.3)', 
            border: '2px solid #50A6C2', 
            borderRadius: '15px', 
            padding: '25px', 
            margin: '25px 0' 
          }}>
            <h3 style={{ color: '#87CEEB' }}>
              ⚔️ WEDDING CONTRACT ⚔️
            </h3>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              margin: '20px 0', 
              padding: '15px', 
              background: 'rgba(139, 0, 0, 0.2)', 
              borderRadius: '10px', 
              borderLeft: '4px solid #FFD700' 
            }}>
              <div style={{ fontSize: '2.5rem', marginRight: '20px' }}>🏰</div>
              <div>
                <h4 style={{ color: '#FFD700', fontFamily: "'Cinzel', serif" }}>The Sacred Ceremony</h4>
                <p style={{ color: '#D3D3D3' }}><strong>Date of Destiny:</strong> [Wedding Date]</p>
                <p style={{ color: '#D3D3D3' }}><strong>Hour of Power:</strong> [Time]</p>
                <p style={{ color: '#A0A0A0', fontStyle: 'italic', fontSize: '0.9rem' }}>"When vows are spoken under ancient blessings"</p>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              margin: '20px 0', 
              padding: '15px', 
              background: 'rgba(139, 0, 0, 0.2)', 
              borderRadius: '10px', 
              borderLeft: '4px solid #FFD700' 
            }}>
              <div style={{ fontSize: '2.5rem', marginRight: '20px' }}>📚</div>
              <div>
                <h4 style={{ color: '#FFD700', fontFamily: "'Cinzel', serif" }}>The Grand Celebration</h4>
                <p style={{ color: '#D3D3D3' }}><strong>Location:</strong> [Venue Name]</p>
                <p style={{ color: '#D3D3D3' }}><strong>Coordinates:</strong> [Full Address]</p>
                <p style={{ color: '#A0A0A0', fontStyle: 'italic', fontSize: '0.9rem' }}>"Where songs will be sung of this legendary union"</p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.7)', 
            border: '3px solid #8B0000', 
            borderRadius: '15px', 
            padding: '25px', 
            margin: '25px 0', 
            textAlign: 'center' 
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              marginBottom: '20px' 
            }}>
              <span style={{ fontSize: '2.5rem', color: '#FFD700' }}>🐺</span>
              <span style={{ fontSize: '2.5rem', color: '#32CD32' }}>🐱</span>
              <span style={{ fontSize: '2.5rem', color: '#FF4500' }}>🦅</span>
              <span style={{ fontSize: '2.5rem', color: '#8B4513' }}>🐻</span>
            </div>
            <h4 style={{ 
              color: '#8B0000', 
              fontFamily: "'Cinzel', serif", 
              margin: '20px 0 15px' 
            }}>
              BLESSING OF THE WITCHER SCHOOLS
            </h4>
            <p style={{ 
              color: '#D3D3D3', 
              fontStyle: 'italic', 
              lineHeight: '1.6' 
            }}>
              "By Wolf, Cat, Griffin, and Bear - may your love be as enduring as a Witcher's oath, 
              as fierce as their blade, and as protective as their medallion."
            </p>
          </div>
          
          <div style={{ textAlign: 'center', margin: '25px 0' }}>
            <h3 style={{ 
              color: '#8B0000', 
              fontFamily: "'Cinzel', serif", 
              marginBottom: '15px' 
            }}>
              ⚔️ ACCEPT THE CONTRACT ⚔️
            </h3>
            
            <button 
              className="special-effects-btn" 
              onClick={() => onModalOpen('witcher')} 
              style={{ 
                background: 'linear-gradient(45deg, #50A6C2, #E0E0E0)', 
                color: '#16213e', 
                fontFamily: "'Cinzel', serif", 
                fontWeight: 'bold', 
                margin: '10px' 
              }}
            >
              ⚔️ I ACCEPT THIS CONTRACT
            </button>
            <button 
              className="special-effects-btn" 
              onClick={(e) => onSpecialEffect('witcher', e)} 
              style={{ 
                background: 'linear-gradient(45deg, #4A4A4A, #696969)', 
                color: 'white', 
                fontFamily: "'Cinzel', serif", 
                margin: '10px' 
              }}
            >
              📱 Send via Megascope
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WitcherCard;
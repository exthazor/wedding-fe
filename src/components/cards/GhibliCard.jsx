const GhibliCard = ({ isActive, petals, onModalOpen, onSpecialEffect }) => {
  return (
    <div className="card-wrapper">
      <div 
        className={`card ghibli-card ${isActive ? 'active' : ''}`} 
        id="ghibli-card"
      >
        <div className="ghibli-header">
          <div className="floating-petals">
            {petals.map(petal => (
              <div
                key={petal.id}
                className="petal"
                style={{
                  left: `${petal.left}%`,
                  animationDuration: `${petal.duration}s`,
                  animationDelay: `${petal.delay}s`
                }}
              >
                {petal.emoji}
              </div>
            ))}
          </div>
          <div className="totoro-scene">
            <div className="totoro-umbrella">☂️</div>
            <div className="catbus">🚌</div>
          </div>
          <div className="ghibli-title">A Magical Beginning</div>
          <p style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '15px', fontStyle: 'italic' }}>
            "Like scenes from the most beautiful dreams..."
          </p>
        </div>
        
        <div className="card-content">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: '20px 0', 
            padding: '15px', 
            background: 'rgba(138, 43, 226, 0.2)', 
            borderRadius: '15px', 
            border: '2px solid #DDA0DD' 
          }}>
            <span style={{ fontSize: '2rem', marginRight: '15px' }}>🧙‍♀️</span>
            <span style={{ 
              fontFamily: "'Kalam', cursive", 
              color: '#8e44ad', 
              fontWeight: 'bold', 
              fontSize: '1.1rem' 
            }}>
              Special Delivery from the Heart
            </span>
            <span style={{ fontSize: '1.5rem', marginLeft: '15px' }}>🐱</span>
          </div>
          
          <div className="couple-names" style={{ 
            color: '#2c3e50', 
            fontFamily: "'Kalam', cursive", 
            position: 'relative', 
            fontSize: '2.2rem' 
          }}>
            🌸 Rhitam & Rojika 🌸
            <div style={{ 
              height: '3px', 
              background: 'linear-gradient(90deg, #98FB98, #87CEEB, #98FB98)', 
              margin: '10px auto', 
              width: '80%', 
              borderRadius: '2px' 
            }}></div>
          </div>
          
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.4)', 
            border: '3px solid rgba(152, 251, 152, 0.6)', 
            borderRadius: '20px', 
            padding: '25px', 
            margin: '25px 0', 
            position: 'relative', 
            backdropFilter: 'blur(5px)' 
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '-15px', 
              right: '20px', 
              fontSize: '2.5rem' 
            }}>🌙</div>
            <p style={{ 
              color: '#34495e', 
              fontSize: '1.15rem', 
              lineHeight: '1.7', 
              margin: '25px 0', 
              textAlign: 'center' 
            }}>
              Like <strong>Totoro watching over the forest</strong>, <strong>Kiki finding her purpose</strong>, 
              <strong>Princess Kaguya's celestial love</strong>, and <strong>Porco's adventures in the sky</strong>... 
              some stories are destined to become timeless. Our love story is one of them. 
              Join us as we begin our greatest adventure together! 🌟
            </p>
            <div style={{ 
              position: 'absolute', 
              bottom: '-15px', 
              left: '30px', 
              fontSize: '2rem' 
            }}>✈️</div>
          </div>
          
          <div style={{ margin: '30px 0' }}>
            <h3 style={{ 
              color: '#27ae60', 
              fontFamily: "'Kalam', cursive", 
              textAlign: 'center', 
              marginBottom: '25px', 
              fontSize: '1.4rem' 
            }}>
              🌿 Our Magical Day - Chapter by Chapter 🌿
            </h3>
            
            <div className="timeline-chapter" style={{ 
              background: 'rgba(152, 251, 152, 0.3)', 
              borderLeftColor: '#27ae60' 
            }}>
              <div className="chapter-icon">🌳</div>
              <div>
                <h4 style={{ color: '#27ae60', fontFamily: "'Kalam', cursive" }}>Chapter 1: The Ceremony</h4>
                <p style={{ color: '#2c3e50' }}><strong>When:</strong> [Wedding Date] at [Time]</p>
                <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>"Where our hearts first say 'I do' under Totoro's blessing"</p>
              </div>
            </div>
            
            <div className="timeline-chapter" style={{ 
              background: 'rgba(138, 43, 226, 0.2)', 
              borderLeftColor: '#8e44ad' 
            }}>
              <div className="chapter-icon">🧙‍♀️</div>
              <div>
                <h4 style={{ color: '#8e44ad', fontFamily: "'Kalam', cursive" }}>Chapter 2: The Journey Begins</h4>
                <p style={{ color: '#2c3e50' }}><strong>Where:</strong> [Venue Name]</p>
                <p style={{ color: '#2c3e50' }}><strong>Location:</strong> [Full Address]</p>
                <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>"Like Kiki's first delivery, our new life takes flight"</p>
              </div>
            </div>
            
            <div className="timeline-chapter" style={{ 
              background: 'rgba(255, 182, 193, 0.3)', 
              borderLeftColor: '#e91e63' 
            }}>
              <div className="chapter-icon">🌸</div>
              <div>
                <h4 style={{ color: '#e91e63', fontFamily: "'Kalam', cursive" }}>Chapter 3: The Celebration</h4>
                <p style={{ color: '#2c3e50' }}><strong>What:</strong> Dinner, Dancing & Dreams</p>
                <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>"As beautiful as Kaguya's celestial court"</p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(135, 206, 235, 0.3)', 
            border: '3px dashed #87CEEB', 
            borderRadius: '15px', 
            padding: '25px', 
            margin: '25px 0', 
            textAlign: 'center' 
          }}>
            <p style={{ 
              color: '#27ae60', 
              textAlign: 'center', 
              margin: '15px 0', 
              fontFamily: "'Kalam', cursive" 
            }}>
              "Will you wait with us at the bus stop of love?"
            </p>
          </div>
          
          <div style={{ 
            background: 'rgba(138, 43, 226, 0.1)', 
            border: '2px solid #DDA0DD', 
            borderRadius: '15px', 
            padding: '25px', 
            textAlign: 'center', 
            marginTop: '25px' 
          }}>
            <h3 style={{ 
              color: '#27ae60', 
              fontFamily: "'Kalam', cursive", 
              margin: '20px 0', 
              textAlign: 'center' 
            }}>
              The Soot Sprites Are Collecting Responses! 🌟
            </h3>
            
            <button 
              className="special-effects-btn" 
              onClick={() => onModalOpen('ghibli')} 
              style={{ 
                background: 'linear-gradient(45deg, #98FB98, #87CEEB)', 
                color: '#2c3e50', 
                fontFamily: "'Kalam', cursive", 
                margin: '10px' 
              }}
            >
              🌸 Yes! I'll join your story!
            </button>
            <button 
              className="special-effects-btn" 
              onClick={(e) => onSpecialEffect('ghibli', e)} 
              style={{ 
                background: 'linear-gradient(45deg, #DDA0DD, #F0E68C)', 
                color: '#2c3e50', 
                fontFamily: "'Kalam', cursive", 
                margin: '10px' 
              }}
            >
              📱 Send via Howl's Moving Castle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GhibliCard;
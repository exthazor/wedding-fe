const ParticleSystem = ({ particles }) => {
  return (
    <>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: 'fixed',
            left: `${particle.left}px`,
            top: `${particle.top}px`,
            fontSize: `${particle.size}px`,
            pointerEvents: 'none',
            zIndex: 9999,
            color: particle.theme === 'cyberpunk' ? (Math.random() > 0.5 ? '#00ffff' : '#ff0080') :
                   particle.theme === 'witcher' ? (Math.random() > 0.5 ? '#FFD700' : '#8B0000') :
                   particle.theme === 'ghibli' ? 'white' : 'inherit',
            textShadow: particle.theme === 'cyberpunk' ? '0 0 10px currentColor' :
                       particle.theme === 'witcher' ? '0 0 15px currentColor' :
                       particle.theme === 'ghibli' ? '0 0 10px white' :
                       particle.theme === 'pixel' ? '2px 2px 0px #000' : 'none',
            imageRendering: particle.theme === 'pixel' ? 'pixelated' : 'auto',
            animation: `particleMove-${particle.id} ${particle.duration}ms ease-out forwards`
          }}
        >
          {particle.emoji}
          <style>
            {`
              @keyframes particleMove-${particle.id} {
                0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
                100% { 
                  transform: translate(${Math.cos(particle.angle * Math.PI / 180) * particle.distance}px, 
                                     ${Math.sin(particle.angle * Math.PI / 180) * particle.distance}px) 
                             rotate(360deg) scale(0); 
                  opacity: 0; 
                }
              }
            `}
          </style>
        </div>
      ))}
    </>
  );
};

export default ParticleSystem;
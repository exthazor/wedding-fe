const ModalSystem = ({ 
  openModal, 
  onClose, 
  formData, 
  onInputChange, 
  onSubmit, 
  isSubmitted,
  isSubmitting,
  submitError,
  getSuccessMessage 
}) => {
  if (!openModal) return null;

  const getModalLabels = (theme) => {
    const labels = {
      ghibli: {
        title: 'Join Our Magical Story 🍃',
        firstName: 'First Name:',
        lastName: 'Last Name:',
        phone: 'Magic Phone (Number):',
        email: 'Magic Email Address:',
        submit: 'Send with the Wind 🌸'
      },
      witcher: {
        title: 'Sign the Guest Scroll 📜',
        firstName: 'Given Name:',
        lastName: 'Surname:',
        phone: 'Contact via Raven (Phone):',
        email: 'Digital Correspondence (Email):',
        submit: 'Seal the Contract 🐺'
      },
      cyberpunk: {
        title: '//: Authenticate Identity',
        firstName: '> First_Name:',
        lastName: '> Last_Name:',
        phone: '> Comms_Link (Phone):',
        email: '> Net_Address (Email):',
        submit: 'EXECUTE_RSVP.bat'
      },
      pixel: {
        title: 'PLAYER REGISTRATION',
        firstName: 'FIRST NAME:',
        lastName: 'LAST NAME:',
        phone: 'PHONE NO:',
        email: 'EMAIL ADDRESS:',
        submit: 'SAVE & CONTINUE'
      }
    };
    return labels[theme];
  };

  const labels = getModalLabels(openModal);

  return (
    <div className="modal-overlay" style={{ display: 'flex' }} onClick={onClose}>
      <div 
        className="modal-content"
        id={`${openModal}-modal`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        {!isSubmitted ? (
          <form className="themed-form" onSubmit={onSubmit}>
            <h3>{labels.title}</h3>
            
            {submitError && (
              <div style={{ 
                color: 'red', 
                marginBottom: '15px', 
                padding: '10px', 
                background: 'rgba(255,0,0,0.1)', 
                borderRadius: '5px',
                fontSize: '0.9rem'
              }}>
                ⚠️ {submitError}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor={`${openModal}-fname`}>
                {labels.firstName}
              </label>
              <input 
                type="text" 
                id={`${openModal}-fname`} 
                value={formData.firstName}
                onChange={(e) => onInputChange('firstName', e.target.value)}
                disabled={isSubmitting}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor={`${openModal}-lname`}>
                {labels.lastName}
              </label>
              <input 
                type="text" 
                id={`${openModal}-lname`} 
                value={formData.lastName}
                onChange={(e) => onInputChange('lastName', e.target.value)}
                disabled={isSubmitting}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor={`${openModal}-email`}>
                {labels.email}
              </label>
              <input 
                type="email" 
                id={`${openModal}-email`} 
                value={formData.email}
                onChange={(e) => onInputChange('email', e.target.value)}
                disabled={isSubmitting}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor={`${openModal}-phone`}>
                {labels.phone}
              </label>
              <input 
                type="tel" 
                id={`${openModal}-phone`} 
                value={formData.phone}
                onChange={(e) => onInputChange('phone', e.target.value)}
                disabled={isSubmitting}
                required 
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  {openModal === 'ghibli' && '🌸 Sending...'}
                  {openModal === 'witcher' && '🐺 Sealing...'}
                  {openModal === 'cyberpunk' && '⚡ PROCESSING...'}
                  {openModal === 'pixel' && '⏳ SAVING...'}
                </>
              ) : (
                labels.submit
              )}
            </button>
          </form>
        ) : (
          <div className="success-message">
            {getSuccessMessage(openModal, formData.firstName)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalSystem;
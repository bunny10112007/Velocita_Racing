import React, { useState, useEffect } from 'react';
import "./styles.css";
const Popup = ({ imageUrl }) => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <>
        {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={imageUrl} alt="Popup Image" />
          </div>
        </div>
        )}
      </>
    );
  };

  export default Popup;
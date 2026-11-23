import React from 'react';
import './DialogBox.css';

const DialogBox = ({ title, children, open = true }) => {
  if (!open) return null;
  return (
    <div className="dialog-box">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default DialogBox;

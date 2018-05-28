import React from 'react';
import NavBar from '../NavBar';
import './index.css';

function Frame({ children }) {
  return (
    <div>
      <NavBar />
      <div className="Frame__content">
        {children}
      </div>
    </div>
  );
}

export default Frame;

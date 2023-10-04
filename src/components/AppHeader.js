
import React from 'react';
import freeCodeCamp from '../img/freeCodeCampLogo.png'

function AppHeader() {
  return (
    <div className="App">
      <div className='fcc-logo-container'>
        <img
          src={freeCodeCamp}
          className='fcc-logo'
          alt='Logo freeCodeCamp'
        />
      </div>
    </div>
  );
}

export default AppHeader;

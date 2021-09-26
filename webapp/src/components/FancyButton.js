import React from 'react';
import './FancyButton.css';

function FancyButton({ customClass, icon }) {

  return (
    <button type="button" className={"fancy-btn btn btn-primary rounded-circle mx-3 bg-dark " + customClass }>
      <img src={'/icons/' + icon + '.svg'} />
    </button>
  );
}

export default FancyButton;

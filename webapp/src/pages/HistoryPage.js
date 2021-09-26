import React from 'react';
import Arc from '../artworks/arc.webp';
import './HistoryPage.css';

const HistoryPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <img src={Arc} className='rounded mx-auto img-grid' alt='...'></img>
        </div>
        <div className='col-sm-6'>
          <img src={Arc} className='rounded mx-auto img-grid' alt='...'></img>
        </div>
      </div>
      <div className='row'>
        <div className='col'>1 of 3</div>
        <div className='col'>2 of 3</div>
      </div>
    </div>
  );
};

export default HistoryPage;

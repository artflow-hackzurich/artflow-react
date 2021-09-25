import React from 'react';

const OnboardingTwo = ({ formData, update }) => {
  return (
    <div className='m-3'>
      <label for='firstName' className='form-label'>
        What is your first name great artist?
      </label>
      <input
        type='text'
        className='form-control'
        id='firstName'
        placeholder='Please enter your first name'
      />
    </div>
  );
};

export default OnboardingTwo;

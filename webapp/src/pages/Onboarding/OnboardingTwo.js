import React from 'react';

const OnboardingTwo = ({ formData, update }) => {
  return (
    <div className='m-3'>
      <label for='email' className='form-label'>
        What is your email great artist?
      </label>
      <input
        type='email'
        className='form-control'
        id='email'
        placeholder='Please enter your first name'
        value={formData}
        onSubmit={update}
      />
    </div>
  );
};

export default OnboardingTwo;

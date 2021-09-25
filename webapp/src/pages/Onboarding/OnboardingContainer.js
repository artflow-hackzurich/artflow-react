import React, { useState } from 'react';
import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import './style.css';

const OnboardingContainer = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    user: {
      firstName: '',
      email: '',
      selectedCategories: [], // Array of strings
      docUrl: '',
    },
  });

  const goNextPage = () => {
    if (page === 4) return;
    setPage((page) => page + 1);
  };

  const updateData = (type, newFormData) => {
    setFormData((formData) => {
      return { formData, [type]: newFormData };
    });
  };

  const submitFormData = () => {
    console.log('submitting form');
  };

  return (
    <div className='center flex-center mb-3'>
      <div>
        <div className='d-flex justify-content-center'>
          <progress max='3' value={page} />
        </div>

        {/* <div class='progress'>
          <div
            class='progress-bar'
            role='progressbar'
            aria-valuenow={page}
            aria-valuemin='0'
            aria-valuemax='3'
          ></div>
        </div> */}

        {page === 1 && (
          <OnboardingOne formData={formData.firstName} update={updateData} />
        )}
        {page === 2 && (
          <OnboardingTwo formData={formData.email} update={updateData} />
        )}
        {page === 3 && (
          <OnboardingThree formData={formData.docUrl} update={updateData} />
        )}
      </div>
      {page !== 3 && (
        <button className='btn btn-primary' onClick={goNextPage}>
          CONTINUE
        </button>
      )}
      {page === 3 && (
        <button
          className='btn btn-primary'
          type='submit'
          onClick={submitFormData}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default OnboardingContainer;

const OnboardingThree = (params) => {
  return <div>Page 3</div>;
};

const OnboardingFour = (params) => {
  return <div>Page 4</div>;
};

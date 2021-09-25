import React, { useState } from 'react';

const OnboardingContainer = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    user: {},
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
    <div>
      <div>
        <progress max='4' value={page} />
        {page === 1 && (
          <OnboardingOne formData={formData.firstName} update={updateData} />
        )}
        {page === 2 && (
          <OnboardingTwo formData={formData.email} update={updateData} />
        )}
        {page === 3 && (
          <OnboardingThree formData={formData.docUrl} update={updateData} />
        )}
        {page === 4 && <OnboardingFour update={updateData} />}
      </div>
      {page !== 4 && <button onClick={goNextPage}>Go Next</button>}
      {page === 4 && (
        <button type='submit' onClick={submitFormData}>
          Submit
        </button>
      )}
    </div>
  );
};

export default OnboardingContainer;

const OnboardingOne = (params) => {
  const newData = {};

  return <div>Page 1</div>;
};

const OnboardingTwo = (params) => {
  return <div>Page 2</div>;
};

const OnboardingThree = (params) => {
  return <div>Page 3</div>;
};

const OnboardingFour = (params) => {
  return <div>Page 4</div>;
};

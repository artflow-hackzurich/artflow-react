import React from 'react';
import { StyledLoginPage } from './style';

const Login = () => {
  return (
    <StyledLoginPage
      class='btn-group'
      role='group'
      aria-label='Basic radio toggle button group'
    >
      <input
        type='radio'
        class='btn-check'
        name='btnradio'
        id='btnradio1'
        autocomplete='off'
        checked
      />
      <label class='btn btn-outline-primary' for='btnradio1'>
        Radio 1
      </label>

      <input
        type='radio'
        class='btn-check'
        name='btnradio'
        id='btnradio2'
        autocomplete='off'
      />
      <label class='btn btn-outline-primary' for='btnradio2'>
        Radio 2
      </label>
    </StyledLoginPage>
  );
};

export default Login;

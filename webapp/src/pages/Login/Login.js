import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='flex-center m-4'>
        <div className='mb-3'>Logo</div>
        <div>ArtSee</div>
      </div>
      <div
        className='btn-group'
        role='group'
        aria-label='Basic radio toggle button group'
      >
        <input
          type='radio'
          className='btn-check'
          name='btnradio'
          id='btnradio1'
          autocomplete='off'
          checked
        />
        <label className='btn btn-outline-primary' for='btnradio1'>
          Artist
        </label>

        <input
          type='radio'
          className='btn-check'
          name='btnradio'
          id='btnradio2'
          autocomplete='off'
        />
        <label className='btn btn-outline-primary' for='btnradio2'>
          Buyer
        </label>
      </div>

      <form className='m-3'>
        <div className='form-group mb-3'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
        </div>
        <div className='form-group mb-3'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
          />
        </div>
        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
      <div className='d-flex'>
        <p className='me-2'>New user?</p>
        <a href='#' className='link-primary'>
          Sign up!
        </a>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/authActions';
import { Alert } from 'react-bootstrap';

import Peach from '../../img/hian-oliveira-n_L_ppO4QtY-unsplash@3x.png';

const Signin = ({ signinUser, errors, isAuthenticated }) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [showMessage, setShowMessage] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  });

  // if (Object.keys(errors).length > 0) {
  //   setShowMessage(true);
  // } else {
  //   setShowMessage(false);
  // }
  const { email, password } = input;
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    signinUser(userData);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className='signIn'>
      <div className='container'>
        <div className='text-center mt-5'>
          <img src={Peach} alt='Peach' className='peach mb-3' />
          <h2 className='mb-3'>Hey! I’m Peach.</h2>
        </div>
        <h1 className='text-center'>Enter your login details</h1>
        {Object.keys(errors).length > 0 ? (
          <div className='text-center'>
            <Alert
              show={showMessage}
              variant='danger'
              transition={false}
              dismissible
              onClose={() => setShowMessage(false)}
            >
              {errors.message}
            </Alert>
          </div>
        ) : null}
        <div className='row mt-md-5  '>
          <div className='col-md-10 col-lg-8 m-auto '>
            <form onSubmit={onSubmit} className='text-center'>
              <div className='form-group row authInput'>
                <div className='col-md-6 col-sm-6 '>
                  <input
                    type='email'
                    className='form-control '
                    name='email'
                    value={email}
                    onChange={onChange}
                    placeholder='Email'
                  />
                </div>
                <div className='col-md-6 col-sm-6 '>
                  <label htmlFor='password' className='fakeLabel'></label>
                  <input
                    type='password'
                    className='form-control '
                    name='password'
                    value={password}
                    onChange={onChange}
                    placeholder='Password'
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <input
                  type='submit'
                  value='Login'
                  className='authBtn btn btn-lg mt-5'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { signinUser })(Signin);

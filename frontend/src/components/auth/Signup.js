import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import Peach from '../../img/hian-oliveira-n_L_ppO4QtY-unsplash@3x.png';

const Signup = ({ registerUser, errors, isAuthenticated }) => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();
  const { name, email, password, confirmPassword } = input;
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  });
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };
    registerUser(newUser, history);
  };
  return (
    <div className='signUp'>
      <div className='container  mt-5'>
        <div className='text-center mt-5'>
          <img src={Peach} alt='Peach' className='peach' />
          <h2>Hey! I’m Peach.</h2>
        </div>
        <h1 className='text-center'>Please, input your details here</h1>
        <div className='row mt-md-5 '>
          <div className='col-md-10 col-lg-8 m-auto'>
            <form onSubmit={onSubmit} className='text-center'>
              <div className='form-group row authInput'>
                <div className=' col-md-6 col-sm-6'>
                  <input
                    type='text'
                    className='form-control '
                    name='name'
                    onChange={onChange}
                    value={name}
                    placeholder='Full Name'
                  />
                </div>
                <div className='col-md-6 col-sm-6 '>
                  <label htmlFor='password' className='fakeLabel' />
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    onChange={onChange}
                    value={email}
                    placeholder='Email'
                  />
                </div>
              </div>
              <div className='form-group row authInput'>
                <div className='col-md-6 col-sm-6'>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    onChange={onChange}
                    value={password}
                    placeholder='Password'
                  />
                </div>
                <div className='col-md-6 col-sm-6'>
                  <label htmlFor='password' className='fakeLabel' />
                  <input
                    type='password'
                    className='form-control'
                    name='confirmPassword'
                    onChange={onChange}
                    value={confirmPassword}
                    placeholder='Confirm Password'
                  />
                </div>
              </div>

              <div className='col-md-12'>
                <input
                  type='submit'
                  value='Sign Up'
                  className='btn btn-lg authBtn '
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(Signup);

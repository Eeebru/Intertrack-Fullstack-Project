import React, { useState, useEffect } from 'react';
import { updatedUser, getCurrentUser } from '../../../actions/userActions';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const EditDashboard = ({
  updatedUser,
  user,

  getCurrentUser,
}) => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    address: '',
    dob: '',
    job: '',
    gender: '',
    residential_status: '',
    dependants: '',
  });

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  const { userObj } = user;

  const history = useHistory();

  const {
    name,
    email,
    address,
    dob,
    job,
    gender,
    residential_status,
    dependants,
  } = input;
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      id: userObj.id,
      name,
      email,
      address,
      dob,
      job,
      gender,
      residential_status,
      dependants,
    };
    updatedUser(updatedData, history);
  };
  return (
    <div className='container editDashboard mt-5'>
      <div className='row'>
        <div className='col-md-10 mx-auto'>
          <form onSubmit={onSubmit}>
            <div className='form-group row inputTwo'>
              <div className='col-sm-6'>
                <label htmlFor='name'>Full Name</label>
                <input
                  type='text'
                  className='form-control '
                  name='name'
                  onChange={onChange}
                  value={name}
                  placeholder='Full Name'
                />
              </div>
              <div className='col-sm-6 '>
                <label htmlFor='email'>Email</label>
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
            <div className='form-group row inputTwo'>
              <div className='col-sm-6'>
                <label htmlFor='address'>Home Address</label>
                <input
                  type='text'
                  className='form-control'
                  name='address'
                  onChange={onChange}
                  value={address}
                  placeholder='Home Address'
                />
              </div>
              <div className='col-sm-6'>
                <label htmlFor='dob '>Date of Birth</label>
                <input
                  type='date'
                  className='form-control'
                  name='dob'
                  onChange={onChange}
                  value={dob}
                />
              </div>
            </div>
            <div className='form-group row inputTwo'>
              <div className='col-sm-6'>
                <label htmlFor='job'>Occupation</label>
                <input
                  type='text'
                  className='form-control'
                  name='job'
                  onChange={onChange}
                  value={job}
                  placeholder='Occupation'
                />
              </div>
              <div className='col-sm-6'>
                <label htmlFor='gender'>Gender</label>
                <input
                  type='text'
                  className='form-control'
                  name='gender'
                  onChange={onChange}
                  value={gender}
                  placeholder='Male/Female'
                />
              </div>
            </div>
            <div className='form-group row inputTwo'>
              <div className='col-sm-6'>
                <label htmlFor='residential_status'>Residential Status</label>
                <input
                  type='text'
                  className='form-control'
                  name='residential_status'
                  onChange={onChange}
                  value={residential_status}
                  placeholder='Renting or Owns a house'
                />
              </div>
              <div className='col-sm-6'>
                <label htmlFor='dependants'>Dependants</label>
                <input
                  type='text'
                  className='form-control'
                  name='dependants'
                  onChange={onChange}
                  value={dependants}
                  placeholder='Number of dependants'
                />
              </div>
            </div>

            <input
              type='submit'
              value='Submit'
              className='btn btn-lg mt-4  d-md editProfileBtn'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.User,
});

export default connect(mapStateToProps, {
  updatedUser,
  getCurrentUser,
})(EditDashboard);

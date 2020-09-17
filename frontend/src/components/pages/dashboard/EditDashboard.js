import React, { useState, useEffect } from 'react';
import { updatedUser, getCurrentUser } from '../../../actions/userActions';
import SelectListGroup from '../../common/SelectListGroup';
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

  const genderOptions = [
    { label: '* Select Gender', value: 0 },
    { label: 'Female', value: 'Female' },
    { label: 'Male', value: 'Male' },
  ];
  const resOptions = [
    { label: '* Select Residential Status', value: 0 },
    { label: 'Renting', value: 'Renting' },
    { label: 'Own', value: 'Own' },
  ];
  const depOptions = [
    { label: '* Select Number of Dependant', value: 0 },
    { label: 'None', value: 'None' },
    { label: 'One', value: 'One' },
    { label: 'Two', value: 'Two' },
    { label: 'Three', value: 'Three' },
  ];

  return (
    <div className='container editDashboard mt-5'>
      <h1 className='text-center mb-5'>Edit Your Profile</h1>
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
                <label htmlFor='email' className='fakeLabelA'>
                  Email
                </label>
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
                <label htmlFor='dob ' className='fakeLabelA'>
                  Date of Birth
                </label>
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
                <label htmlFor='gender' className='fakeLabelA'>
                  Gender
                </label>
                {/* <input
                  type='text'
                  className='form-control'
                  name='gender'
                  onChange={onChange}
                  value={gender}
                  placeholder='Male/Female'
                /> */}
                <SelectListGroup
                  name='gender'
                  value={gender}
                  onChange={onChange}
                  options={genderOptions}
                />
              </div>
            </div>
            <div className='form-group row inputTwo'>
              <div className='col-sm-6'>
                <label htmlFor='residential_status'>Residential Status</label>
                {/* <input
                  type='text'
                  className='form-control'
                  name='residential_status'
                  onChange={onChange}
                  value={residential_status}
                  placeholder='Renting or Owns a house'
                /> */}
                <SelectListGroup
                  name='residential_status'
                  value={residential_status}
                  onChange={onChange}
                  options={resOptions}
                />
              </div>
              <div className='col-sm-6'>
                <label htmlFor='dependants ' className='fakeLabelA'>
                  Dependants
                </label>
                {/* <input
                  type='text'
                  className='form-control'
                  name='dependants'
                  onChange={onChange}
                  value={dependants}
                  placeholder='Number of dependants'
                /> */}
                <SelectListGroup
                  name='dependants'
                  value={dependants}
                  onChange={onChange}
                  options={depOptions}
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

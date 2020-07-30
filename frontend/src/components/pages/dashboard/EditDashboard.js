import React from 'react';

const EditDashboard = () => {
  return (
    <div className='container editDashboard mt-5'>
      <div className='row'>
        <div className='col-md-10 mx-auto'>
          <form action=''>
            <div className='form-group row inputTwo'>
              <div className='col-sm-6'>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  type='text'
                  className='form-control '
                  name='fullName'
                  placeholder='Full Name'
                />
              </div>
              <div className='col-sm-6 '>
                <label htmlFor='dateOfBirth '>Date of Birth</label>
                <input
                  type='date'
                  className='form-control'
                  name='dateOfBirth'
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
                  placeholder='Home Address'
                />
              </div>
              <div className='col-sm-6'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='form-group row inputTwo'>
              <div className='col-sm-6'>
                <label htmlFor='occupation'>Occupation</label>
                <input
                  type='text'
                  className='form-control'
                  name='occupation'
                  placeholder='Occupation'
                />
              </div>
              <div className='col-sm-6'>
                <label htmlFor='bvn'>BVN/SSN</label>
                <input
                  type='text'
                  className='form-control'
                  name='bvn'
                  placeholder='BVN/SSN'
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-6'>
                <h5 className='mt-2'>Residential Status</h5>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    className='custom-control-input'
                    name='renting'
                    id='renting'
                  />
                  <label htmlFor='renting' className='custom-control-label'>
                    {' '}
                    Renting
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    className='custom-control-input'
                    name='own'
                    id='own'
                  />
                  <label htmlFor='own' className='custom-control-label'>
                    {' '}
                    Own
                  </label>
                </div>
              </div>
              <div className='col-sm-6'>
                <h5 className='mt-2'>Dependants</h5>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    className='custom-control-input'
                    name='yes'
                    id='yes'
                  />
                  <label htmlFor='yes' className='custom-control-label'>
                    {' '}
                    Yes
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    className='custom-control-input radio'
                    name='no'
                    id='no'
                  />
                  <label htmlFor='no' className='custom-control-label'>
                    {' '}
                    No
                  </label>
                </div>
              </div>
            </div>
            <input
              type='submit'
              value='Submit'
              className='btn mt-4  d-md btn-block editProfileBtn'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDashboard;

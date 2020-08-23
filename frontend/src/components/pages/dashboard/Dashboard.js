import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getCurrentUser, getUserStatus } from '../../../actions/userActions';
import isEmpty from '../../../validation/is-empty';
import { useEffect } from 'react';
import Spinner from '../../common/Spinner';
import DashboardPolicies from './DashboardPolicies';
import DashboardStatus from './DashboardStatus';

const Dashboard = ({
  getCurrentUser,
  user,
  loading,
  getUserStatus,
  status,
}) => {
  useEffect(() => {
    getCurrentUser();
    getUserStatus();
  }, [getCurrentUser, getUserStatus]);

  // console.log(userObj, offers);

  let profileContent;
  if (user === {} || loading) {
    profileContent = <Spinner />;
  } else {
    if (Object.keys(user).length > 0) {
      const { userObj } = user;

      if (
        userObj.job === null &&
        userObj.address === null &&
        userObj.dependants === null &&
        userObj.dob === null &&
        userObj.residential_status === null
      ) {
        profileContent = (
          <div>
            <h3>Please fill in your complete profile details</h3>
            <Link
              to='/edit_profile'
              type='button'
              className='editBtn btn mt-5 '
            >
              Edit Profile
            </Link>
          </div>
        );
      } else {
        profileContent = (
          <Fragment>
            <div className='profile d-flex flex-md-row flex-sm-column flex-xs-column'>
              <div className='profileLeft'>
                <h2>
                  <strong className='name'>{userObj.name}</strong>
                  <p className='job'>{userObj.job}</p>
                </h2>

                <h5 className='mt-4'>Home Address</h5>
                <p className='address '>{userObj.address}</p>
                <h5>Residential Status</h5>
                <p className='resSta'>{userObj.residential_status}</p>
              </div>
              <div className='profileRight'>
                <h2 className='mb-4'>
                  <p className='date'>
                    <Moment format='YYYY/MM/DD'>{userObj.dob}</Moment>
                  </p>
                  <p className='email'>{userObj.email}</p>
                </h2>

                <h5 className='mt-4 depen'>Dependants</h5>
                <p>{userObj.dependants}</p>
              </div>
            </div>
            <Link
              to='/edit_profile'
              type='button'
              className='editBtn btn mt-4 '
            >
              Edit Profile
            </Link>
          </Fragment>
        );
      }
    }
  }
  return (
    <div className='dashboard mt-5'>
      <div className='container '>
        <div className='col-md-12 col-sm-12 '>
          <h1 className='mb-5 header'>Profile</h1>
          {profileContent}
        </div>
        <DashboardPolicies user={user} loading={loading} />
        {isEmpty(user.offers) ? (
          <div className='d-none'></div>
        ) : (
          <DashboardStatus status={status} loading={loading} />
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user.User,
  status: state.user.status,
  loading: state.user.loading,
  auth: state.auth,
});
export default connect(mapStateToProps, { getCurrentUser, getUserStatus })(
  Dashboard
);

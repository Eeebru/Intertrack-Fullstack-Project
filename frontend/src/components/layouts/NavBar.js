import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentUser } from '../../actions/userActions';

const NavBar = ({ logoutUser, auth, clearCurrentUser }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    clearCurrentUser();
    logoutUser();
  };

  const { isAuthenticated } = auth;

  const guestLinks = (
    <Fragment>
      <li className='nav-item mr-4'>
        <Link className='nav-link text-dark' to='#'>
          +234-000-500-606
        </Link>
      </li>
      <li className='nav-item mr-4'>
        <Link className='nav-link text-dark' to='/signin'>
          Sign in
        </Link>
      </li>
      <li className='nav-item mr-4'>
        <Link className='nav-link text-dark' to='/signup'>
          Sign up
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li className='nav-item mr-4'>
        <Link className='nav-link text-dark' to='#'>
          +234-000-500-606
        </Link>
      </li>
      <li className='nav-item mr-4'>
        <Link className='nav-link text-dark' to='/dashboard'>
          My Account
        </Link>
      </li>
      <li className='nav-item mr-4'>
        <Link
          className='nav-link text-dark'
          to='/sigin'
          onClick={onLogoutClick}
        >
          Logout
        </Link>
      </li>
    </Fragment>
  );
  return (
    <nav className='navbar navbar-expand-lg navbar-light  '>
      <Link className='navbar-brand logo Ai' to='/'>
        Ai
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto '>
          <li className='nav-item active'>
            <Link className='nav-link text-dark' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item ml-4'>
            <Link className='nav-link text-dark' to='/insure'>
              Insure
            </Link>
          </li>
          <li className='nav-item ml-4'>
            <Link className='nav-link text-dark' to='/claims'>
              claims
            </Link>
          </li>
          <li className='nav-item ml-4'>
            <Link className='nav-link text-dark' to='/products'>
              Products
            </Link>
          </li>
          <li className='nav-item ml-4'>
            <Link className='nav-link text-dark' to='/aboutus'>
              About us
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentUser })(
  NavBar
);

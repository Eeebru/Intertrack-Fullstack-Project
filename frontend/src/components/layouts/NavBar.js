import React from 'react';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light  '>
      <a className='navbar-brand logo' href='#'>
        Ai
      </a>
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
            <a className='nav-link text-dark' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item ml-4'>
            <a className='nav-link text-dark' href='#'>
              Insure
            </a>
          </li>
          <li className='nav-item ml-4'>
            <a className='nav-link text-dark' href='#'>
              claims
            </a>
          </li>
          <li className='nav-item ml-4'>
            <a className='nav-link text-dark' href='#'>
              Advice
            </a>
          </li>
          <li className='nav-item ml-4'>
            <a className='nav-link text-dark' href='#'>
              About us
            </a>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item mr-4'>
            <a className='nav-link text-dark' href='#'>
              +234-000-500-606
            </a>
          </li>
          <li className='nav-item mr-4'>
            <a className='nav-link text-dark' href='#'>
              Sign in
            </a>
          </li>
          <li className='nav-item mr-4'>
            <a className='nav-link text-dark' href='#'>
              Sign up
            </a>
          </li>
          {/* <li className='nav-item mr-4'>
            <SearchIcon />
          </li>
          <li className='nav-item mr-4'>
            <GlobeIcon />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

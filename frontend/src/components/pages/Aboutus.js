import React from 'react';
import Image9 from '../../img/aboutus.png';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <section className='aboutUs mt-5'>
      <div className='container '>
        <h1 className='text-center'>Our Goals</h1>
        <p className='text-center mb-4'>
          We are a twenty-first century insurance provider who wants you to
          forget everything you know about the technicalities of the
          conventional insurance companies; replacing complicated, slow, and
          expensive with simple, quick, and affordable.
          <br />
          <strong>For everyone, anywhere.</strong>
        </p>
        <img src={Image9} alt='' className='aboutUsImage mb-4' />
        <div>
          <Link to='/signup'>
            <button
              type='button'
              className='aboutUsBtn btn btn-lg  px-5  d-sm-block d-md-flex mb-md-4'
            >
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

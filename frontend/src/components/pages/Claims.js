import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/Repeat_Grid_5.png';
import image1 from '../../img/Icon_feather-check-circle.png';
import image2 from '../../img/Icon_feather-clock.png';

const Claims = () => {
  return (
    <section className=' container-fliud claimsPage '>
      <div className=' mt-5'>
        <h1 className='motto text-center '>
          You need not face the impending alone
        </h1>
        <p className='saying text-center my-4'>
          Claims are handled by our AI and our fantastic team.
          <br />
          File for a claim and blink, we’re there.
        </p>
        <div className='claims mx-md-5'>
          <div className='text-center mr-md-5 claimBtnA'>
            <Link className='claimsBtn btn btn-lg  px-5' to='/claims'>
              Fill Claim Form
            </Link>
          </div>
        </div>
        <div className='text-center mr-md-5 claimBtnB'>
          <Link className='claimsBtn btn btn-lg  px-5 ' to='/claims'>
            Fill Claim Form
          </Link>
        </div>
        <div className='container text-center mt-5'>
          <div className='row '>
            <div className='col-md-4 '>
              <img src={image1} className='w-10' />
              <h1 className='claimStats'>3sec</h1>
              <p className='claimP'>World record claim handling</p>
            </div>
            <div className='col-md-4'>
              <img src={image} className='w-50 mt-md-3 mb-md-4' />
              <h1 className='claimStats'>+4.9</h1>
              <p className='claimP'>Claims rating online</p>
            </div>
            <div className='col-md-4 '>
              <img src={image2} className='w-10 ' />
              <h1 className='claimStats'>50%</h1>
              <p className='claimP'>Of claims handled instantly</p>
            </div>
          </div>
          <div className='text-center mt-3 mb-5 '>
            <Link className='claimsBtn btn btn-lg  px-5' to='/claims'>
              Fill Claim Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Claims;

import React from 'react';
import CrossIcon from '../../icons/crossIcon';
import CarIcon from '../../icons/carIcon';
import HouseIcon from '../../icons/houseIcon';
import FireIcon from '../../icons/fireIcon';
import BookIcon from '../../icons/bookIcon';
import AirplaneIcon from '../../icons/airplaneIcon';

const ProductList = () => {
  return (
    <section className='mt-5'>
      <h2 className='productHeader text-center'>
        Every Insurance you need in the 21st Century
      </h2>
      <p className='productText text-center'>
        We do care, that's why we are everywhere you
        <br /> need to be with whatever you need.
      </p>

      <div className='container mt-5'>
        <div className='row productList'>
          <div className=' text-center productCard'>
            <CrossIcon />
            <h3 className='contentHeader '>
              Life and Health <br /> Insurance
            </h3>
            <p className='startingFrom '>Starting from</p>
            <h4 className='month '>$5/month</h4>
            <button className='quote btn'>Quote</button>
          </div>
          <div className=' text-center productCard'>
            <CarIcon />
            <h3 className='contentHeader'>
              Motor <br /> Insurance
            </h3>
            <p className='startingFrom'>Starting from</p>
            <h4 className='month'>$3/month</h4>
            <button className='quote btn'>Quote</button>
          </div>
          <div className=' text-center productCard'>
            <HouseIcon />
            <h3 className='contentHeader'>
              Home <br /> Insurance
            </h3>
            <p className='startingFrom'>Starting from</p>
            <h4 className='month'>$10/month</h4>
            <button className='quote btn'>Quote</button>
          </div>
        </div>

        <div className='row productList'>
          <div className=' text-center productCard'>
            <FireIcon />
            <h3 className='contentHeader '>
              Fire <br /> Insurance
            </h3>
            <p className='startingFrom '>Starting from</p>
            <h4 className='month '>$15/month</h4>
            <button className='quote btn'>Quote</button>
          </div>
          <div className=' text-center productCard'>
            <BookIcon />
            <h3 className='contentHeader'>
              Education <br /> Insurance
            </h3>
            <p className='startingFrom'>Starting from</p>
            <h4 className='month'>$10/month</h4>
            <button className='quote btn'>Quote</button>
          </div>
          <div className=' text-center productCard'>
            <AirplaneIcon />
            <h3 className='contentHeader'>
              Travel <br /> Insurance
            </h3>
            <p className='startingFrom'>Starting from</p>
            <h4 className='month'>$30/trip</h4>
            <button className='quote btn'>Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;

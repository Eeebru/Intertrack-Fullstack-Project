import React, { Fragment } from 'react';
import CrossIcon from '../../icons/crossIcon';
import CarIcon from '../../icons/carIcon';
import HouseIcon from '../../icons/houseIcon';
import FireIcon from '../../icons/fireIcon';
import BookIcon from '../../icons/bookIcon';
import AirplaneIcon from '../../icons/airplaneIcon';
import Image1 from '../../img/Illustration@2x.png';
import Image2 from '../../img/Group 322@2x.png';
import Image3 from '../../img/Screenshot 2020-05-27 at 14.00.15.png';

const ProductList = () => {
  return (
    <Fragment>
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
              <button className='quote btn '>Quote</button>
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

      <section className='info'>
        <h2 className='infoHeader text-center'>
          Are you skeptical if this is for you? Let us inform you.
        </h2>
        <p className='infoText text-center'>
          We do care willing to inform you on everything you need to know
          <br /> about insurance policies.
        </p>

        <div className='container info'>
          <div className='row justify-content-around'>
            <div className='col-6'>
              <h3 className='infoTitle'>What is an insurance?</h3>
              <p className='infoBody mt-4'>
                The life and property of an individual <br />
                are surrounded by the risk of death,
                <br /> disability or destruction. These risks
                <br /> may result in financial losses. Insurance
                <br /> is a prudent way to transfer such risks
                <br /> to an insurance company.
              </p>
            </div>
            <div className='col-6'>
              <img src={Image1} style={{ width: '400px' }} alt='' />
              <button type='button' className='infoBtn btn mt-3 '>
                Insurance Dictionary
              </button>
            </div>

            <div className='col-6'>
              <h3 className='infoTitle'>Who is this service for?</h3>
              <p className='infoBody mt-4'>
                Everyone does. When you buy <br />
                insurance, you're buying a promise. It's
                <br /> a promise that if something
                <br /> catastrophic happens to you and/or
                <br /> your valuables, your carries is going to
                <br /> assist you to reinstate what has been <br /> lost.
              </p>
            </div>
            <div className='col-6'>
              <img src={Image2} style={{ width: '325px' }} alt='' />
              <button type='button' className='infoBtn btn mt-3 '>
                Reach Out for advice
              </button>
            </div>
            <br />
            <div className='col-6 mt-5'>
              <h3 className='infoTitle'>
                How are we different from the conventional?
              </h3>
              <p className='infoBody mt-4'>
                Alles Insurance reverse the traditional
                <br />
                insurance model. We treat the
                <br /> premiums you pay as if it's your money,
                <br /> not ours. With Alles Insurance,
                <br /> everything becomes simple and
                <br /> transparent. We take a flat fee, pay
                <br />
                claims super fast, and give back
                <br /> what's left to causes you care about.
              </p>
            </div>
            <div className='col-6 mt-5'>
              <img
                src={Image3}
                style={{ width: '450px', marginRight: '50px' }}
                alt=''
              />
              <div className='pie mt-3'>
                <p>
                  {' '}
                  A <b>minimal fee</b>
                  <br /> to run everything
                </p>
                <p>
                  {' '}
                  We pay claims
                  <br /> <b>incredibly fast</b>
                </p>
                <p>
                  {' '}
                  We give leftovers
                  <br /> <b>back to causes</b>
                </p>
              </div>
              <button type='button' className='infoBtn btn mt-3 '>
                Check Out our plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductList;

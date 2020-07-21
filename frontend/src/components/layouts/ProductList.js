import React, { Fragment } from 'react';
import CrossIcon from '../../icons/crossIcon';
import CarIcon from '../../icons/carIcon';
import HouseIcon from '../../icons/houseIcon';
import FireIcon from '../../icons/fireIcon';
import BookIcon from '../../icons/bookIcon';
import AirplaneIcon from '../../icons/airplaneIcon';
import Image1 from '../../img/Illustration.png';
import Image2 from '../../img/Group_615.png';
import Landing from './Landing';

const ProductList = () => {
  return (
    <Fragment>
      <Landing />
      <section className='mt-5'>
        <h2 className='productHeader text-center'>
          Every Insurance you need in the 21st Century
        </h2>
        <p className='productText text-center'>
          We do care, that's why we are everywhere you need to be with whatever
          you need.
        </p>

        <div className='container mt-5'>
          <div className='row productList'>
            <div className=' text-center productCard col-md-3 '>
              <CrossIcon />
              <h3 className='contentHeader '>
                Life & Health <br /> Insurance
              </h3>
              <p className='startingFrom '>Starting from</p>
              <h4 className='month '>$5/month</h4>
              <button className='quote btn btn-lg btn-block '>Quote</button>
            </div>
            <div className=' text-center productCard col-md-3 '>
              <CarIcon />
              <h3 className='contentHeader'>
                Motor <br /> Insurance
              </h3>
              <p className='startingFrom'>Starting from</p>
              <h4 className='month'>$3/month</h4>
              <button className='quote btn btn-lg btn-block'>Quote</button>
            </div>
            <div className=' text-center productCard col-md-3 '>
              <HouseIcon />
              <h3 className='contentHeader'>
                Home <br /> Insurance
              </h3>
              <p className='startingFrom'>Starting from</p>
              <h4 className='month'>$10/month</h4>
              <button className='quote btn btn-lg btn-block'>Quote</button>
            </div>
          </div>

          <div className='row productList'>
            <div className=' text-center productCard col-md-3'>
              <FireIcon />
              <h3 className='contentHeader '>
                Fire <br /> Insurance
              </h3>
              <p className='startingFrom '>Starting from</p>
              <h4 className='month '>$15/month</h4>
              <button className='quote btn btn-lg btn-block'>Quote</button>
            </div>
            <div className=' text-center productCard col-md-3'>
              <BookIcon />
              <h3 className='contentHeader'>
                Education <br /> Insurance
              </h3>
              <p className='startingFrom'>Starting from</p>
              <h4 className='month'>$10/month</h4>
              <button className='quote btn btn-lg btn-block'>Quote</button>
            </div>
            <div className=' text-center productCard col-md-3'>
              <AirplaneIcon />
              <h3 className='contentHeader'>
                Travel <br /> Insurance
              </h3>
              <p className='startingFrom'>Starting from</p>
              <h4 className='month'>$30/trip</h4>
              <button className='quote btn btn-lg btn-block'>Quote</button>
            </div>
          </div>
        </div>
      </section>

      <section className='info'>
        <h2 className='infoHeader text-center'>
          Are you skeptical if this is for you? Let us inform you.
        </h2>
        <p className='infoText text-center'>
          We do care willing to inform you on everything you need to know about
          insurance policies.
        </p>

        <div className='container info'>
          <div className='row justify-content-around'>
            <div className='col-md-6 col-sm-12'>
              <h3 className='infoTitle'>What is an insurance?</h3>
              <p className='infoBody mt-4'>
                The life and property of an individual are surrounded by the
                risk of death, disability or destruction. These risks may result
                in financial losses. Insurance is a prudent way to transfer such
                risks to an insurance company.
              </p>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img src={Image1} alt='' className='infoImage' />
              <button type='button' className='infoBtn btn btn-lg mt-3 '>
                Insurance Dictionary
              </button>
            </div>

            <div className='col-md-6 col-sm-12 mt-5'>
              <h3 className='infoTitle'>Who is this service for?</h3>
              <p className='infoBody mt-4'>
                Everyone does. When you buy insurance, you're buying a promise.
                It's a promise that if something catastrophic happens to you
                and/or your valuables, your carries is going to assist you to
                reinstate what has been lost.
              </p>
            </div>
            <div className='col-md-6 col-sm-12 mt-5'>
              <img src={Image2} alt='' className='infoImage' />
              <button type='button' className='infoBtn btn btn-lg mt-3 '>
                Reach Out for advice
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductList;

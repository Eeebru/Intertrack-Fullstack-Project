import React from 'react';
import WhiteCrossIcon from '../../../icons/whiteCrossIcon';
import WhiteHouseIcon from '../../../icons/whiteHouseIcon';

const Dashboard = () => {
  return (
    <div className='dashboard mt-5'>
      <div className='container'>
        <div className='row '>
          <div className='col-md-6 col-sm-6 '>
            <h1 className='mb-5'>Profile</h1>
            <div className='profile d-flex flex-md-row flex-sm-column flex-xs-column'>
              <div className='profileLeft'>
                <h2>
                  <strong>Ray Chu</strong>
                  <p>Accountant</p>
                </h2>

                <h5>Home Address</h5>
                <p>
                  Owode 17,
                  <br />
                  Iwaya,Yaba
                  <br />
                  Lagos.
                </p>
                <h5>Residential Status</h5>
                <p>Renting</p>
              </div>
              <div className='profileRight'>
                <div>
                  <h4>07/12/1992</h4>
                  <p>raychu@gmail.com</p>
                </div>
                <h5>Dependants</h5>
                <p>None</p>
              </div>
            </div>
            <button type='button' className='editBtn btn my-3 '>
              Edit Profile
            </button>
          </div>
          <div className='col-md-6 col-sm-6  policies'>
            <h1 className='mb-5 '>Policies</h1>
            <div className='d-flex flex-md-row flex-sm-column'>
              <div className='card flipCard '>
                <div className='flipCardInner'>
                  <div className='flipCardFront'>
                    <WhiteCrossIcon />
                    <h2
                      className='card-title mt-md-4 '
                      style={{ fontWeight: 'bolder' }}
                    >
                      Health
                      <br /> Insurance
                    </h2>
                    <p className='card-text mt-md-5'>
                      Coverage covers most doctor and hospital visits
                      prescription drugs, wellness care and medical devices
                    </p>
                    {/* <hr
                      style={{ backgroundColor: 'white', marginTop: '90px' }}
                    /> */}
                  </div>
                  <div className='flipCardBack'>
                    <div className='cardPrice'>$5/month</div>
                    <h5>EXPIRES ON </h5>
                    <p>
                      {' '}
                      <strong className='expiresOn'>10/08/2020</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className='card flipCard spacer'>
                <div className='flipCardInner'>
                  <div className='flipCardFront'>
                    <WhiteHouseIcon />
                    <h2
                      className='card-title mt-md-4'
                      style={{ fontWeight: 'bolder' }}
                    >
                      Home
                      <br /> Insurance
                    </h2>
                    <p className='card-text mt-md-5'>
                      Coverage protects you financially in event of
                      circumstance(flood, fire outbreak, theft, storm) that
                      could make you lose your property.
                    </p>
                    {/* <hr
                      style={{ backgroundColor: 'white', marginTop: '70px' }}
                    /> */}
                  </div>
                  <div className='flipCardBack text-center'>
                    <div className='cardPrice'>$10/month</div>
                    <h5>EXPIRES ON </h5>
                    <p>
                      <strong className='expiresOn'>10/08/2020</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className='mt-4 largeScreenCard'>
              * Please hover on the cards to see the price
            </p>
            <p className='mt-4 mobileCard'>
              * Please click on the cards to see the price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

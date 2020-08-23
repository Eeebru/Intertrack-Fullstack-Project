import React from 'react';
import Image3 from '../../img/health.png';
import Image4 from '../../img/car.png';
import Image5 from '../../img/home.png';
import Image6 from '../../img/fire.png';
import Image7 from '../../img/education.png';
import Image8 from '../../img/travel.png';

const Insure = () => {
  return (
    <section className='insure mt-4'>
      <h1 className='text-center mt-5 mb-5'>
        Smart step to security,
        <br />
        better step to reliability
      </h1>
      <div className='container mt-5'>
        <div className='row  '>
          <div className='col-md-6 col-sm-12 my-4'>
            <h5>Life & Health Insurance</h5>
            <h3>We are there for you and your loved ones in times of need.</h3>
            <p>
              Take out a life insurance plan and we will pay your family or
              loved ones an agreed amount – your “life benefit” – if you pass
              away or become permanently disabled. Depending on your life
              insurance plan, we also pay a proportion of your life insurance
              benefit if you contract a critical illness.
            </p>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <div className='float-md-right'>
              <img src={Image3} alt='' className='insureImages mt-5' />
              <button
                type='button'
                className='insureBtn btn btn-lg mt-3 d-flex'
              >
                Choose a Plan
              </button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <h5>Motor Insurance</h5>
            <h3>
              Your safety and the upkeep of your vehicle is a priority for us.
            </h3>
            <p>
              Our insurance plans are designed to protect the insured for loss
              of or damage to his or her vehicle, damage to Third Party property
              including bodily injury and death to Third Party caused by an
              accident whilst using their vehicle as it is a compulsory
              insurance for every vehicle owner.
            </p>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <div className='float-md-right'>
              <img src={Image4} alt='' className='insureImages mt-5' />
              <button
                type='button'
                className='insureBtn btn btn-lg mt-3 d-flex'
              >
                Choose a Plan
              </button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <h5>Home Insurance</h5>
            <h3>
              Our coverage protects the stuff you own at home and everywhere
              else.
            </h3>
            <p>
              Risks that are typically covered by a standard home insurance
              policy include fire, theft, storm, flood and other perils. No one
              plans on losing their home or possessions to any of these
              unforeseen dangers. However, when that day comes, you can rely on
              us.
            </p>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <div className='float-md-right'>
              <img src={Image5} alt='' className='insureImages mt-5' />
              <button
                type='button'
                className='insureBtn btn btn-lg mt-3 d-flex'
              >
                Choose a Plan
              </button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <h5>Fire Insurance</h5>
            <h3>
              A short circuit can reduce your assets to ashes. Let’s help
              extinguish your worries.
            </h3>
            <p>
              Protect yourself and your properties from loss caused by
              accidental fire and lightening with our Fire Insurance. We take
              pride in providing you with our comprehensive protection backed by
              sound financial capability. This policy protects you from
              financial loss as a result of perils.
            </p>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <div className='float-md-right'>
              <img src={Image6} alt='' className='insureImages mt-5' />
              <button
                type='button'
                className='insureBtn btn btn-lg mt-3 d-flex'
              >
                Choose a Plan
              </button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <h5>Study Insurance</h5>
            <h3>
              We are aware an investment in your child’s education pays the best
              interest.
            </h3>
            <p>
              Your children’s wellbeing and their future is precious. With our
              education insurance cover, you can save towards financing your
              child’s education and they continue to receive the education
              you’ve always wanted for them even if you pass away or become
              disabled.
            </p>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <div className='float-md-right'>
              <img src={Image7} alt='' className='insureImages mt-5' />
              <button
                type='button'
                className='insureBtn btn btn-lg mt-3  d-flex'
              >
                Choose a Plan
              </button>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <h5>Travel Insurance</h5>
            <h3>
              Travelling outside your place of residence? We pilot your safety.
            </h3>
            <p>
              Whether you are travelling for business, pleasure or for school,
              our travel insurance is designed to provide cover for risks
              associated with travelling outside your country of residence, no
              matter your travel destination, we take pride in catering your for
              you and your valuables’ safety.
            </p>
          </div>
          <div className='col-md-6 col-sm-12 my-4'>
            <div className='float-md-right'>
              <img src={Image8} alt='' className='insureImages mt-5' />
              <button
                type='button'
                className='insureBtn btn btn-lg mt-3 d-flex'
              >
                Choose a Plan
              </button>
            </div>
          </div>
        </div>
        <div className='text-center mt-5'>
          <h4 className='ml-md-5'>
            Do you want to update or renew your
            <br /> current plan?
          </h4>
          <button type='button' className='insureUpdateBtn btn btn-lg mt-3 '>
            Update or Renew
          </button>
        </div>
        <div className='text-center mt-5 mb-md-5'>
          <h4 className='ml-md-5'>
            Do you know our products are
            <br /> customisable?
          </h4>
          <button type='button' className='insureContactBtn btn btn-lg mt-3  '>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insure;

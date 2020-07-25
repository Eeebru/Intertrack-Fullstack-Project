import React from 'react';
import InstagramIcon from '../../icons/instagramIcon';
import FacebookIcon from '../../icons/facebookIcon';
import TwitterIcon from '../../icons/twitterIcon';
import YoutubeIcon from '../../icons/youtubeIcon';
import MediumIcon from '../../icons/mediumIcon';
import Image4 from '../../img/Image 1.png';
import Image5 from '../../img/Google-Play-Logo-black-600x180.png';

const Footer = () => {
  return (
    <section className='footer '>
      <div className='footerTop mt-4 mt-sm-5'>
        <div className='followUs '>
          <h6 className='mb-4'>FOLLOW US</h6>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <YoutubeIcon />
          <MediumIcon />
        </div>

        <div className='getOurApp'>
          <h6>GET OUR APP</h6>
          <img src={Image4} style={{ width: '150px' }} alt='' />
          <img
            src={Image5}
            style={{ width: '140px', marginLeft: '20px' }}
            alt=''
          />
        </div>
      </div>
      <div className='footerSide'>Ai</div>
      <div className='footerBody'>
        Insurance provided by Alles Insurance Company, 5 Ridgeway St. 3rd floor,
        Lekki, Lagos State, Nigeria. <br className='break' /> Alles Insurance
        Agency (AIA) is acting as the agent of Alles Insurance Company in
        selling this insurance policy. It receives compensation based on the
        premiums for the insurance
        <br className='break' />
        policies it sells. Further information is available upon request.
      </div>
    </section>
  );
};

export default Footer;

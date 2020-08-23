import React, { Fragment } from 'react';
import WhiteCrossIcon from '../../../icons/whiteCrossIcon';
import WhiteHouseIcon from '../../../icons/whiteHouseIcon';
import WhiteBookIcon from '../../../icons/whitebookIcon';
import WhiteCarIcon from '../../../icons/whitecarIcon';
import WhiteFireIcon from '../../../icons/whitefireIcon';
import WhiteAirplaneIcon from '../../../icons/whiteplaneIcon';
const DashboardOfferList = ({ offer }) => {
  let logo;
  if (offer.name === 'Life Insurance') {
    logo = <WhiteCrossIcon />;
  } else if (offer.name === 'Home Insurance') {
    logo = <WhiteHouseIcon />;
  } else if (offer.name === 'Study Insurance') {
    logo = <WhiteBookIcon />;
  } else if (offer.name === 'Motor Insurance') {
    logo = <WhiteCarIcon />;
  } else if (offer.name === 'Fire Insurance') {
    logo = <WhiteFireIcon />;
  } else if (offer.name === 'Travel Insurance') {
    logo = <WhiteAirplaneIcon />;
  }
  return (
    <Fragment>
      <div className='card flipCard spacer  mt-3 ml-3'>
        <div className='flipCardInner'>
          <div className='flipCardFront'>
            {logo}
            <h2 className='card-title mt-md-4' style={{ fontWeight: 'bolder' }}>
              {offer.name}
            </h2>
            <p className='card-text mt-md-5 mx-3'>
              {offer.product_description}
            </p>
          </div>
          <div className='flipCardBack text-center'>
            <div className='cardPrice'>
              ${offer.product_price}/
              {offer.name === 'Travel Insurance' ? 'Trip' : 'Month'}
            </div>

            <p>
              <strong className='expiresOn'>
                All plans are valid for{' '}
                {offer.name === 'Travel Insurance' ? 'a trip ' : 'a month'}{' '}
                except renewned
              </strong>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardOfferList;

import React, { Fragment } from 'react';
import WhiteCrossIcon from '../../../icons/whiteCrossIcon';
import WhiteHouseIcon from '../../../icons/whiteHouseIcon';
import WhitebookIcon from '../../../icons/whitebookIcon';
import WhitecarIcon from '../../../icons/whitecarIcon';
import WhitefireIcon from '../../../icons/whitefireIcon';
import WhiteplaneIcon from '../../../icons/whiteplaneIcon';
const DashboardOfferList = ({ offer }) => {
  let logo;
  if (offer.name === 'Life Insurance') {
    logo = <WhiteCrossIcon />;
  } else if (offer.name === 'Home Insurance') {
    logo = <WhiteHouseIcon />;
  } else if (offer.name === 'Study Insurance') {
    logo = <WhitebookIcon />;
  } else if (offer.name === 'Motor Insurance') {
    logo = <WhitecarIcon />;
  } else if (offer.name === 'Fire Insurance') {
    logo = <WhitefireIcon />;
  } else if (offer.name === 'Travel Insurance') {
    logo = <WhiteplaneIcon />;
  }
  return (
    <Fragment>
      <div className='card flipCard spacer '>
        <div className='flipCardInner'>
          <div className='flipCardFront'>
            {logo}
            <h2 className='card-title mt-md-4' style={{ fontWeight: 'bolder' }}>
              {offer.name}
            </h2>
            <p className='card-text mt-md-5'>{offer.product_description}</p>
          </div>
          <div className='flipCardBack text-center'>
            <div className='cardPrice'>${offer.product_price}/month</div>

            <p>
              <strong className='expiresOn'>
                All plans are valid for a month except renewned
              </strong>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardOfferList;

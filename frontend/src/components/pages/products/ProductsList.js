import React from 'react';

import BuyButton from './BuyButton';
import CrossIcon from '../../../icons/crossIcon';
import CarIcon from '../../../icons/carIcon';
import HouseIcon from '../../../icons/houseIcon';
import FireIcon from '../../../icons/fireIcon';
import BookIcon from '../../../icons/bookIcon';
import AirplaneIcon from '../../../icons/airplaneIcon';

const ProductsList = ({
  product,
  status,
  buyProduct,
  offers,
  verify,
  verified,
}) => {
  const { userOrder } = status;

  let logo;
  if (product.name === 'Life Insurance') {
    logo = <CrossIcon />;
  } else if (product.name === 'Home Insurance') {
    logo = <HouseIcon />;
  } else if (product.name === 'Study Insurance') {
    logo = <BookIcon />;
  } else if (product.name === 'Motor Insurance') {
    logo = <CarIcon />;
  } else if (product.name === 'Fire Insurance') {
    logo = <FireIcon />;
  } else if (product.name === 'Travel Insurance') {
    logo = <AirplaneIcon />;
  }
  return (
    <div className=' text-center productListCard col-md-3 m-4'>
      <div className='mb-4'>{logo}</div>
      <h3 className='mb-4 contentHeader'>{product.name}</h3>

      <h4 className='month'>
        ${product.product_price}/
        {product.name === 'Travel Insurance' ? 'Trip' : 'Month'}
      </h4>

      <BuyButton
        product={product}
        userOrder={userOrder}
        buyProduct={buyProduct}
        verify={verify}
        verified={verified}
      />
    </div>
  );
};

export default ProductsList;

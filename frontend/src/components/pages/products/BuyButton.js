import React, { Fragment, useState } from 'react';
// import isEmpty from '../../../validation/is-empty';
import { Button } from 'react-bootstrap';
import BuyModal from './BuyModal';
const BuyButton = ({ product, userOrder }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  let classes = 'buy btn btn-lg btn-block ';
  // if (userOrder === 'undefined') {
  //   return classes;
  // } else if (
  //   userOrder.product_id === product.id &&
  //   userOrder.is_active === true
  // ) {
  //   classes += ' disabled';
  // }

  return (
    <Fragment>
      <Button variant='none' onClick={handleShow} className={classes}>
        Buy
      </Button>
      <BuyModal
        show={show}
        product={product}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </Fragment>
  );
};

export default BuyButton;

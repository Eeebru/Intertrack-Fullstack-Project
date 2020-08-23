import React, { Fragment, useState } from 'react';
// import isEmpty from '../../../validation/is-empty';
import { Button } from 'react-bootstrap';
import BuyModal from './BuyModal';
const BuyButton = ({ product, userOrder, buyProduct, verify, verified }) => {
  const [show, setShow] = useState(false);
  const { alreadyHav } = verified;
  const handleClose = () => {
    setShow(false);
  };

  const check = (e) => {
    e.preventDefault();

    const checkId = {
      product_id: product.id,
    };

    verify(checkId);
    // const { alreadyHav } = verified;
    // console.log(alreadyHav);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <Fragment>
      <form onSubmit={check}>
        <Button
          variant='none'
          onClick={handleShow}
          className='buy  btn btn-lg btn-block '
          type='submit'
        >
          Get Details
        </Button>
        <BuyModal
          show={show}
          product={product}
          buyProduct={buyProduct}
          handleClose={handleClose}
          handleShow={handleShow}
          verifyProd={alreadyHav}
        />
      </form>
    </Fragment>
  );
};

export default BuyButton;

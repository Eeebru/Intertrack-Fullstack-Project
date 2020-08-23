import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
// import PayStack from '../PayStack';
import { PaystackButton } from 'react-paystack';
const BuyModal = ({ show, handleClose, product, buyProduct, verifyProd }) => {
  const publicKey = 'pk_test_c2c945169a7202a95d9cdf8369dd3e235abfc61b';
  let realAmount = product.product_price;
  let amount = 100 * realAmount;

  const [email, setEmail] = useState('');

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const buy = {
      product_id: product.id,
    };
    buyProduct(buy, history);

    handleClose();
  };

  const componentProps = {
    email,
    amount,
    publicKey,
    text: 'Purchase',
    onSuccess: () => {
      onSubmit();
      alert('Payment Successful');
    },

    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className='text-center'>
          {' '}
          <h5 className='w-100 modal-title '>
            <strong>{product.name}</strong>
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          <strong>
            {' '}
            ${product.product_price}/{' '}
            {product.name === 'Travel Insurance' ? 'Trip' : 'Month'}
          </strong>
        </h5>
        <p>{product.product_description}</p>
        <Form onSubmit={onSubmit}>
          <div className='form-group  authInput '>
            <input
              type='text'
              id='email'
              className='form-control '
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              disabled={verifyProd === true ? true : false}
            />
          </div>

          {verifyProd === true ? (
            <Button
              variant='none'
              className='bg-danger buy btn btn-lg btn-block'
              type='submit'
              disabled
            >
              {' '}
              Already have this plan
            </Button>
          ) : (
            <PaystackButton
              {...componentProps}
              className='buy btn btn-lg btn-block'
              type='submit'
            />
          )}

          {/* <Button
            variant='none'
            className={
              verifyProd === true
                ? 'bg-danger buy btn btn-lg btn-block'
                : 'buy btn btn-lg btn-block'
            }
            type='submit'
            disabled={verifyProd === true ? true : false}
          >
            {verifyProd === true ? 'Already have this plan' : 'Purchase'}
          </Button> */}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BuyModal;

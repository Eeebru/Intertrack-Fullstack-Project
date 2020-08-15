import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const BuyModal = ({ show, handleClose, product }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const buy = {
      id: product.id,
    };
    console.log(buy);
    handleClose();
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
      animation={false}
      className='text-center'
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {' '}
          <h5>
            You selected <strong>{product.name}</strong>
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{product.product_description}</h4>
        <h1>@</h1>
        <h3>
          ${product.product_price}/{' '}
          {product.name === 'Travel Insurance' ? 'Trip' : 'Month'}
        </h3>
        <Form onSubmit={onSubmit}>
          <Button
            variant='none'
            className='buy btn btn-lg btn-block'
            type='submit'
          >
            Confirm Purchase
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BuyModal;

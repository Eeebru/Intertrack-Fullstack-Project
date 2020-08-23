import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getProducts,
  buyProduct,
  verify,
} from '../../../actions/productsActions';
import { getUserStatus, getCurrentUser } from '../../../actions/userActions';
import ProductsList from '../products/ProductsList';
import Spinner from '../../common/Spinner';
import { Alert } from 'react-bootstrap';
import Peach from '../../../img/hian-oliveira-n_L_ppO4QtY-unsplash@3x.png';

const Products = ({
  getProducts,
  products,
  getUserStatus,
  getCurrentUser,
  errors,
  user,
  status,
  buyProduct,
  verify,
  verified,
}) => {
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    getProducts();
    getCurrentUser();
    verify();
    getUserStatus();
  }, [getProducts, getUserStatus, getCurrentUser, verify]);
  const { offers } = user;

  let product;
  if (products !== null && offers !== null) {
    product = products.map((product) => (
      <ProductsList
        key={product.id}
        product={product}
        status={status}
        buyProduct={buyProduct}
        offers={offers}
        verify={verify}
        verified={verified}
      />
    ));
  } else {
    product = (
      <div className='m-auto'>
        <Spinner />
      </div>
    );
  }
  return (
    <div className='container mb-5 products'>
      <div className='text-center '>
        <img src={Peach} alt='Peach' className='peach mb-5' />
        <h1 className='text-center mb-5'>
          Which of these insurance do you need?
        </h1>
      </div>
      {Object.keys(errors).length > 0 ? (
        <div className='text-center'>
          <Alert
            show={showMessage}
            variant='danger'
            transition={false}
            dismissible
            onClose={() => setShowMessage(false)}
          >
            {errors.message}
          </Alert>
        </div>
      ) : null}
      <div className='row text-center ml-md-5 '>{product}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.User,
  products: state.product.products,
  verified: state.product.verify,
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors,
  status: state.user.status,
});
export default connect(mapStateToProps, {
  getProducts,
  getUserStatus,
  getCurrentUser,
  buyProduct,
  verify,
})(Products);

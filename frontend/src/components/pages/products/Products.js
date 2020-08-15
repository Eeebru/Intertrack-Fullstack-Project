import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../../actions/productsActions';
import { getUserStatus } from '../../../actions/userActions';
import ProductsList from '../products/ProductsList';
import Spinner from '../../common/Spinner';
import Peach from '../../../img/hian-oliveira-n_L_ppO4QtY-unsplash@3x.png';

const Products = ({ getProducts, products, getUserStatus, status }) => {
  useEffect(() => {
    getProducts();
    getUserStatus();
  }, [getProducts, getUserStatus]);

  return (
    <div className='container mb-5 products'>
      <div className='text-center '>
        <img src={Peach} alt='Peach' className='peach' />
        <h1 className='text-center'>Which of these Insurances do you want?</h1>
      </div>
      <div className='row text-center '>
        {products !== null ? (
          products.map((product) => (
            <ProductsList key={product.id} product={product} status={status} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  isAuthenticated: state.auth.isAuthenticated,
  status: state.user.status,
});
export default connect(mapStateToProps, { getProducts, getUserStatus })(
  Products
);

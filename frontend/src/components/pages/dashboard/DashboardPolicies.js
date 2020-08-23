import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DashboardOfferList from './DashboardOfferList';
import DashboardOfferListTable from './DashboardOfferListTable';
import Spinner from '../../common/Spinner';
import isEmpty from '../../../validation/is-empty';
const DashboardPolicies = ({ user, loading }) => {
  let policies;
  if (user.offers === 'undefined' || loading) {
    policies = (
      <div className='m-auto'>
        <Spinner />
      </div>
    );
  } else if (isEmpty(user.offers)) {
    policies = (
      <div>
        <h3>Please choose from our available plans</h3>
        <Link to='/products' type='button' className='editBtn btn my-3 '>
          Choose a plan
        </Link>
      </div>
    );
  } else if (Object.keys(user).length > 0) {
    const { offers } = user;
    policies = (
      <Fragment>
        {offers.map((offer) => (
          <DashboardOfferList key={offer.id} offer={offer} />
        ))}

        <table className='table mobileTable table-responsive-sm'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Price</th>
              <th scope='col'>Description</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <DashboardOfferListTable key={offer.id} offer={offer} />
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className='col-md-12 col-sm-12  policies'>
        <h1 className='my-4  mt-5 mb-5 header'>Policies</h1>
        <div className='d-flex flex-md-row flex-sm-column flex-md-wrap policesControl'>
          {policies}
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardPolicies;

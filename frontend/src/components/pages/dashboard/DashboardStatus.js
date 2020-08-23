import React, { Fragment } from 'react';
import Spinner from '../../common/Spinner';
import DashboardStatusListTable from './DashboardStatusListTable';

const DashboardStatus = ({ status, loading }) => {
  const { userOrder } = status;

  let statusContent;
  if (userOrder === 'undefined' || loading) {
    statusContent = <Spinner />;
  } else if (Object.keys(userOrder).length > 0) {
    const { userOrder } = status;
    statusContent = (
      <Fragment>
        <table className='table table-responsive-sm '>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Expires On</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {userOrder.map((order) => (
              <DashboardStatusListTable key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className='col-md-12 col-sm-12 mt-5 policiesStatus'>
        <h1 className='my-4 mb-5 m'> Status</h1>
        <div className='d-flex flex-md-row flex-sm-column flex-md-wrap '>
          {statusContent}
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardStatus;

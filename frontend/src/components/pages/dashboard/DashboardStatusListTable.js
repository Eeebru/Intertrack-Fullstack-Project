import React from 'react';
import Moment from 'react-moment';
const DashboardStatusListTable = ({ order }) => {
  let name;
  if (order.product_id === 1) {
    name = 'Life Insurance';
  } else if (order.product_id === 2) {
    name = 'Motor Insurance';
  } else if (order.product_id === 3) {
    name = 'Home Insurance';
  } else if (order.product_id === 4) {
    name = 'Fire Insurance';
  } else if (order.product_id === 5) {
    name = 'Education Insurance';
  } else if (order.product_id === 6) {
    name = 'Travel Insurance';
  }
  return (
    <tr>
      <td>{name}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{order.expiry_date}</Moment>
      </td>
      <td>
        {order.is_active ? (
          <span style={{ color: '#10de9f' }}>
            <strong>Active</strong>
          </span>
        ) : (
          <span style={{ color: '#ff8b8b' }}>
            <strong>Expired</strong>
          </span>
        )}
      </td>
    </tr>
  );
};

export default DashboardStatusListTable;

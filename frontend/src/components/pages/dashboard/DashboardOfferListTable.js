import React from 'react';

const DashboardOfferListTable = ({ offer }) => {
  return (
    <tr>
      <td>{offer.name}</td>
      <td>{offer.product_price} $</td>
      <td>{offer.product_description}</td>
    </tr>
  );
};

export default DashboardOfferListTable;

import React, { useState } from 'react';
import './layout.css';

const OrderTable = ({ selectedTab }) => {
  const orderData = [
    { channelNo: '', orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Hyderabad', customerName: 'Madhu goud', orderValue: '$100', status: 'Pending', operations: 'Actions' },
    { channelNo: '', orderNo: '#TWIN20203753', orderDate: '2022-05-04', city: 'Hyerabad', customerName: 'Madhu goud', orderValue: '$150', status: 'Accepted', operations: 'Actions' },
    { channelNo: '', orderNo: '#TKN20203752', orderDate: '2022-05-04', city: 'Hyderabad', customerName: 'Madhu goud', orderValue: '$200', status: 'Shipped', operations: 'Actions' }
  ];

  let data;
  switch (selectedTab) {
    case 'Orders':
      data = orderData;
      break;
    default:
      data = [];
  }

  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (event, orderNo) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, orderNo]);
    } else {
      setSelectedRows(selectedRows.filter(row => row !== orderNo));
    }
  };

  const handleOptions = (orderNo) => (
    <input
      type="checkbox"
      onChange={(event) => handleCheckboxChange(event, orderNo)}
      checked={selectedRows.includes(orderNo)}
    />
  );

  return (
    <div className="order-table">
      <h2>Orders</h2>
      <h3>{selectedTab}</h3>
      <table>
        <thead>
          <tr>
            <th>channelNo</th>
            <th>OrderNo</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{handleOptions(item.channelNo)}</td>
              <td>{item.orderNo}</td>
              <td>{item.orderDate}</td>
              <td>{item.city}</td>
              <td>{item.customerName}</td>
              <td>{item.orderValue}</td>
              <td>{item.status}</td>
              <td>{item.operations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

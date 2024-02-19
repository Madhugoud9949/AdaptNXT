import React, { useState } from 'react';
import OrdersTab from './OrdersTab.js';
import OrderTable from './OrderTable.js'; 
import './layout.css';

function OrdersDashboard() {
  const [selectedTab, setSelectedTab] = useState('Orders');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="orders-dashboard">
      <OrdersTab selectedTab={selectedTab} onTabChange={handleTabChange} />
     
      <OrderTable selectedTab={selectedTab} />
    </div>
  );
}

export default OrdersDashboard;

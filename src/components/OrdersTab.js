import React from 'react';
import './layout'

function OrdersTab({ selectedTab, onTabChange }) {
  const tabs = ['Orders',  'Pending','AWB Created', 'Completed', 'Cancelled', 'Ready to Ship',  'Accepted', 'Shipping'];

  return (
    <div className="orders-tab">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={selectedTab === tab ? 'active' : ''}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default OrdersTab;

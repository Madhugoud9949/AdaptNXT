import React from 'react';
import './layout.css';

const NavigationBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#inventory">Inventory</a></li>
        <li><a href="#orders">Orders</a></li>
        <li><a href="#shipping">Shipping</a></li>
        <li><a href="#channel">Channel</a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;

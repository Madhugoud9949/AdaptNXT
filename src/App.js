// App.js

import React from 'react';
import Layout from './components/layout';
import NavigationBar from './components/NavigationBar';
import OrdersDashboard from './components/OrdersDashboard';

function App() {
  return (
    <div className="App">
      <Layout>
      <NavigationBar />
      <OrdersDashboard />
      </Layout>
    </div>
  );
}

export default App;

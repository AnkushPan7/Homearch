import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-content">
        <h1>Welcome to the Home page</h1>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import Sidebar from '../components/Sidebar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <main className="home-page-content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content area of the home page.</p>
      </main>
    </div>
  );
};

export default Home;
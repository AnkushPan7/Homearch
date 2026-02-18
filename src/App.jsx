import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='app-container'>
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
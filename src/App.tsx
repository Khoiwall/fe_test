import React from 'react';
import './App.css';
import Search from './component/search';
import LayoutOne from './layout/LayoutOne';
import LayoutTwo from './layout/LayoutTwo';
import SideBar from './layout/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-6 gap-6">
        <div>
          <SideBar />
        </div>
        <div className="col-span-5">
          <div className="content">
            <Search />
            <LayoutOne />
            <LayoutTwo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Search from './component/search';
import LayoutOne from './layout/LayoutOne';
import LayoutThree from './layout/LayoutThree';
import LayoutTwo from './layout/LayoutTwo';
import SideBar from './layout/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-6 gap-6">
        <SideBar />
        <div className="col-span-5">
          <div className="content">
            <Search />
            <LayoutOne />
            <LayoutTwo />
            <LayoutThree />
            <div className="grid grid-cols-3 gap-7">
              <h2 className="col-span-2 text-base text-gray-prize-2">Masmas Admin  ©</h2>
              <div className="grid grid-cols-4">
                <h2 className="text-base text-center text-gray-prize-2">Upgrade</h2>
                <h2 className="text-base text-center text-gray-prize-2">More Themes</h2>
                <h2 className="text-base text-center text-gray-prize-2">Support</h2>
                <h2 className="text-base text-center text-gray-prize-2">Contact</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './common/globalstyle';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import UserList from './components/UserList/UserList';
import PointStatus from './components/PointStatus/PointStatus';
import HWSetting from './components/HWSetting/HWSetting';
import PointSet from './components/PointSet/PointSet';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/user-list" element={<UserList />} />
          <Route path="/point-status" element={<PointStatus />} />
          <Route path="/hw-setting" element={<HWSetting />} />
          <Route path="/point-set" element={<PointSet />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

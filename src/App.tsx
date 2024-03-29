import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavMenu from './Components/Pages/NavMenu/NavMenu';
import PageNotFound from './Components/404Error/PageNotFound';
import Table from './Components/Pages/Table/Table';
import Teams from './Components/Pages/Teams/Teams';
import Players from './Components/Pages/Players/Players';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navmenu" element={<NavMenu />} />
        <Route path="/table" element={<Table />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

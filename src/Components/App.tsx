import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import Main from './Main';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

function App() {
  const { authStatus } = useSelector((state: RootState) => state.auth);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      <Routes>
        <Route path="/" element={authStatus ? <Main /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import InitiativePage from './features/initiative/InitiativePage';
import HomePage from './features/home/HomePage';
import ReputationPage from './features/reputation/ReputationPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="initiative-tracker" element={<InitiativePage />} />
        <Route path="reputation-tracker" element={<ReputationPage />} />
    </Routes>
  );
};

export default AppRouter;

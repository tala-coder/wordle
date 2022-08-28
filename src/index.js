import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext'; 
import PozoviPrijatelja from './components/PozoviPrijatelja';
import IgrajSPrijateljem from './components/IgrajSPrijateljem';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PozoviPrijatelja />} />
          <Route path="/zahtjev" element={<IgrajSPrijateljem />} />
          <Route path="/game" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </DataProvider>
);

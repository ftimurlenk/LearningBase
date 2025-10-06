
import React, { useState } from 'react';
import './App.css';

import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { rainbowkitConfig } from './web3';

import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import BottomNav from './layouts/BottomNav';

const App: React.FC = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={rainbowkitConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
            </Routes>
            <BottomNav />
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;

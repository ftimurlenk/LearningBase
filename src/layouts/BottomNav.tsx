
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <span role="img" aria-label="Home">🏠</span>
        <span>Home</span>
      </Link>
      <Link to="/achievements" className={`nav-item ${location.pathname === '/achievements' ? 'active' : ''}`}>
        <span role="img" aria-label="Achievements">🏆</span>
        <span>Achievements</span>
      </Link>
      <Link to="/leaderboard" className={`nav-item ${location.pathname === '/leaderboard' ? 'active' : ''}`}>
        <span role="img" aria-label="Leaderboard">📊</span>
        <span>Leaderboard</span>
      </Link>
      <Link to="/courses" className={`nav-item ${location.pathname === '/courses' ? 'active' : ''}`}>
        <span role="img" aria-label="Courses">📚</span>
        <span>Courses</span>
      </Link>
    </nav>
  );
};

export default BottomNav;

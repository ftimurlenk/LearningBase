
import React from 'react';
import './StreakTracker.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface StreakTrackerProps {
  streak: number;
}

const StreakTracker: React.FC<StreakTrackerProps> = ({ streak }) => {
  return (
    <div className="streak-tracker">
      <h3>7-Day Streak</h3>
      <div className="streak-days">
        {days.map((day, index) => (
          <div
            key={day}
            className={`streak-day ${index < streak ? 'active' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreakTracker;


import React from 'react';
import './XPDisplay.css';

interface XPDisplayProps {
  xp: number;
  level: number;
  xpProgress: number;
  xpForNextLevel: number;
}

const XPDisplay: React.FC<XPDisplayProps> = ({ xp, level, xpProgress, xpForNextLevel }) => {
  const progressPercentage = (xpProgress / xpForNextLevel) * 100;

  return (
    <div className="xp-display">
      <div className="xp-level-info">
        <h2>Level {level}</h2>
        <p>{xp} Total XP</p>
      </div>
      <div className="xp-progress-bar-container">
        <div className="xp-progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p className="xp-to-next-level">{xpForNextLevel - xpProgress} XP to next level</p>
    </div>
  );
};

export default XPDisplay;

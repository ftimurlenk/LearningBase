
import React from 'react';
import './QuestItem.css';

interface QuestItemProps {
  title: string;
  xp: number;
  progress: number;
}

const QuestItem: React.FC<QuestItemProps> = ({ title, xp, progress }) => {
  return (
    <div className="quest-item">
      <div className="quest-info">
        <h3>{title}</h3>
        <p>{xp} XP</p>
      </div>
      <div className="quest-progress">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default QuestItem;

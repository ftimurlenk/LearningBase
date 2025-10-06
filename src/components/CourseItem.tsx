
import React from 'react';
import './CourseItem.css';

interface CourseItemProps {
  title: string;
  description: string;
  xpReward: number;
}

const CourseItem: React.FC<CourseItemProps> = ({ title, description, xpReward }) => {
  return (
    <div className="course-item">
      <div className="course-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="course-xp-reward">
        <span>{xpReward} XP</span>
      </div>
    </div>
  );
};

export default CourseItem;

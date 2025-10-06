
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseItem from '../components/CourseItem';
import './Courses.css';

const coursesData = [
  {
    id: 'base-network-101',
    title: 'Base Network 101',
    description: 'Learn the fundamentals of Base Network, its architecture, and how it fits into the Ethereum ecosystem.',
    xpReward: 1000,
  },
  {
    id: 'solidity-101',
    title: 'Solidity 101',
    description: 'An introductory course to Solidity programming language for smart contract development on EVM chains.',
    xpReward: 1500,
  },
  {
    id: 'web3-dapp-development',
    title: 'Web3 dApp Development',
    description: 'Build your first decentralized application (dApp) using React, Ethers.js, and smart contracts.',
    xpReward: 2000,
  },
  {
    id: 'farcaster-integration',
    title: 'Farcaster Integration',
    description: 'Integrate your dApp with Farcaster, the decentralized social network, to leverage social features.',
    xpReward: 1200,
  },
];

const Courses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="courses-container">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h1>Courses</h1>
      <div className="courses-list">
        {coursesData.map((course) => (
          <CourseItem
            key={course.id}
            title={course.title}
            description={course.description}
            xpReward={course.xpReward}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;

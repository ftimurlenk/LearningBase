
import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './Dashboard.css';
import XPDisplay from '../components/XPDisplay';
import StreakTracker from '../components/StreakTracker';
import QuestItem from '../components/QuestItem';
import BottomNav from '../layouts/BottomNav';
import QuestModal from '../components/QuestModal';

const questData = {
  'learn-solidity': {
    title: 'Learn Solidity',
    reading: 'Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs that control the behavior of accounts within the Ethereum state. Solidity is a curly-bracket language and has been influenced by C++, Python and JavaScript.',
    quiz: [
      { question: 'What is Solidity?', options: ['A programming language', 'A cryptocurrency', 'A blockchain'], answer: 'A programming language' },
      { question: 'What are smart contracts?', options: ['Programs on blockchain', 'Legal documents', 'Financial instruments'], answer: 'Programs on blockchain' },
    ],
  },
  'react-web3-integration': {
    title: 'React + Web3 Integration',
    reading: 'Integrating Web3 with React involves using libraries like Ethers.js or Web3.js to interact with the Ethereum blockchain. This allows your React application to connect to user wallets, send transactions, and read data from smart contracts.',
    quiz: [
      { question: 'Which library is used for Web3 integration in React?', options: ['React.js', 'Ethers.js', 'Node.js'], answer: 'Ethers.js' },
      { question: 'What does Web3 integration allow?', options: ['Connect to wallets', 'Create websites', 'Design UIs'], answer: 'Connect to wallets' },
    ],
  },
  'deploy-to-base-network': {
    title: 'Deploy to Base Network',
    reading: 'Deploying smart contracts to Base Network involves compiling your Solidity code and then using a deployment script with a tool like Hardhat or Foundry. You will need to configure your deployment script to connect to the Base Sepolia or Base Mainnet RPC endpoint.',
    quiz: [
      { question: 'What tool is used for deploying smart contracts?', options: ['Vite', 'Hardhat', 'React'], answer: 'Hardhat' },
      { question: 'What is needed to connect to Base Network?', options: ['RPC endpoint', 'API key', 'Wallet address'], answer: 'RPC endpoint' },
    ],
  },
};

const Dashboard: React.FC = () => {
  const [xp, setXp] = useState(1250);
  const [streak, setStreak] = useState(3);
  const [showQuestModal, setShowQuestModal] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState<any>(null);

  const calculateLevel = (currentXp: number) => {
    const level = Math.floor(Math.sqrt(currentXp / 100));
    const xpForCurrentLevel = level * level * 100;
    const xpForNextLevel = (level + 1) * (level + 1) * 100;
    const xpProgress = currentXp - xpForCurrentLevel;
    const xpToNextLevel = xpForNextLevel - currentXp;
    return { level, xpProgress, xpToNextLevel, xpForNextLevel };
  };

  const { level, xpProgress, xpToNextLevel, xpForNextLevel } = calculateLevel(xp);

  const handleCheckIn = () => {
    setXp(xp + 10);
    if (streak < 7) {
      setStreak(streak + 1);
    }
  };

  const handleQuestComplete = (earnedXp: number) => {
    setXp(xp + earnedXp);
    setShowQuestModal(false);
  };

  const quests = [
    { id: 'learn-solidity', title: 'Learn Solidity', xp: 500, progress: 50 },
    { id: 'react-web3-integration', title: 'React + Web3 Integration', xp: 750, progress: 25 },
    { id: 'deploy-to-base-network', title: 'Deploy to Base Network', xp: 1000, progress: 10 },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>LearningBase</h1>
        <ConnectButton showBalance={false} />
      </header>

      <main className="dashboard-content">
        <XPDisplay xp={xp} level={level} xpProgress={xpProgress} xpForNextLevel={xpForNextLevel} />
        <StreakTracker streak={streak} />

        <div className="check-in-section">
          <button className="check-in-button" onClick={handleCheckIn}>
            Daily Check-in
          </button>
        </div>

        <div className="quests-section">
          <h2>Daily Quests</h2>
          {quests.map((quest) => (
            <div key={quest.id} onClick={() => handleQuestClick(quest.id)}>
              <QuestItem
                title={quest.title}
                xp={quest.xp}
                progress={quest.progress}
              />
            </div>
          ))}
        </div>
      </main>

      <BottomNav />

      {showQuestModal && selectedQuest && (
        <QuestModal
          quest={selectedQuest}
          onClose={() => setShowQuestModal(false)}
          onComplete={handleQuestComplete}
        />
      )}
    </div>
  );
};

export default Dashboard;

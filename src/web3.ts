
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia } from 'viem/chains';

export const rainbowkitConfig = getDefaultConfig({
  appName: 'LearningBase',
  projectId: '74a82ff24fefa8bc0bcabb2aaaed3006', // Your WalletConnect Project ID
  chains: [baseSepolia],
  ssr: true,
});

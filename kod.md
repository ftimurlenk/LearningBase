# 🚀 Project Prompt: LearningBase — Base Network Learn2Earn dApp

## 🧩 Project Overview
**LearningBase** is a Web3 Learn2Earn dApp built on **Base Network**.
Users learn about the Base ecosystem, complete quizzes, and earn on-chain XP.
The application uses **Coinbase OnchainKit**, **Base Sepolia**, and **React (Vite)**.

The frontend must be **mobile-first**, sleek, and space-themed with Base blue color tones.

---

## 🧱 Core Features
1. **Wallet Integration**
   - Use `@coinbase/onchainkit`
   - Include `<OnchainKitProvider>` and `<ConnectWallet />`
   - Support Base Mainnet & Base Sepolia
   - `.env` should contain `VITE_COINBASE_ONCHAINKIT_API_KEY`

2. **User Dashboard**
   - Display XP and Streak progress
   - Show 7-day streak visual (Mon–Sun)
   - “Check-in” button for daily XP/streak tracking
   - Quests section with progress + XP rewards
   - Example quests:
     - Learn Solidity
     - React + Web3 Integration
     - Deploy to Base Network

3. **Learn2Earn Flow**
   - Each quest can trigger a short quiz (TBD)
   - Upon completion, XP is increased
   - Smart contract (future scope) will store XP on-chain

4. **Navigation**
   - Bottom nav bar with icons:
     - 🏠 Home
     - 🏆 Achievements
     - 📊 Leaderboard

5. **UI / UX**
   - Space-themed dark background (Base blue gradient)
   - Rounded UI, glowing buttons
   - Smooth mobile responsiveness (420px base layout)
   - No Tailwind — use plain CSS or CSS Modules

---

## 🧰 Tech Stack
- **Frontend Framework:** React (Vite)
- **Web3 Library:** `@coinbase/onchainkit`
- **Language:** TypeScript
- **Chain:** Base Sepolia / Mainnet
- **Styling:** Vanilla CSS
- **Package Manager:** npm
- **Environment File:** `.env` for API key

---

## 🧩 Folder Structure Example
```
LearningBase/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Dashboard.css
├── .env.example
├── vite.config.ts
├── package.json
```

---

## 🧠 Implementation Requirements

### 1. `App.tsx`
Wrap entire app inside:
```tsx
<OnchainKitProvider
  chain="base-sepolia"
  appName="LearningBase"
  apiKey={import.meta.env.VITE_COINBASE_ONCHAINKIT_API_KEY}
>
  <Dashboard />
</OnchainKitProvider>
```

### 2. `Dashboard.tsx`
Include:
```tsx
import { ConnectWallet } from "@coinbase/onchainkit";
```
Show:
- Wallet connect button (top-right)
- XP and streak values
- Quest list
- Daily check-in logic

### 3. Styling
- Gradients: `linear-gradient(90deg, #0052ff, #00bfff)`
- Shadows: `rgba(0, 82, 255, 0.15)`
- Fonts: Inter, system-ui fallback
- Rounded corners: 12–16px

---

## ⚙️ Installation Instructions
```bash
npm install --legacy-peer-deps
npm run dev
```

Ensure `.env` file:
```
VITE_COINBASE_ONCHAINKIT_API_KEY=your_api_key_here
```

---

## 🧪 Future Extensions
- Smart contract for XP registry
- Quiz logic stored on-chain
- Farcaster integration (Base social)
- Leaderboard from BaseScan API
- NFT badge mint for XP milestones

---

## ✅ Deliverables
- Fully functional React (Vite) project
- Base Sepolia wallet integration via OnchainKit
- Clean UI/UX following Base design guidelines
- Working check-in + quest system
- Responsive mobile interface

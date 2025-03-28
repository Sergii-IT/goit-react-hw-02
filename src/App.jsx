import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import user from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

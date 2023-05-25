import React from 'react';
import {Profile} from "./Profile/Profile.js";
import user from "../data/user.json";
import {Statistics} from "./Statistics/Statistics.js";
import data from "../data/data.json";
import {FriendList} from "./FriendList/FriendListItem.js";
import friends from "../data/friends.json";
import {transactions} from "./TransactionHistory/TransactionHistory.js";
import TransactionHistory from "../data/transactions.json";


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Statistics</h1>
      <Statistics title="Upload stats" stats={data} />

      <h2>My Friends</h2>
      <FriendList friends={friends} />

      <div>
        <h3>Transaction History</h3>
        <TransactionHistory items={transactions} />
      </div>
    </div>
    
  );
};

 
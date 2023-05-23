import React from 'react';
import {Profile} from "./Profile/Profile.js";
import user from "../data/user.json";
import {Statistics} from "./Statistics/Statistics.js";
import data from "../data/data.json";


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
    </div>
  );
};

 
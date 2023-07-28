import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));

    // Retrieve enlisted bots from local storage on page load
    const storedBotArmy = JSON.parse(localStorage.getItem('botArmy'));
    if (storedBotArmy) {
      setMyBotArmy(storedBotArmy);
    }
  }, []);

  const enlistBot = (botId) => {
    const selectedBot = bots.find((bot) => bot.id === botId);
    if (!myBotArmy.some((bot) => bot.id === botId)) {
      const updatedBotArmy = [...myBotArmy, selectedBot];
      setMyBotArmy(updatedBotArmy);
      // Save enlisted bots to local storage
      localStorage.setItem('botArmy', JSON.stringify(updatedBotArmy));
    }
  };

  const dischargeBot = (botId) => {
    const updatedBotArmy = myBotArmy.filter((bot) => bot.id !== botId);
    setMyBotArmy(updatedBotArmy);
    // Save enlisted bots to local storage
    localStorage.setItem('botArmy', JSON.stringify(updatedBotArmy));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className="container">
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <MyBotArmy bots={myBotArmy} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
};

export default App;

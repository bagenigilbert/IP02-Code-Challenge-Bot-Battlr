// src/components/BotCollection.js
import React, { useState } from 'react';
import MyBotCard from './MyBotCard';
import BotSpecs from './BotSpecs';

const BotCollection = ({ bots, enlistBot }) => {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToCollection = () => {
    setSelectedBot(null);
  };

  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBack={handleBackToCollection} enlistBot={enlistBot} />
      ) : (
        bots.map((bot) => (
          <MyBotCard key={bot.id} bot={bot} actionLabel="Enlist" actionHandler={() => handleBotClick(bot)} />
        ))
      )}
    </div>
  );
};

export default BotCollection;

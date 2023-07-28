import React from 'react';
import MyBotCard from './MyBotCard';

// This function will show all the robots in our big box!
 const BotCollection = ({bots, enlistBot})=>{
   return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      {bots.map((bot)=>(
      <MyBotCard key={bot.id} bot={bot} actionLabel="Enlist" actionHandler={() => enlistBot(bot.id)} />

      ))}

    </div>
   )
 }
export default BotCollection;
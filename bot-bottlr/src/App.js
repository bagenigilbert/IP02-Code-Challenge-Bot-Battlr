import React, { useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';
import './App.css';
const App=()=>{
  const [bots, setBots]=useState([]);
  const [MyBotArmy, setMyBotArmy]=useState([])

  useEffect(() => {
    // Fetch data from the server and set it in the state
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
 const enlistBot =(botId)=>{
   // Find the selected bot by id from the 'bots' array
   const selectedBot = bots.find((bot)=>bot.id ===botId)
      // Check if the bot is already enlisted
      if(!MyBotArmy.some((bot)=>bot.id ===botId)){
        setMyBotArmy([...MyBotArmy,selectedBot]);
       }
      };
      const dischargeBot = (botId)=>{
        const updatedBotArmy =MyBotArmy.filter((bot)=>bot.id !==botId);
        setMyBotArmy(updatedBotArmy)
      }
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className='container'>
        <BotCollection bots={bots} enlistBot={enlistBot}/>
        <MyBotArmy  bots={MyBotArmy} dischargeBot={dischargeBot}/>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]); // Renamed the state variable to 'myBotArmy'
  useEffect(() => {
    // Fetch data from the server and set it in the state
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  // The 'enlistBot' action makes sure the same robot isn't added twice to your team.
  const enlistBot = (botId) => {
    // We look at all the robots in the 'bots' box and find the one you clicked on by using its unique 'id'.
    const selectedBot = bots.find((bot) => bot.id === botId);
    // Now, we check if this robot is already in your team. If not, put it in the 'MyBotArmy' box.
    if (!myBotArmy.some((bot) => bot.id === botId)) {
      setMyBotArmy([...myBotArmy, selectedBot]);
       }
      };
        // The 'dischargeBot' action removes the robot from your team if you click on it again.
        const dischargeBot = (botId) => {
          // We look at all the robots in your team and filter out the one you clicked on using its 'id'.
          const updatedBotArmy = myBotArmy.filter((bot) => bot.id !== botId);
          // Now, we put the new team without the robot back into the 'MyBotArmy' box.
          setMyBotArmy(updatedBotArmy);
        }
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
            {/* Inside 'App', we have another box called 'container'. */}
      <div className="container">
        {/* Inside the 'container', we have two special boxes: 'BotCollection' and 'MyBotArmy'. */}
        {/* The 'BotCollection' box shows all the robots, and when you click on one, it gets enlisted into my team. */}
        {/* The 'MyBotArmy' box shows the robots you picked for my team. When you click on a robot here, it gets discharged. */}
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <MyBotArmy bots={myBotArmy} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
}

export default App;

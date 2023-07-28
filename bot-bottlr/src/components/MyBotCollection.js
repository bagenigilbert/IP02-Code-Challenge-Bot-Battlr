import { useEffect, useState } from "react";
import "./BotCollection.css"; // Import the CSS file

const BotCollection =()=>{
  const[bots , setBots] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8001/bots')
    .then((res)=>res.json())
    .then((data)=>setBots(data))
    .catch((error)=>console.error('Error fetching data',error));
  }, [])
  return (
    <div>
        {bots.map((bot)=>(
            <div key={bot.id} className="bot-card">
                <img src={bot.avatar_url} alt={`Avater of ${bot.name}`} />
                <h3>{bot.name}</h3>
                <p>Health:{bot.health}</p>
                <p>Damage:{bot.damage}</p>
                <p>Armor:{bot.armor}</p>
                <p>Class:{bot.bot_class}</p>
                <p>Catchphrase:{bot.catchphrase}</p>
                <p>Created at:{bot.created_at}</p>
                <p>Update at{bot.updated_at}</p>
            </div>
        ))}
    </div>
  )
}
export default BotCollection;
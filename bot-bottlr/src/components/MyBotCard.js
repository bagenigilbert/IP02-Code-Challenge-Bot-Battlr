import React from "react";
const MyBotCard=({bot, actionLabel, actionHandler})=>{
    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

    return(
        <div className="bot-card">
            <img src="{avatar_url}" alt="{name}" />
            <h3>{name}</h3>
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
            <p>Armor: {armor}</p>
            <p>Class: {bot_class}</p>





        </div>
    )

}
export default MyBotCard;
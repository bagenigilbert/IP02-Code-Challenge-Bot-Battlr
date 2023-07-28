import React from "react";

const MyBotCard = ({ bot, actionLabel, actionHandler }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  const getCatchphrase = () => {
    const phrases = catchphrase.split('|'); // Split catchphrases using '|'
    return phrases[Math.floor(Math.random() * phrases.length)]; // Choose a random catchphrase
  };

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p className="catchphrase">{getCatchphrase()}</p>
      <button onClick={actionHandler}>{actionLabel}</button>
    </div>
  );
};

export default MyBotCard;

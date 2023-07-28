import { useEffect, useState } from "react";

const BotCollection =()=>{
  const[bots , setBots] = useEffect([]);

  useEffect(()=>{
    fetch('http://localhost:8001/bots')
    .then((res)=>res.json())
    .then((data)=>setBots)
  })
}
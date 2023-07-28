import React from "react";
const MyBotCard=({bot, actionLabel, actionHandler})=>{
    return(
        <div className="bot-card">
            <img src="{avatar_url}" alt="{name}" />

        </div>
    )

}
export default MyBotCard;
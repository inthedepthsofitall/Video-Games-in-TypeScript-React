const a=t=>t.challengeCounter>0?!1:Object.values(t.diceCount).some(e=>e<=0),o=t=>Object.entries(t.diceCount).reduce((e,[r,n])=>{const l=n<=0?"WON":"LOST";return e[r]=l,e},{});Rune.initLogic({minPlayers:2,maxPlayers:4,setup:t=>{const e=Object.fromEntries(t.map(r=>[r,5]));return{gameDice:[],diceCount:e,currentPlayerIndex:0,previousPlayerIndex:-1,selectedPlayerId:"",challengeCounter:0,challengeStatus:!1,playerToRoll:!0,playerPlaying:!1,gameOver:!1,showHelp:!1}},actions:{updateDiceCount:({playerId:t,amount:e},{game:r})=>{if(t===void 0)t="spectator";else if(r.diceCount[t]===void 0)throw Rune.invalidAction();r.diceCount[t]+=e,a(r)&&Rune.gameOver({players:o(r)})},updateChallengeCount:({amount:t},{game:e})=>{e.challengeCounter+=t},updateChallengeStatus:({status:t},{game:e})=>{e.challengeStatus=t},rollDice:({numDice:t},{game:e})=>{e.gameDice=Array.from({length:t},()=>Math.floor(Math.random()*6)+1),e.playerToRoll=!1,e.playerPlaying=!0},nextPlayer:({nextIndex:t},{game:e})=>{e.gameOver||(e.previousPlayerIndex=e.currentPlayerIndex,e.currentPlayerIndex=t,e.playerToRoll=!0,e.playerPlaying=!1,e.gameDice=[])},adjustGameDice:({index:t},{game:e})=>{e.gameDice.splice(t,1)},setPreviousPlayer:({playerIndex:t},{game:e})=>{e.previousPlayerIndex=t},setSelectedPlayerId:({playerId:t},{game:e})=>{e.selectedPlayerId=t}},events:{playerJoined:(t,{game:e})=>{e.diceCount[t]=5},playerLeft(t,{game:e}){delete e.diceCount[t]}}});

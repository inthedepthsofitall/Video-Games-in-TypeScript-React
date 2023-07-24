import React from "react";
import './GameZone.css'
import Dice from "./Dice";
import { GameState } from "../logic.ts"
import { motion } from "framer-motion"

interface GameZoneProps {
    numPlayers: number,
    playerIds: string[],
    game: GameState,
    players: Record<string, any>,
    yourPlayerId: string,
}

const GameZone: React.FC<GameZoneProps> = ({game: game, players: players, yourPlayerId: yourPlayerId})=> {


    const playerIds = Object.keys(players)
    const numPlayers = playerIds.length

    


    return (
        <div className='game-play-container'>
            
            <div className="container">
                <motion.b transition={{ duration: 1.2 }} animate={{y:20}} initial={{y:-150}}   className='player-gameboard-title'>{`${players[yourPlayerId].displayName}'s Game Board`}</motion.b>
                    
                <div className='top-section'>

                   

                        {/* <motion.div  transition={{ duration: 1 }} animate={{x:0}} initial={{x:-150}}   className= { `${playerIds[0] === yourPlayerId ? 'red-border' : ''}player`}>
                        <div className='player-1-name player-flex'>
                        <b>   {players[playerIds[0]].displayName} <br/> {game?.diceCount[playerIds[0]]}</b>
                        </div>                            
                        
                        </motion.div>
                    */}
                        <motion.div
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      initial={{ x: 150 }}
      className={`${playerIds[1] === yourPlayerId ? 'red-border' : ''} player-section`}
    >
      {numPlayers > 1 ? (
        <div>
          <div className='player-2-name player-flex'>
            <b>{players[playerIds[1]].displayName}: {game?.diceCount[playerIds[1]]}</b>
          </div>
        </div>
      ) : (
        <div className='player-2-name player-flex'>
          <b>Waiting for player 2</b>
        </div>
      )}
    </motion.div>


                    

                        {/* <motion.div transition={{ duration: 1 }} animate={{x:0}} initial={{x:150}}    className={`${playerIds[1] === yourPlayerId ? 'red-border' : ''}player-section`}>
                            {numPlayers > 1 ? (

                                <div>
                                    

                                <div className='player-2-name player-flex'>
                                   <b>{players[playerIds[1]].displayName}: {game?.diceCount[playerIds[1]]}</b>

                                </div>
                                ) : (
                                <div className='player-2-name player-flex'>
                                   <b>Waiting for player 2</b> 
                                </div>
                            )}
                        </motion.div>
                     */}
                    <motion.div
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      initial={{ x: 150 }}
      className={`${playerIds[1] === yourPlayerId ? 'red-border' : ''} player-section`}
    >
      {numPlayers > 1 ? (
        <div>
          <div className='player-2-name player-flex'>
            <b>{players[playerIds[1]].displayName}: {game?.diceCount[playerIds[1]]}</b>
          </div>
        </div>
      ) : (
        <div className='player-2-name player-flex'>
          <b>Waiting for player 2</b>
        </div>
      )}
    </motion.div>


                </div>      


                <div className='middle-section'>
                    


                    <div className='player-name'>
                     
                        {`${players[playerIds[game.currentPlayerIndex]].displayName}'s Turn`}
                        </div>
                           

               
                    {/*                     <div className='dice-container'>
                    {game.gameDice.map((die, i )=>(
                        <motion.button transition={{ duration: 1.3 }} animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            
                          }} className='dice-button' key={i} value={i} onClick={()=>{handleRoll(yourPlayerId, i)}}><Dice key={i} faceValue={die} /></motion.button>
                    ))}
                    </div>
                     */}
                        <div className='dice-container'>
                        {/* {game.diceArrays[yourPlayerId].map((die, i )=>(
                            <motion.button transition={{ duration: 1.3 }} animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                
                            }} className='dice-button' key={i} value={i} onClick={()=>{handleRoll(yourPlayerId, i)}}><Dice faceValue={die} /></motion.button>))} */}

                            <div className='roll-dice-button-container'>
                                <div className="bottom-row grid-item">{yourPlayerId ? (
                                <>
                                
                                    {/* {(game.currentPlayerIndex===Object.keys(players).indexOf(yourPlayerId)) &&
                                        <div>
                                            <motion.button className='handleRoll-button' whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }} onClick={()=>{handleRollAll(yourPlayerId)}}>Roll Dice</motion.button>
                                        </div>
                                    } */}
                            
                                </>
                            ) : (
                                <>I am a spectator, so I don't have count</>
                            )}</div>

             
                            </div>
                        </div>
                        
                    
                </div>



                

                    
             
               

                <div className='bottom-section'>

                <motion.div  transition={{ duration: 1 }} animate={{x:0}} initial={{x:-150}}className={` ${playerIds[2] === yourPlayerId ? 'red-border' : ''}`}>
                    {numPlayers > 2 ? (

                        <div className=' player-flex player-3-name'>
                            <b>{players[playerIds[1]].displayName}: {game?.diceCount[playerIds[1]]}</b>

                        </div>
                    ) : (
                        <div className="player-3-name player-flex">
                            <b>Waiting for player 3</b>
                        </div>
                    )}
                </motion.div>


                <motion.div  transition={{ duration: 1 }} animate={{x:0}} initial={{x:150}} className={` ${playerIds[3] === yourPlayerId ? 'red-border' : ''}`}>
                    {numPlayers > 3 ? (

                        <div className='player-flex player-4-name'>
                           <b>{players[playerIds[1]].displayName}: {game?.diceCount[playerIds[1]]}</b>
                        </div>
                    ) : (
                        <div className='player-flex player-4-name'>

                           <b> Waiting for player 4</b>
                        </div>
                    )}
                </motion.div>

                    
                </div>
                <div className="dice-container-parent">
                
     

                        {/*Controls area*/}
                        {/*Roll Dice, Challenge, Give away*/}
                   


                    
                </div>
        
            </div>                           
        
         </div>

    );
}

export default GameZone;

//grid layout start by ChatGPT
//typescript editing Chat GPT
// Image by <a href="https://www.freepik.com/free-vector/top-view-modern-restaurant-table-with-flat-design_2847028.htm#query=dining%20table%20top%20view&position=9&from_view=keyword&track=ais">Freepik</a>
{/* <a href="https://www.freepik.com/free-photo/faded-gray-wooden-textured-flooring-background_16246476.htm#page=2&query=flooring&position=8&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik */}
{/* <a href="https://www.freepik.com/free-vector/oak-wood-textured-design-background_16339756.htm#page=2&query=flooring&position=31&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik */}
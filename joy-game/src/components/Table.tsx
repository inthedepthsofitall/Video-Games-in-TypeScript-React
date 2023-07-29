//import {motion} from "framer-motion";
import React from "react";
import Dice from "./Dice.tsx";
import { GameState } from "../logic.ts";
import "./Table.css";

interface TableProps {
  game: GameState;
}

const Table: React.FC<TableProps> = ({ game }) => (
  <div className="middle-section">
    <div className="dice-container">
      {game.gameDice.map((die, i) => (
        <div key={i} className="dice-button">
          <Dice faceValue={die} />
        </div>
      ))}
    </div>
  </div>
);

export default Table;

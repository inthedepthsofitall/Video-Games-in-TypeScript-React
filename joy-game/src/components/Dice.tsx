import React from 'react';
import { motion } from 'framer-motion';
import './Dice.css';
import dice1 from '../assets/pngs/dice1.png';
import dice2 from '../assets/pngs/dice2.png';
import dice3 from '../assets/pngs/dice3.png';
import dice4 from '../assets/pngs/dice4.png';
import dice5 from '../assets/pngs/dice5.png';
import dice6 from '../assets/pngs/dice6.png';

interface DiceProps {
  faceValue: number;
}

const Dice: React.FC<DiceProps> = ({ faceValue }) => {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  // Rotation for each dice face based on the index (0 to 5)
  const rotations = [0, -90, 180, -270, 360, -450];

  return (
    <motion.div
      className={`dice dice-${faceValue}`}
      initial={{ rotate: 0 }}
      animate={{
        rotate: rotations[faceValue - 1],
        transition: { duration: 1.5 },
      }}
    >
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`side side-${i + 1}`}>
          <div className="img-container">
            <img src={dices[i]} alt={`Dice ${i + 1}`} />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Dice;

// import React from 'react';
// import {motion} from "framer-motion";

// import "./Dice.css"
// import dice1 from "../assets/pngs/dice1.png"
// import dice2 from "../assets/pngs/dice2.png"
// import dice3 from "../assets/pngs/dice3.png"
// import dice4 from "../assets/pngs/dice4.png"
// import dice5 from "../assets/pngs/dice5.png"
// import dice6 from "../assets/pngs/dice6.png"


// interface DiceProps {
//   faceValue: number;
// }

// const Dice: React.FC<DiceProps> = ({ faceValue }) => {

//   const dices = [dice1,dice2,dice3,dice4,dice5,dice6]


//   return (
//     <>

//         <motion.div  transition={{ duration: 1.3 }} animate={{
//           scale: [1, 2, 2, 1, 1],
//           rotate: [0, 0, 270, 270, 0],

//         }} key={faceValue} className='img-container'>
//             <img  src={dices[faceValue-1]}></img>
//         </motion.div>





//     </>
//   )
// };

// export default Dice;

// // file composed by chatgpt; inserted by euphina

// import React from 'react';
// import { motion } from 'framer-motion';
// import './Dice.css';
// import dice1 from '../assets/pngs/dice1.png';
// import dice2 from '../assets/pngs/dice2.png';
// import dice3 from '../assets/pngs/dice3.png';
// import dice4 from '../assets/pngs/dice4.png';
// import dice5 from '../assets/pngs/dice5.png';
// import dice6 from '../assets/pngs/dice6.png';

// interface DiceProps {
//   faceValue: number;
// }

// const Dice: React.FC<DiceProps> = ({ faceValue }) => {
//   const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

//   // Rotation for each dice face based on the index (0 to 5)
//   const rotations = [0, -90, 180, -270, 360, -450];

//   return (
//     <motion.div
//       className={`dice dice-${faceValue}`}
//       initial={{ rotateX: 0, rotateY: 0 }}
//       animate={{
//         rotateX: rotations[faceValue - 1],
//         rotateY: rotations[faceValue - 1],
//         transition: { duration: 1.5 },
//       }}
//     >
//       {[...Array(6)].map((_, i) => (
//         <div key={i} className={`side side-${i + 1}`}>
//           <div className="img-container">
//             <img src={dices[i]} alt={`Dice ${i + 1}`} />
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default Dice;


import React from 'react';
import { motion } from 'framer-motion';
import './Dice.css';
import dice1 from '../assets/pngs/dice1.png';
import dice2 from '../assets/pngs/dice2.png';
import dice3 from '../assets/pngs/table.png';
import dice4 from '../assets/pngs/table1.png';
import dice5 from '../assets/pngs/dice5.png';
import dice6 from '../assets/pngs/dice6.png';

interface DiceProps {
  faceValue: number;
}

const Dice: React.FC<DiceProps> = ({ faceValue }) => {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  // Rotation and position for each dice face based on the index (0 to 5)
  const sides: { rotation: string; x: string; y: string }[] = [
    { rotation: 'rotateY(0deg) translateZ(50px)', x: '0', y: '0' },
    { rotation: 'rotateX(90deg) translateZ(50px)', x: '0', y: '50px' },
    { rotation: 'rotateX(-90deg) translateZ(50px)', x: '0', y: '-50px' },
    { rotation: 'rotateY(90deg) translateZ(50px)', x: '-50px', y: '0' },
    { rotation: 'rotateY(-90deg) translateZ(50px)', x: '50px', y: '0' },
    { rotation: 'rotateX(180deg) translateZ(50px)', x: '0', y: '0' },
  ];

  return (
    <motion.div className={`dice dice-${faceValue}`}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`side side-${i + 1}`}
          style={{
            background: `url(${dices[i]}) no-repeat`,
            backgroundSize: 'cover',
            transform: sides[i].rotation,
            top: sides[i].y,
            left: sides[i].x,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Dice;
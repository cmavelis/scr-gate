// import './scrabble.scss';
//
// import React from 'react';
// import LetterBonusGroup from './letterBonusGroup';
// import DoubleWord from './doubleWord';
// import TripleWord from './tripleWord';
// import UsedAllTiles from './usedAllTiles';
// import { LETTER_TILE_VALUES } from 'app/shared/util/scrabble.constants';
//
// interface IWordCalculationState {
//   L1: string;
//   L2: string;
//   L3: string;
//   L4: string;
//   L5: string;
//   L6: string;
//   L7: string;
//   L8: string;
//   L9: string;
//   L10: string;
//   L11: string;
//   L12: string;
//   L13: string;
//   L14: string;
//   L15: string;
//   doubleWord: string;
//   tripleWord: string;
//   usedAll: number;
//   score: number;
// }
//
// export default class WordCalculation extends React.Component<{}, IWordCalculationState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       L1: '',
//       L2: '',
//       L3: '',
//       L4: '',
//       L5: '',
//       L6: '',
//       L7: '',
//       L8: '',
//       L9: '',
//       L10: '',
//       L11: '',
//       L12: '',
//       L13: '',
//       L14: '',
//       L15: '',
//       doubleWord: '',
//       tripleWord: '',
//       usedAll: 0,
//       score: 0
//     };
//   }
//
//   updateScore = () => {
//     const score = this.calculateNewScore();
//     this.setState({ score });
//   };
//
//   setLetter = (letter, changes) => {
//     this.setState({ [letter]: changes } as any, this.updateScore);
//   };
//
//   setWord = (modifier, changes) => {
//     this.setState({ [modifier]: changes } as any, this.updateScore);
//   };
//
//   calculateNewScore = () => {
//     let score = 0;
//     const arr = [
//       this.state.L1,
//       this.state.L2,
//       this.state.L3,
//       this.state.L4,
//       this.state.L5,
//       this.state.L6,
//       this.state.L7,
//       this.state.L8,
//       this.state.L9,
//       this.state.L10,
//       this.state.L11,
//       this.state.L12,
//       this.state.L13,
//       this.state.L14,
//       this.state.L15
//     ];
//     arr.map(letterEntry => {
//       if (letterEntry.length > 3) {
//         const parts = letterEntry.split('-');
//         score += LETTER_TILE_VALUES[parts[0].toUpperCase()] * this.modifierSwitchLetter(parts[1]);
//       }
//     });
//     return score * this.modifierSwitchDoubleWord() * this.modifierSwitchTripleWord() + this.state.usedAll;
//   };
//
//   modifierSwitchLetter = modifier => {
//     switch (modifier) {
//       case 'no':
//         return 1;
//       case '2x':
//         return 2;
//       case '3x':
//         return 3;
//       case '0x':
//         return 0;
//       default:
//         return 1;
//     }
//   };
//
//   modifierSwitchDoubleWord = () => {
//     switch (this.state.doubleWord) {
//       case '1w':
//         return 1;
//       case '2w':
//         return 2;
//       case '4w':
//         return 4;
//       default:
//         return 1;
//     }
//   };
//
//   modifierSwitchTripleWord = () => {
//     switch (this.state.tripleWord) {
//       case '1w':
//         return 1;
//       case '3w':
//         return 3;
//       case '9w':
//         return 9;
//       case '27w':
//         return 27;
//       default:
//         return 1;
//     }
//   };
//
//   render() {
//     return (
//       <div>
//         Enter your letters:
//         <form onChange={this.updateScore}>
//           <div className="wordRow">
//             <LetterBonusGroup num="1" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="2" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="3" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="4" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="5" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="6" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="7" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="8" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="9" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="10" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="11" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="12" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="13" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="14" setLetterBonus={this.setLetter} />
//             <LetterBonusGroup num="15" setLetterBonus={this.setLetter} />
//           </div>
//           <div className="wordRow">
//             <div className="wordMod">
//               Double Word
//               <DoubleWord setWord={this.setWord} />
//             </div>
//
//             <div className="wordMod">
//               Triple Word
//               <TripleWord setWord={this.setWord} />
//             </div>
//             <div className="wordMod">
//               Used all tiles
//               <UsedAllTiles setWord={this.setWord} />
//             </div>
//           </div>
//         </form>
//         Score: {this.state.score}
//       </div>
//     );
//   }
// }

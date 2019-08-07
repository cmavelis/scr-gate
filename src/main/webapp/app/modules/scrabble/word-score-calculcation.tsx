// import './scrabble.scss';
//
// import React from 'react';
// import DoubleWord from './doubleWord';
// import TripleWord from './tripleWord';
// import UsedAllTiles from './usedAllTiles';
// import { LETTER_TILE_VALUES } from 'app/shared/util/scrabble.constants';
//
// interface IWordCalculationState {
//   wordBonus: number;
//   usedAll: number;
//   score: number;
// }
//
// export default class WordBonusGroup extends React.Component<{}, IWordCalculationState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       wordBonus: 1,
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
//
//     ];
//     arr.map(letterEntry => {
//       if (letterEntry.length > 3) {
//         const parts = letterEntry.split('-');
//         score += LETTER_TILE_VALUES[parts[0].toUpperCase()] * this.modifierSwitchLetter(parts[1]);
//       }
//     });
//     // return score * this.modifierSwitchDoubleWord() * this.modifierSwitchTripleWord() + this.state.usedAll;
//   };
//
//   // modifierSwitchLetter = modifier => {
//   //   switch (modifier) {
//   //     case 'no':
//   //       return 1;
//   //     case '2x':
//   //       return 2;
//   //     case '3x':
//   //       return 3;
//   //     case '0x':
//   //       return 0;
//   //     default:
//   //       return 1;
//   //   }
//   // };
//   //
//   // modifierSwitchDoubleWord = () => {
//   //   switch (this.state.doubleWord) {
//   //     case '1w':
//   //       return 1;
//   //     case '2w':
//   //       return 2;
//   //     case '4w':
//   //       return 4;
//   //     default:
//   //       return 1;
//   //   }
//   // };
//   //
//   // modifierSwitchTripleWord = () => {
//   //   switch (this.state.tripleWord) {
//   //     case '1w':
//   //       return 1;
//   //     case '3w':
//   //       return 3;
//   //     case '9w':
//   //       return 9;
//   //     case '27w':
//   //       return 27;
//   //     default:
//   //       return 1;
//   //   }
//   // };
//
//   render() {
//     return (
//       <div>
//         Enter your letters:
//         <form onChange={this.updateScore}>
//           <div className="wordRow">
//             <div className="wordMod">
//               Double Word
//               {/*<DoubleWord setWord={this.setWord} />*/}
//             </div>
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

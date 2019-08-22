import React from 'react';

const BoardPreview = props => (
  <div className="board-preview">
    <div className="board-preview-grid">
      {props.boardState && props.boardState.split('').map((letter, j) =>
        <div key={`${letter}+${j}`}>
          {letter}
        </div>
      )}
    </div>
  </div>
);

export default BoardPreview;

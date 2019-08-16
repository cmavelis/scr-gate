import React from 'react';
import _ from 'lodash';

export class Board extends React.Component<{}> {

    render() {
      return (
        <div className="board-wrap">
          <div className="grid-container">
          {_.range(225).map(i => (
            <div className={`board-space-${i} board-spaces`}>
              <div className="board-space-text">
                {i}
              </div>
            </div>
            )
            )
          }
          </div>
        </div>
      );
    }
  }

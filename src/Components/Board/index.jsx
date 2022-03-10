import styles from './styles.module.scss';

import Tile from '../Tile';
import { useEffect, useState } from 'react';

import dashboard from '@data/test-board-2.json';

let mockKey = 0;

const Board = () => {
  const [board, setBoard] = useState([]);

  const resetBoard = () => {
    // Optional Random letter on json load;
    // const board = dashboard.board.sort(() => Math.random() - 0.5);

    const board = dashboard.board;
    setBoard(board);
  };

  useEffect(() => {
    resetBoard();
  }, []);

  return (
    <div className={styles.board}>
      {board.map((letter, index) => (
        <Tile key={(mockKey += 1)} value={letter} index={index} />
      ))}
    </div>
  );
};
export default Board;

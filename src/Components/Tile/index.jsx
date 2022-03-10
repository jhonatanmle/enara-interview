import { useContext, useState, useEffect } from 'react';
import { HomeContext } from '@src/Context/home-context';
import { STATE_TEXT } from '@shared/constants';
import styles from './styles.module.scss';

let isFirstMove = true;
let futuresMoves = [];
let historicMoves = [];

const Tile = ({ value, index }) => {
  const { selectedItems, setSelectedItems, stateText, clearBoard, setClearBoard } =
    useContext(HomeContext);
  const [active, setActive] = useState(false);

  const addWord = target => {
    if (!target.classList.contains(styles.active)) {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const existsHistoricMoves = index => historicMoves.some(move => move === index);

  const validateMoves = value => {
    const index = parseInt(value);
    const previous = index - 1;
    const next = index + 1;
    const previousRow = index - 4;
    const nextRow = index + 4;

    console.log('Current index', index);

    if (index < 4) {
      if (!existsHistoricMoves(previous) && index !== 0) {
        futuresMoves.push(previous);
      }

      if (!existsHistoricMoves(next) && index !== 3) {
        futuresMoves.push(next);
      }

      if (!existsHistoricMoves(nextRow)) {
        futuresMoves.push(nextRow);
      }

      return;
    }

    if (index >= 4 && index <= 11) {
      if (!existsHistoricMoves(previous) && index !== 8 && index !== 4) {
        futuresMoves.push(previous);
      }

      if (!existsHistoricMoves(next) && index !== 7 && index !== 11) {
        futuresMoves.push(next);
      }

      if (!existsHistoricMoves(previousRow)) {
        futuresMoves.push(previousRow);
      }

      if (!existsHistoricMoves(nextRow)) {
        futuresMoves.push(nextRow);
      }

      return;
    }

    if (index > 11) {
      if (!existsHistoricMoves(previous) && index !== 12) {
        futuresMoves.push(previous);
      }

      if (!existsHistoricMoves(next) && index !== 15) {
        futuresMoves.push(next);
      }

      if (!existsHistoricMoves(previousRow)) {
        futuresMoves.push(previousRow);
      }

      return;
    }
  };

  const handleClick = event => {
    const { target } = event;

    if (!isFirstMove) {
      if (!futuresMoves.some(move => move === index)) {
        console.log('Movimiento invalido');
        return;
      }

      futuresMoves = [];

      validateMoves(index);
      addWord(target);

      historicMoves.push(index);
      setActive(true);
    } else {
      validateMoves(index);
      addWord(target);

      isFirstMove = false;
      historicMoves.push(index);
      setActive(true);
    }
  };

  const validateItemSelected = () => {
    return active ? styles.active : '';
  };

  const validateInvalidWord = () => {
    return stateText === STATE_TEXT.invalid ? styles.invalid : '';
  };

  const restoreTile = () => {
    futuresMoves = [];
    historicMoves = [];
    isFirstMove = true;
    setActive(false);
    setClearBoard(false);
  };

  useEffect(() => {
    if (clearBoard) {
      restoreTile();
    }
  }, [clearBoard]);

  return (
    <div
      data-index={index}
      onClick={handleClick}
      className={`${
        styles.tileContainer
      } ${validateItemSelected()} ${validateInvalidWord()} tile`}
    >
      {value}
    </div>
  );
};
export default Tile;

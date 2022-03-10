import { useContext, useEffect } from 'react';
import { HomeContext } from '@src/Context/home-context';
import styles from './styles.module.scss';

import dictionary from '@data/dictionary.json';
import { STATE_TEXT } from '@shared/constants';

const ResultWord = () => {
  const { selectedItems, stateText, setStateText } = useContext(HomeContext);

  const validateWord = () => {
    const word = selectedItems.join('');

    if (word.length < 3) {
      return;
    }

    if (!dictionary.words.some(element => element.includes(word.toLowerCase()))) {
      setStateText(STATE_TEXT.invalid);
      return;
    }

    if (dictionary.words.some(element => element === word.toLowerCase())) {
      setStateText(STATE_TEXT.valid);
    }
  };

  useEffect(() => {
    validateWord();
  }, [selectedItems]);

  return (
    <div
      className={`${styles.resultWordContainer} ${
        stateText === STATE_TEXT.invalid ? styles.resulInvalid : ''
      }`}
    >
      {selectedItems?.join('')}
      {stateText && (
        <span
          className={`${styles.state} ${
            stateText === STATE_TEXT.invalid ? styles.invalid : ''
          }`}
        >
          {stateText}
        </span>
      )}
    </div>
  );
};

export default ResultWord;

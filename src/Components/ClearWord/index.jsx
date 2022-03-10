import { useContext } from 'react';
import { HomeContext } from '@src/Context/home-context';
import styles from './styles.module.scss';

const ClearWord = () => {
  const { selectedItems, setSelectedItems, setStateText, setClearBoard } =
    useContext(HomeContext);

  const handleClearBoard = () => {
    setSelectedItems([]);
    setStateText(null);

    setClearBoard(true);
  };

  return (
    <>
      {selectedItems.length ? (
        <div className={styles.clearWordContainer}>
          <span>clear word</span>
          <button onClick={handleClearBoard} className={styles.clearButton}>
            <svg
              width={42}
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Close</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
};
export default ClearWord;

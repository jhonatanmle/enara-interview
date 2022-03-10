import { createContext, useState } from 'react';

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [stateText, setStateText] = useState('');
  const [clearBoard, setClearBoard] = useState(false);

  const state = {
    selectedItems,
    setSelectedItems,
    stateText,
    setStateText,
    clearBoard,
    setClearBoard,
  };

  return <HomeContext.Provider value={state}>{children}</HomeContext.Provider>;
};

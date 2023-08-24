import Screen from './components/Screen';
import React, { useState } from 'react';
import CounterContext from './context/CounterContext';

export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter: counter, setCounter: setCounter }}>
      <Screen></Screen>
    </CounterContext.Provider>
  );
}

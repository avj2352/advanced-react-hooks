// useReducer: simple Counter
// http://localhost:3000/isolated/final/01.js

import React from 'react'

const countReducer = (state, newState) => newState

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

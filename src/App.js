import React, { useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/DataFetching2';
// import GrandParent1 from './components/GrandParent1';
// import GrandParent2 from './components/GrandParent2';
// import GrandParent3 from './components/GrandParent3';

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <GrandParent1 />
        <GrandParent2 />
        <GrandParent3 />
      </CountContext.Provider> */}
      <DataFetching2 />
    </div>
  );
}

export default App;

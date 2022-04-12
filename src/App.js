import React from 'react';
import './App.css';
import CounterTwo from './components/CounterTwo';
// import GrandParent from './components/GrandParent';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <ChannelContext.Provider value='React JS'>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <CounterTwo />
    </div>
  );
}

export default App;

import React from 'react';

import { Header, State } from './components';

export const ThemeContext = React.createContext('lightTheme');

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <ThemeContext.Provider value="darkTheme">
        <Header title="Prop passed in" />
        <State />
      </ThemeContext.Provider>
    </header>
  </div>
);

export default App;

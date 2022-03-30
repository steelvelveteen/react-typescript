import './App.scss';
import { Header, State } from './components';

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      {/* <img alt="logo" className="App-logo" src={logo} /> */}
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Header title="Prop passed in" />
      <State />
      {/* <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
        Learn React
      </a> */}
    </header>
  </div>
);

export default App;

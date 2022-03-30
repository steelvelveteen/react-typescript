import { Header, State } from '@components';

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Header title="Prop passed in" />
      <State />
    </header>
  </div>
);

export default App;

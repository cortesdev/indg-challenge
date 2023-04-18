import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header>
        <h1>HIDE GAME</h1>
        <p>Beat eachother hiding the coins</p>
      </header>

      <Game maxItems={20} />
    </div>
  );
}

export default App;

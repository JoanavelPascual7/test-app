import knicks from './knicks_Image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={knicks}  alt="logo" />
        <p>
          2023 Eastern Conference Semi Finals
        </p>
        <a
          className="App-link"
          href="https://www.espn.com/nba/game/_/gameId/401544973"
          target="_blank"
          rel="noopener noreferrer"
        >
          Knicks VS Heat Game 1
        </a>
      </header>
    </div>
  );
}

export default App;

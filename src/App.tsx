import './App.css';
import WorldCupPlayersTable from './components/WorldCupPlayersTable';
import { samplePlayers } from './data/samplePlayers';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <WorldCupPlayersTable data={samplePlayers} />
      </div>
    </div>
  );
}

export default App;

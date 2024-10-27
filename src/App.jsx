import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1} />
          <TimerChallenge title="Lekko spocony" targetTime={5} />
          <TimerChallenge title="Cięzki" targetTime={10} />
          <TimerChallenge title="Dla miszczów" targetTime={15} />
      </div>
    </>
  );
}

export default App;

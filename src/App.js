import './App.css';
import Icon from './Components/Icon/Icon'
import Line from './Components/Line/Line';
import Welcome from './Components/Welcome/Welcome';
import Anime from './Components/Anime/Anime';
import Books from './Components/Books/Books';
import Movies from './Components/Movies/Movies';
import TVShows from './Components/TVShows/TVShows';

function App() {
  const start = "0"
  const end = "4"
  return (
    <div className="parent-container">
      <Icon />
      <Line />
      <div className="fiction-container">
        <Welcome />
        <Anime start={start} end={end}/>
        <Books start={start} end={end}/>
        <Movies />
        {/* <TVShows />  */}
      </div>
    </div>
  );
}

export default App;

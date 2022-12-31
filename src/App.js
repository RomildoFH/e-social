import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Routers from './Routes.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;

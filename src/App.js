import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Routers from './Routes.js'

function App() {
  return (
    <div className="App">
      <Router>       
        <Header /> 
        <Routers />
      </Router>
    </div>
  );
}

export default App;

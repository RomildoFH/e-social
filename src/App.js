import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routers from './Routes.js'

function App() {
  return (
    <div className="App">
      <Router>       
        <Header /> 
        <Routers />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

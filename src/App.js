import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AppContext from './context/AppContext';
import Routers from './Routes.js'

function App() {

  const { isLoading, setIsLoading } = useContext(AppContext);

  setTimeout(() => {
    setIsLoading(false);      
  }, 1000);

  return (
    <div className="App">
         
        {
          isLoading ? <p>Loading</p> : (
            <Router>   
              <Header /> 
              <Routers />
              <Footer />
            </Router>
          )
        }
    </div>
  );
}

export default App;

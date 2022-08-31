import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <MainRoute/>
    </div>
  );
}

export default App;

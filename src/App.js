import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home  from './pages/Home';
import Navbar from './components/Shared/Navbar';


function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      {/* <footer/> */}
    </Router>
  );
}

export default App;

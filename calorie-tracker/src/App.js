import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='*' exact Component={Home}/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
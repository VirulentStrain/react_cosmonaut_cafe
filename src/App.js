//import './App.css';
import Header from './/components/Header.js';
import Homepage from './pages/Homepage.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Inventory from './pages/Inventory.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;

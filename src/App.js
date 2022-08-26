import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Mission/Mission';
import Profile from './components/profile/Profile';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>

  );
}

export default App;
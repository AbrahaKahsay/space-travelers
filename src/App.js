import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Mission/Mission';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Mission" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>

  );
}

export default App;
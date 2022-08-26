import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Rockets from './components/Rocket/Rockets';
import Missions from './components/Mission/Missions';
import MyProfile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />pages
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

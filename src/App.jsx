import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/HomePage/Home";
import About from "./pages/HomePage/About";
import Amenites from "./pages/HomePage/Amenites";
import Contact from "./pages/HomePage/Contact";
import Location from "./pages/HomePage/Location";
import Rooms from "./pages/HomePage/Rooms";
import AboutPage from "./pages/AboutPage/AboutPage";
import RoomsPage from "./pages/RoomsPage/RoomsPage";

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage"  element={<AboutPage />} />
        <Route path="/roomsPage" element={<RoomsPage />} />
        <Route path="/amenities" element={<Amenites/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;


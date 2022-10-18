import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./component/booking/Book";
import About from "./component/foods/About";
import Navbar from "./component/navbar/Navbar";
import Rooms from "./component/rooms/Rooms";
import Home from "./home/Home";
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <div className="appbox">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookpage" element={<Book />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;

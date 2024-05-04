import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Chart from "./Pages/Chart";
import Contact from "./Pages/Contact"
import Create from "./Components/Create";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
    </div>
  );
}

export default App;
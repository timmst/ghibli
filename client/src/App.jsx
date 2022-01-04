import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import People from "./routes/People";
import Locations from "./routes/Locations";
import Home from "./routes/Home";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        alignItems: "center",
      }}
    >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/" render={() => <div>404</div>} />
      </Routes>
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </div>
  );
}

export default App;

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import People from "./routes/People"
import Locations from "./routes/Locations"
import Home from "./routes/Home";

function App() {
  return (
  <div className='App'>
      <Navbar />
      <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/" render={() => <div>404</div>} />
            </Routes>
            {/* <div className='w-100 d-flex justify-content-center '>
				<Footer />
			</div> */}
  </div>
  );
}

export default App;
